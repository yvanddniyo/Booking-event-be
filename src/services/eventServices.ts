import { uploadToCloud } from "../config/cloudinary";
import prisma from "../config/db";
import { EventSchema } from "../schemas/eventSchema";

export const createEvent = async (event: EventSchema, file: Express.Multer.File) => {
  const imageUrl = await uploadToCloud(file);
  const newEvent = await prisma.event.create({
    data: {
      ...event,
      image_url: imageUrl as string,
    },
  });
  return newEvent;
};

export const getEvents = async () => {
  const events = await prisma.event.findMany({
    include: {
      bookings: true,
    },
  });
  return events;
};

export const getEventBooking = async (id: string) => {
  const event = await prisma.event.findMany({
    where: { id },
    include: {
      bookings: {
        include: {
          user: true,
        },
      },
    },
  });
  return event;
};

export const getEventById = async (id: string) => {
  const event = await prisma.event.findUnique({
    where: { id  },
    include: {
      bookings: true,
    },
  });
  return event;
};

export const updateEvent = async (id: string, event: EventSchema) => {
  const updatedEvent = await prisma.event.update({
    where: { id },
    data: event,
  });
  return updatedEvent;
};

export const deleteEvent = async (id: string) => {
  const deletedEvent = await prisma.event.delete({
    where: { id },
  });
  return deletedEvent;
};