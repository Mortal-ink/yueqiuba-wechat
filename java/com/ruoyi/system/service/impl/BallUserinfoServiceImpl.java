package com.ruoyi.system.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.BallUserinfoMapper;
import com.ruoyi.system.domain.BallUserinfo;
import com.ruoyi.system.service.IBallUserinfoService;
import com.ruoyi.common.core.text.Convert;

/**
 * 用户信息Service业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Service
public class BallUserinfoServiceImpl implements IBallUserinfoService 
{
    @Autowired
    private BallUserinfoMapper ballUserinfoMapper;

    /**
     * 查询用户信息
     * 
     * @param id 用户信息ID
     * @return 用户信息
     */
    @Override
    public BallUserinfo selectBallUserinfoById(Long id)
    {
        return ballUserinfoMapper.selectBallUserinfoById(id);
    }

    /**
     * 查询用户信息列表
     * 
     * @param ballUserinfo 用户信息
     * @return 用户信息
     */
    @Override
    public List<BallUserinfo> selectBallUserinfoList(BallUserinfo ballUserinfo)
    {
        return ballUserinfoMapper.selectBallUserinfoList(ballUserinfo);
    }

    /**
     * 新增用户信息
     * 
     * @param ballUserinfo 用户信息
     * @return 结果
     */
    @Override
    public int insertBallUserinfo(BallUserinfo ballUserinfo)
    {
        return ballUserinfoMapper.insertBallUserinfo(ballUserinfo);
    }

    /**
     * 修改用户信息
     * 
     * @param ballUserinfo 用户信息
     * @return 结果
     */
    @Override
    public int updateBallUserinfo(BallUserinfo ballUserinfo)
    {
        return ballUserinfoMapper.updateBallUserinfo(ballUserinfo);
    }

    /**
     * 删除用户信息对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteBallUserinfoByIds(String ids)
    {
        return ballUserinfoMapper.deleteBallUserinfoByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除用户信息信息
     * 
     * @param id 用户信息ID
     * @return 结果
     */
    @Override
    public int deleteBallUserinfoById(Long id)
    {
        return ballUserinfoMapper.deleteBallUserinfoById(id);
    }
}
