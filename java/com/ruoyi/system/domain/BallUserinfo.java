package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 用户信息对象 ball_userinfo
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public class BallUserinfo extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 用户id */
    private Long id;

    /** 用户微信唯一标识id */
    @Excel(name = "用户微信唯一标识id")
    private String openid;

    /** 联系方式 */
    @Excel(name = "联系方式")
    private String phone;

    /** 用户昵称 */
    @Excel(name = "用户昵称")
    private String nick;

    /** 用户年龄 */
    @Excel(name = "用户年龄")
    private String age;

    /** 用户头像地址 */
    @Excel(name = "用户头像地址")
    private String avatar;

    /** 用户性别 */
    @Excel(name = "用户性别")
    private String sex;

    public void setId(Long id) 
    {
        this.id = id;
    }
    public Long getId() 
    {
        return id;
    }

    public void setOpenid(String openid) 
    {
        this.openid = openid;
    }
    public String getOpenid() 
    {
        return openid;
    }

    public void setPhone(String phone) 
    {
        this.phone = phone;
    }
    public String getPhone() 
    {
        return phone;
    }

    public void setNick(String nick) 
    {
        this.nick = nick;
    }
    public String getNick()
    {
        return nick;
    }

    public void setAge(String age) { this.age = age; }
    public String getAge()
    {
        return age;
    }

    public void setAvatar(String avatar) 
    {
        this.avatar = avatar;
    }
    public String getAvatar() 
    {
        return avatar;
    }


    public void setSex(String sex) 
    {
        this.sex = sex;
    }
    public String getSex() 
    {
        return sex;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("id", getId())
            .append("openid", getOpenid())
            .append("phone", getPhone())
            .append("nick", getNick())
            .append("age", getAge())
            .append("avatar", getAvatar())
            .append("sex", getSex())
            .toString();
    }
}
