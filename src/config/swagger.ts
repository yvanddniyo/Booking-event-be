import swaggerJSDoc from 'swagger-jsdoc';
import express from "express";
import { userCreateDocs, userDeleteDocs, userGetAllBookingsDocs, userGetAllDocs, userGetByIdDocs, userLoginDocs, userUpdateDocs } from '../docs/user';
import { eventCreateDocs, eventDeleteDocs, eventGetAllDocs, eventGetByIdDocs, updateEventDocs } from '../docs/events';
import { bookingCreateDocs, bookingGetAllDocs, bookingUpdateDocs } from '../docs/booking';
import { serve, setup } from 'swagger-ui-express';
import { userSchemaDocs } from '../docs/schemaDocs/userSchemaDocs';
import { bookingSchemaDocs } from '../docs/schemaDocs/bookingSchemaDocs';
import { eventSchemaDocs } from '../docs/schemaDocs/eventSchemaDocs';

const docRouter = express.Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Booking Event API',
      version: '1.0.0',
      description: 'This is a Booking Event API with Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
        description: 'Local server',
      },
      {
        url: 'https://booking-event-be.onrender.com/',
        description: 'Production server',
      },
    ],
    tags: [
      {
        name: "Auth",
        description: "Authentication",
      },
      {
        name: "Users",
        description: "User management",
      },
      {
        name: "Events",
        description: "Event management",
      },
      {
        name: "Bookings",
        description: "Booking management",
      },
    ],
    paths: {
      '/api/v1/auth/register': {
        post: userCreateDocs,
      },
      '/api/v1/auth/login': {
        post: userLoginDocs,
      },
      '/api/v1/users': {
        get: userGetAllDocs,
      },
      '/api/v1/users/:id': {
        get: userGetByIdDocs,
        patch: userUpdateDocs,
        delete: userDeleteDocs,
      },
      '/api/v1/events': {
        get: eventGetAllDocs,
        post: eventCreateDocs,
      },
      '/api/v1/events/:id': {
        get: eventGetByIdDocs,
        patch: updateEventDocs,
        delete: eventDeleteDocs,
      },
      '/api/v1/bookings': {
        post: bookingCreateDocs,
      },
      '/api/v1/bookings/:userId': {
        get: bookingGetAllDocs,
      },
      '/api/v1/bookings/:id': {
        patch: bookingUpdateDocs,
      },
    },
    components: {
      schemas: {
        Booking: bookingSchemaDocs,
        Event: eventSchemaDocs,
        User: userSchemaDocs,
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ['src/routes/*.ts', 'src/models/*.ts'], 
};

const swaggerSpec = swaggerJSDoc(options);

docRouter.use("/", serve, setup(swaggerSpec));

export default docRouter;
