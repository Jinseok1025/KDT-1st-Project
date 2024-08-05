import express from "express";
import * as loginController from '../controller/login.js';
import { body } from 'express-validator';
import { validate } from "../middleware/validator.js";

const router = express.Router()

const validateLogin = [
    body('userid').notEmpty().withMessage('아이디를 입력하세요.'),
    body('password').notEmpty().withMessage('비밀번호를 입력하세요.'),validate
];

// 로그인
router.post('/', validateLogin, loginController.login);

// 로그아웃
router.post('/logout', loginController.logout);


export default router