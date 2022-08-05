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
import com.ruoyi.system.domain.BallYoopinfo;
import com.ruoyi.system.service.IBallYoopinfoService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 活动Controller
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Controller
@RequestMapping("/system/yoopinfo")
public class BallYoopinfoController extends BaseController
{
    private String prefix = "system/yoopinfo";

    @Autowired
    private IBallYoopinfoService ballYoopinfoService;


    @RequiresPermissions("system:yoopinfo:view")
    @GetMapping()
    public String yoopinfo()
    {
        return prefix + "/yoopinfo";
    }

    /**
     * 查询活动列表
     */
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(BallYoopinfo ballYoopinfo)
    {
        startPage();
        List<BallYoopinfo> list = ballYoopinfoService.selectBallYoopinfoList(ballYoopinfo);
        return getDataTable(list);
    }

    /**
     * 导出活动列表
     */
    @Log(title = "活动", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(BallYoopinfo ballYoopinfo)
    {
        List<BallYoopinfo> list = ballYoopinfoService.selectBallYoopinfoList(ballYoopinfo);
        ExcelUtil<BallYoopinfo> util = new ExcelUtil<BallYoopinfo>(BallYoopinfo.class);
        return util.exportExcel(list, "yoopinfo");
    }

    /**
     * 新增活动
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存活动
     */
    @Log(title = "活动", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(BallYoopinfo ballYoopinfo)
    {
        return toAjax(ballYoopinfoService.insertBallYoopinfo(ballYoopinfo));
    }

    /**
     * 修改活动
     */
    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, ModelMap mmap)
    {
        BallYoopinfo ballYoopinfo = ballYoopinfoService.selectBallYoopinfoById(id);
        mmap.put("ballYoopinfo", ballYoopinfo);
        return prefix + "/edit";
    }

    /**
     * 修改保存活动
     */
    @Log(title = "活动", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(BallYoopinfo ballYoopinfo)
    {
        return toAjax(ballYoopinfoService.updateBallYoopinfo(ballYoopinfo));
    }

    /**
     * 删除活动
     */
    @Log(title = "活动", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(ballYoopinfoService.deleteBallYoopinfoByIds(ids));
    }
}
