package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.BallOrderinfo;

/**
 * 订单信息Mapper接口
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public interface BallOrderinfoMapper 
{
    /**
     * 查询订单信息
     * 
     * @param id 订单信息ID
     * @return 订单信息
     */
    public BallOrderinfo selectBallOrderinfoById(Long id);

    /**
     * 查询订单信息列表
     * 
     * @param ballOrderinfo 订单信息
     * @return 订单信息集合
     */
    public List<BallOrderinfo> selectBallOrderinfoList(BallOrderinfo ballOrderinfo);

    /**
     * 新增订单信息
     * 
     * @param ballOrderinfo 订单信息
     * @return 结果
     */
    public int insertBallOrderinfo(BallOrderinfo ballOrderinfo);

    /**
     * 修改订单信息
     * 
     * @param ballOrderinfo 订单信息
     * @return 结果
     */
    public int updateBallOrderinfo(BallOrderinfo ballOrderinfo);

    /**
     * 删除订单信息
     * 
     * @param id 订单信息ID
     * @return 结果
     */
    public int deleteBallOrderinfoById(Long id);

    /**
     * 批量删除订单信息
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteBallOrderinfoByIds(String[] ids);
}
