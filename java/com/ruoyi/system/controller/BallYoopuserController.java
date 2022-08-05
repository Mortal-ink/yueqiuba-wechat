package com.ruoyi.system.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ruoyi.system.domain.BallYoopinfo;
import com.ruoyi.system.service.IBallYoopinfoService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.system.domain.BallYoopuser;
import com.ruoyi.system.service.IBallYoopuserService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 约球记录Controller
 * 
 * @author ruoyi
 * @date 2021-04-26
 */
@Controller
@RequestMapping("/system/yoopuser")
public class BallYoopuserController extends BaseController
{
    private String prefix = "system/yoopuser";

    @Autowired
    private IBallYoopuserService ballYoopuserService;

    @Autowired
    private IBallYoopinfoService ballYoopinfoService;


    @GetMapping()
    public String yoopuser()
    {
        return prefix + "/yoopuser";
    }

    /**
     * 查询约球记录列表
     */

    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(BallYoopuser ballYoopuser)
    {
        startPage();
        List<BallYoopuser> list = ballYoopuserService.selectBallYoopuserList(ballYoopuser);
        return getDataTable(list);
    }

    /**
     * 导出约球记录列表
     */

    @Log(title = "约球记录", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(BallYoopuser ballYoopuser)
    {
        List<BallYoopuser> list = ballYoopuserService.selectBallYoopuserList(ballYoopuser);
        ExcelUtil<BallYoopuser> util = new ExcelUtil<BallYoopuser>(BallYoopuser.class);
        return util.exportExcel(list, "yoopuser");
    }

    /**
     * 新增约球记录
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存约球记录
     */

    @Log(title = "约球记录", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(BallYoopuser ballYoopuser)
    {
        return toAjax(ballYoopuserService.insertBallYoopuser(ballYoopuser));
    }

    /**
     * 修改约球记录
     */
    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, ModelMap mmap)
    {
        BallYoopuser ballYoopuser = ballYoopuserService.selectBallYoopuserById(id);
        mmap.put("ballYoopuser", ballYoopuser);
        return prefix + "/edit";
    }

    /**
     * 修改保存约球记录
     */

    @Log(title = "约球记录", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(BallYoopuser ballYoopuser)
    {
        return toAjax(ballYoopuserService.updateBallYoopuser(ballYoopuser));
    }

    /**
     * 删除约球记录
     */

    @Log(title = "约球记录", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(ballYoopuserService.deleteBallYoopuserByIds(ids));
    }


    @PostMapping("/getYoop")
    @ResponseBody
    public TableDataInfo getYoop(BallYoopuser ballYoopuser)
    {
        List<BallYoopuser> list = ballYoopuserService.selectBallYoopuserList(ballYoopuser);
        return getDataTable(list);
    }

    @PostMapping("/changeYoop")
    @ResponseBody
    public Map<String, Object> changeYoop(BallYoopuser ballYoopuser)
    {
        Map<String,Object> result = new HashMap<>();
        int i = 0;
        List<BallYoopuser> list = ballYoopuserService.selectBallYoopuserList(ballYoopuser);

        BallYoopinfo ballYoopinfo =  ballYoopinfoService.selectBallYoopinfoById(Long.valueOf(ballYoopuser.getYoopid()));
        if (list.size()>0){
            i = ballYoopuserService.deleteBallYoopuserByIds(String.valueOf(list.get(0).getId()));
            ballYoopinfo.setSnum(String.valueOf(Integer.valueOf(ballYoopinfo.getSnum())-1));
            ballYoopinfoService.updateBallYoopinfo(ballYoopinfo);
            result.put("msg","取消成功");
            result.put("code",i);
        }else{
            if (ballYoopinfo.getNum().equals(ballYoopinfo.getSnum())){
                result.put("msg","预约失败，人数已满");
                result.put("code",0);
            }else{
                ballYoopinfo.setSnum(String.valueOf(Integer.valueOf(ballYoopinfo.getSnum())+1));
                ballYoopinfoService.updateBallYoopinfo(ballYoopinfo);
                i = ballYoopuserService.insertBallYoopuser(ballYoopuser);
                result.put("msg","预约成功");
                result.put("code",i);
            }
        }
        return result;
    }



}
