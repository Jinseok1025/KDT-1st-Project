import Community from '../data/community.js';
import mongoose from 'mongoose';

// 커뮤니티 글 목록 조회
export const getCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// 신고된 커뮤니티 글 목록 조회
export const getReportedCommunities = async (req, res) => {
  try {
    const reportedCommunities = await Community.find({ alert: { $gte: 1 } });
    res.json(reportedCommunities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


// 커뮤니티 글 삭제
export const deleteCommunity = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const community = await Community.findByIdAndDelete(id);
    if (!community) {
      return res.status(404).json({ message: 'Community post not found' });
    }

    res.json({ message: 'Community post deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// 커뮤니티 글 검색
export const searchCommunities = async (req, res) => {
  const { query } = req.query;
  try {
    const communities = await Community.find({ 
      $or: [
        { title: new RegExp(query, 'i') },
        { text: new RegExp(query, 'i') }
      ]
    });
    res.json(communities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
