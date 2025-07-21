import { Router } from "express";
import { createEventController, getEventsController, getEventByIdController, updateEventController, deleteEventController, getEventBookingEventController } from "../controllers/eventControllers";
import fileUpload from "../config/multer";

const eventRouter = Router();

eventRouter.post("/events", fileUpload.single("image_url"), createEventController);
eventRouter.get("/events", getEventsController);
eventRouter.get("/events/:id", getEventByIdController);
eventRouter.get("/events/:id/bookings", getEventBookingEventController);
eventRouter.patch("/events/:id", fileUpload.single("image_url"), updateEventController);
eventRouter.delete("/events/:id", deleteEventController);

export default eventRouter;