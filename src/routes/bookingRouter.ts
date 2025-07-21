import { Router } from "express";

import { validateUser } from "../middlewares/validateUser";
import { createBookingController, getBookingsController, updateBookingController } from "../controllers/bookingControllers";

const bookingRouter = Router();

bookingRouter.post("/bookings", createBookingController);
bookingRouter.get("/bookings/:userId", getBookingsController);
bookingRouter.patch("/bookings/:id", updateBookingController);

export default bookingRouter;