import { eventSchemaDocs } from "./schemaDocs/eventSchemaDocs";

export const eventCreateDocs = {
  tags: ["Events"],
  description: "Create an event",
  summary: "Create an event",
  path: "/api/v1/events",
  method: "post",
  security: [
    {
      bearerAuth: [],
      admin: [],
    },
  ],
  requestBody: {
    required: true,
    content: {
      "multipart/form-data": {
        schema: eventSchemaDocs,
      },
    },
  },
  responses: {
    200: {
      description: "Event created successfully",
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: { type: "string" },
              errors: {
                type: "array",
                items: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
};

export const eventGetAllDocs = {
  tags: ["Events"],
  description: "Get all events",
  summary: "Get all events",
  path: "/api/v1/events",
  method: "get",
  security: [
    {
      bearerAuth: [],
      admin: [],
    },
  ],
  responses: {
    200: {
      description: "Events fetched successfully",
    },
  },
};

export const eventGetByIdDocs = {
  tags: ["Events"],
  description: "Get an event by id",
  summary: "Get an event by id",
  path: "/api/v1/events/:id",
  security: [
    {
      bearerAuth: [],
      admin: [],
    },
  ],
  method: "get",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "Event fetched successfully",
    },
  },
};

export const updateEventDocs = {
  tags: ["Events"],
  description: "Update an event",
  summary: "Update an event",
  path: "/api/v1/events/:id",
  method: "patch",
  security: [
    {
      bearerAuth: [],
      admin: [],
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: eventSchemaDocs,
      },
    },
  },
  responses: {
    200: {
      description: "Event updated successfully",
    },
    400: {
      description: "Invalid input",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: { type: "string" },
              errors: {
                type: "array",
                items: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
};

export const eventDeleteDocs = {
  tags: ["Events"],
  description: "Delete an event",
  summary: "Delete an event",
  path: "/api/v1/events/:id",
  method: "delete",
  security: [
    {
      bearerAuth: [],
      admin: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "Event deleted successfully",
    },
  },
};

// src/docs/events.ts

export const eventGetBookingEventDocs = {
  tags: ['Events'],
  summary: 'Get all bookings for a specific event',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      schema: { type: 'string' },
      description: 'Event ID',
    },
  ],
  responses: {
    200: {
      description: 'List of bookings for the event',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: { $ref: '#/components/schemas/Booking' },
          },
        },
      },
    },
    404: {
      description: 'Event not found',
    },
  },
};