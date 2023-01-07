import {body} from "express-validator"

export const registerValidation = [
    body('email', 'Wrong format').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
]

export const loginValidation = [
    body('email', 'Wrong format').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
]