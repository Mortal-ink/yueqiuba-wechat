package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.BallUserinfo;

/**
 * 用户信息Mapper接口
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public interface BallUserinfoMapper 
{
    /**
     * 查询用户信息
     * 
     * @param id 用户信息ID
     * @return 用户信息
     */
    public BallUserinfo selectBallUserinfoById(Long id);

    /**
     * 查询用户信息列表
     * 
     * @param ballUserinfo 用户信息
     * @return 用户信息集合
     */
    public List<BallUserinfo> selectBallUserinfoList(BallUserinfo ballUserinfo);

    /**
     * 新增用户信息
     * 
     * @param ballUserinfo 用户信息
     * @return 结果
     */
    public int insertBallUserinfo(BallUserinfo ballUserinfo);

    /**
     * 修改用户信息
     * 
     * @param ballUserinfo 用户信息
     * @return 结果
     */
    public int updateBallUserinfo(BallUserinfo ballUserinfo);

    /**
     * 删除用户信息
     * 
     * @param id 用户信息ID
     * @return 结果
     */
    public int deleteBallUserinfoById(Long id);

    /**
     * 批量删除用户信息
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteBallUserinfoByIds(String[] ids);
}
