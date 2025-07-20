import { Router } from "express";
import userRouter from "./userRouter";
import eventRouter from "./eventRouter";
import bookingRouter from "./bookingRouter";

const router = Router();

router.use("/v1", userRouter);
router.use("/v1", eventRouter);
router.use("/v1", bookingRouter);

export default router;