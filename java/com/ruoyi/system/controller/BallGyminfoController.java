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
import com.ruoyi.system.domain.BallGyminfo;
import com.ruoyi.system.service.IBallGyminfoService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 场馆信息Controller
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Controller
@RequestMapping("/system/gyminfo")
public class BallGyminfoController extends BaseController
{
    private String prefix = "system/gyminfo";

    @Autowired
    private IBallGyminfoService ballGyminfoService;

    @GetMapping()
    public String gyminfo()
    {
        return prefix + "/gyminfo";
    }

    /**
     * 查询场馆信息列表
     */
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(BallGyminfo ballGyminfo)
    {
        startPage();
        List<BallGyminfo> list = ballGyminfoService.selectBallGyminfoList(ballGyminfo);
        return getDataTable(list);
    }

    /**
     * 导出场馆信息列表
     */
    @Log(title = "场馆信息", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(BallGyminfo ballGyminfo)
    {
        List<BallGyminfo> list = ballGyminfoService.selectBallGyminfoList(ballGyminfo);
        ExcelUtil<BallGyminfo> util = new ExcelUtil<BallGyminfo>(BallGyminfo.class);
        return util.exportExcel(list, "gyminfo");
    }

    /**
     * 新增场馆信息
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存场馆信息
     */
    @Log(title = "场馆信息", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(BallGyminfo ballGyminfo)
    {
        return toAjax(ballGyminfoService.insertBallGyminfo(ballGyminfo));
    }

    /**
     * 修改场馆信息
     */
    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, ModelMap mmap)
    {
        BallGyminfo ballGyminfo = ballGyminfoService.selectBallGyminfoById(id);
        mmap.put("ballGyminfo", ballGyminfo);
        return prefix + "/edit";
    }

    /**
     * 修改保存场馆信息
     */
    @Log(title = "场馆信息", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(BallGyminfo ballGyminfo)
    {
        return toAjax(ballGyminfoService.updateBallGyminfo(ballGyminfo));
    }

    /**
     * 删除场馆信息
     */
    @Log(title = "场馆信息", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(ballGyminfoService.deleteBallGyminfoByIds(ids));
    }
}
