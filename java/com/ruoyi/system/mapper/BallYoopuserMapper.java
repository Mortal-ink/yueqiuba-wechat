package com.ruoyi.system.mapper;

import java.util.List;
import com.ruoyi.system.domain.BallYoopuser;

/**
 * 约球记录Mapper接口
 * 
 * @author ruoyi
 * @date 2021-04-26
 */
public interface BallYoopuserMapper 
{
    /**
     * 查询约球记录
     * 
     * @param id 约球记录ID
     * @return 约球记录
     */
    public BallYoopuser selectBallYoopuserById(Long id);

    /**
     * 查询约球记录列表
     * 
     * @param ballYoopuser 约球记录
     * @return 约球记录集合
     */
    public List<BallYoopuser> selectBallYoopuserList(BallYoopuser ballYoopuser);

    /**
     * 新增约球记录
     * 
     * @param ballYoopuser 约球记录
     * @return 结果
     */
    public int insertBallYoopuser(BallYoopuser ballYoopuser);

    /**
     * 修改约球记录
     * 
     * @param ballYoopuser 约球记录
     * @return 结果
     */
    public int updateBallYoopuser(BallYoopuser ballYoopuser);

    /**
     * 删除约球记录
     * 
     * @param id 约球记录ID
     * @return 结果
     */
    public int deleteBallYoopuserById(Long id);

    /**
     * 批量删除约球记录
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteBallYoopuserByIds(String[] ids);
}
