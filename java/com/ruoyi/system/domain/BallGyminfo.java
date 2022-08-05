package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 场馆信息对象 ball_gyminfo
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public class BallGyminfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** id */
    private Long id;

    /** 场馆名称 */
    @Excel(name = "场馆名称")
    private String gym;

    /** 场馆联系方式 */
    @Excel(name = "场馆联系方式")
    private String gymPhone;

    /** 场馆地址 */
    @Excel(name = "场馆地址")
    private String position;

    /** 场馆图片地址 */
    @Excel(name = "场馆图片地址")
    private String gymUrl;

    /** 价格 */
    @Excel(name = "价格")
    private String price;

    /** 开放时间 */
    @Excel(name = "开放时间")
    private String time;

    /** 限制人数 */
    @Excel(name = "限制人数")
    private String manNum;

    /** 营业情况 */
    @Excel(name = "营业情况")
    private String isbusiniss;

    public void setId(Long id) 
    {
        this.id = id;
    }

    public Long getId() 
    {
        return id;
    }
    public void setGym(String gym) 
    {
        this.gym = gym;
    }

    public String getGym() 
    {
        return gym;
    }
    public void setGymPhone(String gymPhone) 
    {
        this.gymPhone = gymPhone;
    }

    public String getGymPhone() 
    {
        return gymPhone;
    }
    public void setPosition(String position) 
    {
        this.position = position;
    }

    public String getPosition() 
    {
        return position;
    }
    public void setGymUrl(String gymUrl) 
    {
        this.gymUrl = gymUrl;
    }

    public String getGymUrl() 
    {
        return gymUrl;
    }
    public void setPrice(String price) 
    {
        this.price = price;
    }

    public String getPrice() 
    {
        return price;
    }
    public void setTime(String time) 
    {
        this.time = time;
    }

    public String getTime() 
    {
        return time;
    }
    public void setManNum(String manNum) 
    {
        this.manNum = manNum;
    }

    public String getManNum() 
    {
        return manNum;
    }
    public void setIsbusiniss(String isbusiniss) 
    {
        this.isbusiniss = isbusiniss;
    }

    public String getIsbusiniss() 
    {
        return isbusiniss;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("gym", getGym())
            .append("gymPhone", getGymPhone())
            .append("position", getPosition())
            .append("gymUrl", getGymUrl())
            .append("price", getPrice())
            .append("time", getTime())
            .append("manNum", getManNum())
            .append("isbusiniss", getIsbusiniss())
            .toString();
    }
}
