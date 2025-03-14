import { Router } from "express";
import registerUser from "../controller/register.controller";
import loginUser from "../controller/login.controller";
import resetPassword from "../controller/resetPassword.controller";
import verifyUser from "../controller/verifyUser.controller";
import resendOtp from "../controller/resendOtp.controller";
import { autheticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/reset-password/:id", resetPassword);
router.post("/verify-user", autheticate, verifyUser);
router.post("/resendcode/:id", resendOtp);

export default router;
