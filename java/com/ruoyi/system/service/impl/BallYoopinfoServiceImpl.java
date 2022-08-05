package com.ruoyi.system.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.BallYoopinfoMapper;
import com.ruoyi.system.domain.BallYoopinfo;
import com.ruoyi.system.service.IBallYoopinfoService;
import com.ruoyi.common.core.text.Convert;

/**
 * 活动Service业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Service
public class BallYoopinfoServiceImpl implements IBallYoopinfoService 
{
    @Autowired
    private BallYoopinfoMapper ballYoopinfoMapper;

    /**
     * 查询活动
     * 
     * @param id 活动ID
     * @return 活动
     */
    @Override
    public BallYoopinfo selectBallYoopinfoById(Long id)
    {
        return ballYoopinfoMapper.selectBallYoopinfoById(id);
    }

    /**
     * 查询活动列表
     * 
     * @param ballYoopinfo 活动
     * @return 活动
     */
    @Override
    public List<BallYoopinfo> selectBallYoopinfoList(BallYoopinfo ballYoopinfo)
    {
        return ballYoopinfoMapper.selectBallYoopinfoList(ballYoopinfo);
    }

    /**
     * 新增活动
     * 
     * @param ballYoopinfo 活动
     * @return 结果
     */
    @Override
    public int insertBallYoopinfo(BallYoopinfo ballYoopinfo)
    {
        return ballYoopinfoMapper.insertBallYoopinfo(ballYoopinfo);
    }

    /**
     * 修改活动
     * 
     * @param ballYoopinfo 活动
     * @return 结果
     */
    @Override
    public int updateBallYoopinfo(BallYoopinfo ballYoopinfo)
    {
        return ballYoopinfoMapper.updateBallYoopinfo(ballYoopinfo);
    }

    /**
     * 删除活动对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteBallYoopinfoByIds(String ids)
    {
        return ballYoopinfoMapper.deleteBallYoopinfoByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除活动信息
     * 
     * @param id 活动ID
     * @return 结果
     */
    @Override
    public int deleteBallYoopinfoById(Long id)
    {
        return ballYoopinfoMapper.deleteBallYoopinfoById(id);
    }
}
