import { Router } from "express";
import registerUser from "../controller/register.controller";
import loginUser from "../controller/login.controller";
import resetPassword from "../controller/resetPassword.controller";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/reset-password/:id", resetPassword);

export default router;
