import {Router} from 'express';
import { UserController } from '../Controller/UserController';
import { getAllCharacters } from '../Controller/ClassController';
import {Check} from "../middleware/checkAuth"
import handlerValidError from '../middleware/handlerValidationError';
import {registerValidation, loginValidation} from "../middleware/validation"

export const router = Router()

router.post("/register",registerValidation, handlerValidError, UserController.register)
router.post("/login",loginValidation, handlerValidError, UserController.login)
//router.get("/me/:id", Check.CheckAuth, UserController.getMe)
router.patch("/me/:id",Check.CheckAuth, handlerValidError, UserController.update)
router.get("/heroes",Check.CheckAuth,handlerValidError,  getAllCharacters)