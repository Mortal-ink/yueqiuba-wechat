package com.ruoyi.system.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.BallYoopuserMapper;
import com.ruoyi.system.domain.BallYoopuser;
import com.ruoyi.system.service.IBallYoopuserService;
import com.ruoyi.common.core.text.Convert;

/**
 * 约球记录Service业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-26
 */
@Service
public class BallYoopuserServiceImpl implements IBallYoopuserService 
{
    @Autowired
    private BallYoopuserMapper ballYoopuserMapper;

    /**
     * 查询约球记录
     * 
     * @param id 约球记录ID
     * @return 约球记录
     */
    @Override
    public BallYoopuser selectBallYoopuserById(Long id)
    {
        return ballYoopuserMapper.selectBallYoopuserById(id);
    }

    /**
     * 查询约球记录列表
     * 
     * @param ballYoopuser 约球记录
     * @return 约球记录
     */
    @Override
    public List<BallYoopuser> selectBallYoopuserList(BallYoopuser ballYoopuser)
    {
        return ballYoopuserMapper.selectBallYoopuserList(ballYoopuser);
    }

    /**
     * 新增约球记录
     * 
     * @param ballYoopuser 约球记录
     * @return 结果
     */
    @Override
    public int insertBallYoopuser(BallYoopuser ballYoopuser)
    {
        return ballYoopuserMapper.insertBallYoopuser(ballYoopuser);
    }

    /**
     * 修改约球记录
     * 
     * @param ballYoopuser 约球记录
     * @return 结果
     */
    @Override
    public int updateBallYoopuser(BallYoopuser ballYoopuser)
    {
        return ballYoopuserMapper.updateBallYoopuser(ballYoopuser);
    }

    /**
     * 删除约球记录对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteBallYoopuserByIds(String ids)
    {
        return ballYoopuserMapper.deleteBallYoopuserByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除约球记录信息
     * 
     * @param id 约球记录ID
     * @return 结果
     */
    @Override
    public int deleteBallYoopuserById(Long id)
    {
        return ballYoopuserMapper.deleteBallYoopuserById(id);
    }
}
