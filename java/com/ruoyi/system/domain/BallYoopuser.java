package com.ruoyi.system.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

import java.util.Date;

/**
 * 约球记录对象 ball_yoopuser
 * 
 * @author ruoyi
 * @date 2021-04-26
 */
public class BallYoopuser extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private Long id;

    /** 用户Id */
    @Excel(name = "用户Id")
    private String userid;

    /** 约球id */
    @Excel(name = "约球id")
    private String yoopid;

    @Excel(name = "标题")
    private String title;

    /** 发起人昵称 */
    @Excel(name = "发起人昵称")
    private String name;

    /** 场地地址 */
    @Excel(name = "场地地址")
    private String site;

    /** 发起人联系方式 */
    @Excel(name = "发起人联系方式")
    private String phone;

    /** 费用 */
    @Excel(name = "费用")
    private String cost;

    /** 约球日期 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "约球日期", width = 30, dateFormat = "yyyy-MM-dd")
    private Date time;

    /** 活动人数 */
    @Excel(name = "活动人数")
    private String num;

    /** 现参与人数 */
    @Excel(name = "现参与人数")
    private String snum;

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
    public void setYoopid(String yoopid) 
    {
        this.yoopid = yoopid;
    }

    public String getYoopid() 
    {
        return yoopid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public String getSnum() {
        return snum;
    }

    public void setSnum(String snum) {
        this.snum = snum;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("userid", getUserid())
            .append("yoopid", getYoopid())
            .toString();
    }
}
