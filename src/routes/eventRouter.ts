import { Router } from "express";
import { createEventController, getEventsController, getEventByIdController, updateEventController, deleteEventController, getEventBookingEventController } from "../controllers/eventControllers";
import fileUpload from "../config/multer";
import { validateAdmin } from "../middlewares/validateAdmin";

const eventRouter = Router();

eventRouter.post("/events", validateAdmin, fileUpload.single("image_url"), createEventController);
eventRouter.get("/events", getEventsController);
eventRouter.get("/events/:id", getEventByIdController);
eventRouter.get("/events/:id/bookings", validateAdmin, getEventBookingEventController);
eventRouter.patch("/events/:id", validateAdmin, fileUpload.single("image_url"), updateEventController);
eventRouter.delete("/events/:id", validateAdmin, deleteEventController);

export default eventRouter;