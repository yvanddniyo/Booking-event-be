import { Request, Response } from "express";
import { uploadToCloud } from "../config/cloudinary";
import { eventCreateSchema, EventSchema } from "../schemas/eventSchema";
import { createEvent, deleteEvent, getEventBooking, getEventById, getEvents, updateEvent } from "../services/eventServices";

export const createEventController = async (req: Request, res: Response) => {
  try {
    const eventData = req.body;
    const file = req.file;
    console.log("file -->", file);
    console.log("eventData -->", eventData);
    
    if (!file) {
      return res.status(400).json({
        status: "error",
        message: "File is required"
      });
    }

    const validatedEvent = eventCreateSchema.parse(eventData);
    
    const transformedEvent = {
      ...validatedEvent,
      date: new Date(validatedEvent.date),
      price: parseFloat(validatedEvent.price),
      capacity: parseInt(validatedEvent.capacity),
    };

    const newEvent = await createEvent(transformedEvent as EventSchema, file as Express.Multer.File);
    
    res.status(201).json({
      status: "success",
      message: "Event created successfully",
      data: newEvent
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        status: "error",
        message: error.message
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Internal server error"
      });
    }
  }
};

export const getEventsController = async (req: Request, res: Response) => {
  const events = await getEvents();
  res.status(200).json({
    status: "success",
    count: events.length,
    message: "Events fetched successfully",
    data: events
  });
};

export const getEventBookingEventController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await getEventBooking(id);
  res.status(200).json({
    status: "success",
    message: "Event booking fetched successfully",
    data: event
  });
}

export const getEventByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await getEventById(id);
  res.status(200).json({
    status: "success",
    message: "Event fetched successfully",
    data: event
  });
};

export const updateEventController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const eventExist = await getEventById(id);
    
    if (!eventExist) {
      return res.status(404).json({
        status: "error",
        message: "Event not found"
      });
    }

    const eventData = req.body;
    const file = req.file;
    
    const validatedEvent = eventCreateSchema.parse(eventData);
    
    const transformedEvent = {
      ...validatedEvent,
      date: new Date(validatedEvent.date),
      price: parseFloat(validatedEvent.price),
      capacity: parseInt(validatedEvent.capacity),
    };

    let updateData = transformedEvent as EventSchema;
    if (file) {
      const imageUrl = await uploadToCloud(file);
      updateData = {
        ...transformedEvent,
        image_url: imageUrl as string,
      } as EventSchema;
    }

    const updatedEvent = await updateEvent(id, updateData);
    
    res.status(200).json({
      status: "success",
      message: "Event updated successfully",
      data: updatedEvent
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error instanceof Error ? error.message : "Internal server error"
    });
  }
};
export const deleteEventController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedEvent = await deleteEvent(id);
  res.status(200).json({
    status: "success",
    message: "Event deleted successfully",
    data: deletedEvent
  });
};