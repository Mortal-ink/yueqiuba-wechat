package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.BallYoopinfo;

/**
 * 活动Mapper接口
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
public interface BallYoopinfoMapper 
{
    /**
     * 查询活动
     * 
     * @param id 活动ID
     * @return 活动
     */
    public BallYoopinfo selectBallYoopinfoById(Long id);

    /**
     * 查询活动列表
     * 
     * @param ballYoopinfo 活动
     * @return 活动集合
     */
    public List<BallYoopinfo> selectBallYoopinfoList(BallYoopinfo ballYoopinfo);

    /**
     * 新增活动
     * 
     * @param ballYoopinfo 活动
     * @return 结果
     */
    public int insertBallYoopinfo(BallYoopinfo ballYoopinfo);

    /**
     * 修改活动
     * 
     * @param ballYoopinfo 活动
     * @return 结果
     */
    public int updateBallYoopinfo(BallYoopinfo ballYoopinfo);

    /**
     * 删除活动
     * 
     * @param id 活动ID
     * @return 结果
     */
    public int deleteBallYoopinfoById(Long id);

    /**
     * 批量删除活动
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteBallYoopinfoByIds(String[] ids);
}
