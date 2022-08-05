package com.ruoyi.system.controller;

import java.util.List;
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
import com.ruoyi.system.domain.BallUserinfo;
import com.ruoyi.system.service.IBallUserinfoService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 用户信息Controller
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Controller
@RequestMapping("/system/userinfo")
public class BallUserinfoController extends BaseController
{
    private String prefix = "system/userinfo";

    @Autowired
    private IBallUserinfoService ballUserinfoService;

    @GetMapping()
    public String userinfo()
    {
        return prefix + "/userinfo";
    }

    /**
     * 查询用户信息列表
     */
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(BallUserinfo ballUserinfo)
    {
        startPage();
        List<BallUserinfo> list = ballUserinfoService.selectBallUserinfoList(ballUserinfo);
        return getDataTable(list);
    }

    /**
     * 导出用户信息列表
     */
    @Log(title = "用户信息", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(BallUserinfo ballUserinfo)
    {
        List<BallUserinfo> list = ballUserinfoService.selectBallUserinfoList(ballUserinfo);
        ExcelUtil<BallUserinfo> util = new ExcelUtil<BallUserinfo>(BallUserinfo.class);
        return util.exportExcel(list, "userinfo");
    }

    /**
     * 新增用户信息
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存用户信息
     */
    @Log(title = "用户信息", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(BallUserinfo ballUserinfo)
    {
        int i = 0;
        List<BallUserinfo> list = ballUserinfoService.selectBallUserinfoList(ballUserinfo);
        if (list.size()>0){
            ballUserinfo.setId(list.get(0).getId());
            i = ballUserinfoService.updateBallUserinfo(ballUserinfo);
        }else{
            i = ballUserinfoService.insertBallUserinfo(ballUserinfo);
        }
        return toAjax(i);
    }

    /**
     * 修改用户信息
     */
    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, ModelMap mmap)
    {
        BallUserinfo ballUserinfo = ballUserinfoService.selectBallUserinfoById(id);
        mmap.put("ballUserinfo", ballUserinfo);
        return prefix + "/edit";
    }

    /**
     * 修改保存用户信息
     */
    @Log(title = "用户信息", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(BallUserinfo ballUserinfo)
    {
        return toAjax(ballUserinfoService.updateBallUserinfo(ballUserinfo));
    }

    /**
     * 删除用户信息
     */
    @Log(title = "用户信息", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(ballUserinfoService.deleteBallUserinfoByIds(ids));
    }
}
