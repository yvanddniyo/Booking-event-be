import { Router } from "express";

import { validateUser } from "../middlewares/validateUser";
import { createBookingController, getBookingsController, updateBookingController } from "../controllers/bookingControllers";

const bookingRouter = Router();

bookingRouter.post("/bookings", validateUser, createBookingController);
bookingRouter.get("/bookings", validateUser, getBookingsController);
bookingRouter.patch("/bookings/:id", validateUser, updateBookingController);

export default bookingRouter;