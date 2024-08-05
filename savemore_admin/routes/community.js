import express from 'express';
import { getCommunities, getReportedCommunities, deleteCommunity, searchCommunities } from '../controller/community.js';

const router = express.Router();

router.get('/', getCommunities);
router.get('/reported', getReportedCommunities);
router.delete('/:id', deleteCommunity);
router.get('/search', searchCommunities);

export default router;