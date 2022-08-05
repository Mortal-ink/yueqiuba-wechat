package com.ruoyi.system.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 订单信息对象 ball_orderinfo
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public class BallOrderinfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /**  */
    private Long id;

    /** 用户id */
    @Excel(name = "用户id")
    private String userid;

    private String gymid;

    /** 场馆地址 */
    @Excel(name = "场馆地址")
    private String gymaddress;

    /** 订单价格 */
    @Excel(name = "订单价格")
    private String orderprice;

    /** 预约时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "预约时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date appointmenttime;

    /** 订单状态 */
    @Excel(name = "订单状态")
    private String orderstatus;

    /** 用户联系方式 */
    @Excel(name = "用户联系方式")
    private String userphone;

    /** 限制人数 */
    @Excel(name = "限制人数")
    private String mannum;

    /** 下单时间 */
    @Excel(name = "下单时间")
    private String ordertime;

    /** 标题 */
    @Excel(name = "标题")
    private String title;




    public void setId(Long id) 
    {
        this.id = id;
    }

    public Long getId() 
    {
        return id;
    }
    public void setUserid(String userid) 
    {
        this.userid = userid;
    }

    public String getUserid() 
    {
        return userid;
    }
    public void setGymaddress(String gymaddress) 
    {
        this.gymaddress = gymaddress;
    }

    public String getGymaddress() 
    {
        return gymaddress;
    }
    public void setOrderprice(String orderprice) 
    {
        this.orderprice = orderprice;
    }

    public String getOrderprice() 
    {
        return orderprice;
    }
    public void setAppointmenttime(Date appointmenttime) 
    {
        this.appointmenttime = appointmenttime;
    }

    public Date getAppointmenttime() 
    {
        return appointmenttime;
    }
    public void setOrderstatus(String orderstatus) 
    {
        this.orderstatus = orderstatus;
    }

    public String getOrderstatus() 
    {
        return orderstatus;
    }
    public void setUserphone(String userphone) 
    {
        this.userphone = userphone;
    }

    public String getUserphone() 
    {
        return userphone;
    }
    public void setMannum(String mannum) 
    {
        this.mannum = mannum;
    }

    public String getMannum() 
    {
        return mannum;
    }
    public void setOrdertime(String ordertime) 
    {
        this.ordertime = ordertime;
    }

    public String getOrdertime() 
    {
        return ordertime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGymid() {
        return gymid;
    }

    public void setGymid(String gymid) {
        this.gymid = gymid;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userid", getUserid())
            .append("gymaddress", getGymaddress())
            .append("orderprice", getOrderprice())
            .append("appointmenttime", getAppointmenttime())
            .append("orderstatus", getOrderstatus())
            .append("userphone", getUserphone())
            .append("mannum", getMannum())
            .append("ordertime", getOrdertime())
            .toString();
    }
}
