import {Router} from 'express';
import { UserController } from '../Controller/UserController';
import { getAllCharacters } from '../Controller/ClassController';
import cheackAuth from "../middleware/checkAuth"
import handlerValidationError from '../middleware/handlerValidationError';
import {registerValidation, loginValidation} from "../middleware/validation"

export const router = Router()

router.post("/register",registerValidation, handlerValidationError, UserController.register)
router.post("/login",loginValidation, handlerValidationError, UserController.login)
router.get("/me/:id", cheackAuth, UserController.getMe)
router.patch("/me/:id",cheackAuth, UserController.update)
router.get("/heroes",cheackAuth, getAllCharacters)