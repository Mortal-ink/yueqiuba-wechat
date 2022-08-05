package com.ruoyi.system.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 活动对象 ball_yoopinfo
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public class BallYoopinfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 约球活动id */
    private Long id;

    /** 标题 */
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
    public void setTitle(String title) 
    {
        this.title = title;
    }

    public String getTitle() 
    {
        return title;
    }
    public void setName(String name) 
    {
        this.name = name;
    }

    public String getName() 
    {
        return name;
    }
    public void setSite(String site) 
    {
        this.site = site;
    }

    public String getSite() 
    {
        return site;
    }
    public void setPhone(String phone) 
    {
        this.phone = phone;
    }

    public String getPhone() 
    {
        return phone;
    }
    public void setCost(String cost) 
    {
        this.cost = cost;
    }

    public String getCost() 
    {
        return cost;
    }
    public void setTime(Date time) 
    {
        this.time = time;
    }

    public Date getTime() 
    {
        return time;
    }
    public void setNum(String num) 
    {
        this.num = num;
    }

    public String getNum() 
    {
        return num;
    }
    public void setSnum(String snum) 
    {
        this.snum = snum;
    }

    public String getSnum() 
    {
        return snum;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("title", getTitle())
            .append("name", getName())
            .append("site", getSite())
            .append("phone", getPhone())
            .append("cost", getCost())
            .append("time", getTime())
            .append("num", getNum())
            .append("snum", getSnum())
            .append("remark", getRemark())
            .toString();
    }
}
