package com.ruoyi.system.service.impl;

import com.ruoyi.common.core.text.Convert;
import com.ruoyi.system.domain.BallOrderinfo;
import com.ruoyi.system.mapper.BallOrderinfoMapper;
import com.ruoyi.system.service.IBallOrderinfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 订单信息Service业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Service
public class BallOrderinfoServiceImpl implements IBallOrderinfoService 
{
    @Autowired
    private BallOrderinfoMapper ballOrderinfoMapper;

    /**
     * 查询订单信息
     * 
     * @param id 订单信息ID
     * @return 订单信息
     */
    @Override
    public BallOrderinfo selectBallOrderinfoById(Long id)
    {
        return ballOrderinfoMapper.selectBallOrderinfoById(id);
    }

    /**
     * 查询订单信息列表
     * 
     * @param ballOrderinfo 订单信息
     * @return 订单信息
     */
    @Override
    public List<BallOrderinfo> selectBallOrderinfoList(BallOrderinfo ballOrderinfo)
    {

        return ballOrderinfoMapper.selectBallOrderinfoList(ballOrderinfo);
    }

    /**
     * 新增订单信息
     * 
     * @param ballOrderinfo 订单信息
     * @return 结果
     */
    @Override
    public int insertBallOrderinfo(BallOrderinfo ballOrderinfo)
    {
        return ballOrderinfoMapper.insertBallOrderinfo(ballOrderinfo);
    }

    /**
     * 修改订单信息
     * 
     * @param ballOrderinfo 订单信息
     * @return 结果
     */
    @Override
    public int updateBallOrderinfo(BallOrderinfo ballOrderinfo)
    {
        return ballOrderinfoMapper.updateBallOrderinfo(ballOrderinfo);
    }

    /**
     * 删除订单信息对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteBallOrderinfoByIds(String ids)
    {
        return ballOrderinfoMapper.deleteBallOrderinfoByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除订单信息信息
     * 
     * @param id 订单信息ID
     * @return 结果
     */
    @Override
    public int deleteBallOrderinfoById(Long id)
    {
        return ballOrderinfoMapper.deleteBallOrderinfoById(id);
    }
}
