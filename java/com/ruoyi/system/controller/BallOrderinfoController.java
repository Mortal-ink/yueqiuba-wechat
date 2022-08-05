package com.ruoyi.system.controller;

import java.util.Date;
import java.util.List;

import com.ruoyi.system.domain.BallGyminfo;
import com.ruoyi.system.domain.BallUserinfo;
import com.ruoyi.system.domain.BallYoopinfo;
import com.ruoyi.system.service.IBallGyminfoService;
import com.ruoyi.system.service.IBallUserinfoService;
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
import com.ruoyi.system.domain.BallOrderinfo;
import com.ruoyi.system.service.IBallOrderinfoService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 订单信息Controller
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Controller
@RequestMapping("/system/orderinfo")
public class BallOrderinfoController extends BaseController
{
    private String prefix = "system/orderinfo";

    @Autowired
    private IBallOrderinfoService ballOrderinfoService;

    @Autowired
    private IBallYoopinfoService ballYoopinfoService;

    @Autowired
    private IBallUserinfoService ballUserinfoService;


    @Autowired
    private IBallGyminfoService ballGyminfoService;

    @GetMapping()
    public String orderinfo()
    {
        return prefix + "/orderinfo";
    }

    /**
     * 查询订单信息列表
     */

    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(BallOrderinfo ballOrderinfo)
    {
        startPage();
        List<BallOrderinfo> list = ballOrderinfoService.selectBallOrderinfoList(ballOrderinfo);
        return getDataTable(list);
    }

    /**
     * 导出订单信息列表
     */

    @Log(title = "订单信息", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(BallOrderinfo ballOrderinfo)
    {
        List<BallOrderinfo> list = ballOrderinfoService.selectBallOrderinfoList(ballOrderinfo);
        ExcelUtil<BallOrderinfo> util = new ExcelUtil<BallOrderinfo>(BallOrderinfo.class);
        return util.exportExcel(list, "orderinfo");
    }

    /**
     * 新增订单信息
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存订单信息
     */

    @Log(title = "订单信息", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(BallOrderinfo ballOrderinfo)
    {
        return toAjax(ballOrderinfoService.insertBallOrderinfo(ballOrderinfo));
    }

    @PostMapping("/addOrder")
    @ResponseBody
    public AjaxResult addOrder(BallOrderinfo ballOrderinfo)
    {
        BallUserinfo ballUserinfo = new BallUserinfo();
        ballUserinfo.setOpenid(ballOrderinfo.getUserid());
        List<BallUserinfo> list =  ballUserinfoService.selectBallUserinfoList(ballUserinfo);

        BallGyminfo ballGyminfo = new BallGyminfo();
        ballGyminfo.setId(Long.valueOf(ballOrderinfo.getGymid()));
        BallGyminfo ballGyminfo2 = ballGyminfoService.selectBallGyminfoById(Long.valueOf(ballOrderinfo.getGymid()));

        BallYoopinfo ballYoopinfo = new BallYoopinfo();
        ballYoopinfo.setTitle(ballOrderinfo.getTitle());
        ballYoopinfo.setName(list.get(0).getNick());
        ballYoopinfo.setSite(ballGyminfo2.getGym());
        ballYoopinfo.setPhone(list.get(0).getPhone());
        ballYoopinfo.setCost(ballGyminfo2.getPrice());
        ballYoopinfo.setTime(ballOrderinfo.getAppointmenttime());
        ballYoopinfo.setNum(ballOrderinfo.getMannum());
        ballYoopinfo.setSnum("1");
        ballYoopinfoService.insertBallYoopinfo(ballYoopinfo);


        ballOrderinfo.setGymaddress(ballGyminfo2.getPosition());
        ballOrderinfo.setOrderprice(String.valueOf(Integer.valueOf(ballOrderinfo.getMannum())*Integer.valueOf(ballGyminfo2.getPrice())));
        ballOrderinfo.setOrderstatus("待审核");
        ballOrderinfo.setUserphone(list.get(0).getPhone());
        ballOrderinfo.setOrdertime(new Date().toString());
        ballOrderinfo.setRemark(String.valueOf(ballYoopinfo.getId()));
        return toAjax(ballOrderinfoService.insertBallOrderinfo(ballOrderinfo));
    }

    /**
     * 修改订单信息
     */
    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") Long id, ModelMap mmap)
    {
        BallOrderinfo ballOrderinfo = ballOrderinfoService.selectBallOrderinfoById(id);
        mmap.put("ballOrderinfo", ballOrderinfo);
        return prefix + "/edit";
    }

    /**
     * 修改保存订单信息
     */
    @Log(title = "订单信息", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(BallOrderinfo ballOrderinfo)
    {
        if (ballOrderinfo.getOrderstatus().equals("未通过")){
            BallYoopinfo ballYoopinfo = new BallYoopinfo();
            ballYoopinfoService.deleteBallYoopinfoById(Long.valueOf(ballOrderinfo.getRemark()));
        }

        return toAjax(ballOrderinfoService.updateBallOrderinfo(ballOrderinfo));
    }

    /**
     * 删除订单信息
     */
    @Log(title = "订单信息", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(ballOrderinfoService.deleteBallOrderinfoByIds(ids));
    }
}
