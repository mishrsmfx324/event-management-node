import express from 'express';
export const authRouter = express.Router();
import { signUpUser } from '../controllers/auth-controller.js';

authRouter.route('/signup').get(signUpUser);