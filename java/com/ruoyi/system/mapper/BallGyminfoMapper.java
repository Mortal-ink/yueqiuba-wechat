package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.BallGyminfo;

/**
 * 场馆信息Mapper接口
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public interface BallGyminfoMapper 
{
    /**
     * 查询场馆信息
     * 
     * @param id 场馆信息ID
     * @return 场馆信息
     */
    public BallGyminfo selectBallGyminfoById(Long id);

    /**
     * 查询场馆信息列表
     * 
     * @param ballGyminfo 场馆信息
     * @return 场馆信息集合
     */
    public List<BallGyminfo> selectBallGyminfoList(BallGyminfo ballGyminfo);

    /**
     * 新增场馆信息
     * 
     * @param ballGyminfo 场馆信息
     * @return 结果
     */
    public int insertBallGyminfo(BallGyminfo ballGyminfo);

    /**
     * 修改场馆信息
     * 
     * @param ballGyminfo 场馆信息
     * @return 结果
     */
    public int updateBallGyminfo(BallGyminfo ballGyminfo);

    /**
     * 删除场馆信息
     * 
     * @param id 场馆信息ID
     * @return 结果
     */
    public int deleteBallGyminfoById(Long id);

    /**
     * 批量删除场馆信息
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteBallGyminfoByIds(String[] ids);
}
