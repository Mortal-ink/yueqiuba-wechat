package com.ruoyi.system.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.system.mapper.BallGyminfoMapper;
import com.ruoyi.system.domain.BallGyminfo;
import com.ruoyi.system.service.IBallGyminfoService;
import com.ruoyi.common.core.text.Convert;

/**
 * 场馆信息Service业务层处理
 * 
 * @author ruoyi
 * @date 2021-04-12
 */
@Service
public class BallGyminfoServiceImpl implements IBallGyminfoService 
{
    @Autowired
    private BallGyminfoMapper ballGyminfoMapper;

    /**
     * 查询场馆信息
     * 
     * @param id 场馆信息ID
     * @return 场馆信息
     */
    @Override
    public BallGyminfo selectBallGyminfoById(Long id)
    {
        return ballGyminfoMapper.selectBallGyminfoById(id);
    }

    /**
     * 查询场馆信息列表
     * 
     * @param ballGyminfo 场馆信息
     * @return 场馆信息
     */
    @Override
    public List<BallGyminfo> selectBallGyminfoList(BallGyminfo ballGyminfo)
    {
        return ballGyminfoMapper.selectBallGyminfoList(ballGyminfo);
    }

    /**
     * 新增场馆信息
     * 
     * @param ballGyminfo 场馆信息
     * @return 结果
     */
    @Override
    public int insertBallGyminfo(BallGyminfo ballGyminfo)
    {
        return ballGyminfoMapper.insertBallGyminfo(ballGyminfo);
    }

    /**
     * 修改场馆信息
     * 
     * @param ballGyminfo 场馆信息
     * @return 结果
     */
    @Override
    public int updateBallGyminfo(BallGyminfo ballGyminfo)
    {
        return ballGyminfoMapper.updateBallGyminfo(ballGyminfo);
    }

    /**
     * 删除场馆信息对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    @Override
    public int deleteBallGyminfoByIds(String ids)
    {
        return ballGyminfoMapper.deleteBallGyminfoByIds(Convert.toStrArray(ids));
    }

    /**
     * 删除场馆信息信息
     * 
     * @param id 场馆信息ID
     * @return 结果
     */
    @Override
    public int deleteBallGyminfoById(Long id)
    {
        return ballGyminfoMapper.deleteBallGyminfoById(id);
    }
}
