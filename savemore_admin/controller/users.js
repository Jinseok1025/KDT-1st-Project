import * as userRepository from '../data/users.js';

export async function getAllUsers(req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    try {
        console.log(`Fetching users for page ${page} with limit ${limit}`); // 로그 추가
        const { users, totalUsers } = await userRepository.getAllUsers(page, limit, search);
        console.log(`Fetched ${users.length} users out of ${totalUsers}`); // 로그 추가
        res.status(200).json({ users, totalUsers });
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        next(error);
    }
}

export async function getUserById(req, res, next) {
    try {
      const user = await userRepository.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  export async function deleteUser(req, res, next) {
    try {
      const user = await userRepository.deleteUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
      }
      res.status(200).json({ message: '사용자가 삭제되었습니다.' });
    } catch (error) {
      next(error);
    }
  }