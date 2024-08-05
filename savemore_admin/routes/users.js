import express from 'express'
import * as userController from '../controller/users.js'

const router = express.Router()

router.get('/', (req, res, next) => {
    userController.getAllUsers(req, res, next);
  });
  router.get('/:id', (req, res, next) => {
    userController.getUserById(req, res, next);
  });
  router.delete('/:id', (req, res, next) => {
    userController.deleteUser(req, res, next);
  });

export default router;