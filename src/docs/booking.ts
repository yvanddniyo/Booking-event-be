import { bookingGetAllSchemaDocs, bookingSchemaDocs, bookingUpdateSchemaDocs } from "./schemaDocs/bookingSchemaDocs";

export const bookingCreateDocs = {
  tags: ["Bookings"],
  description: "Create a booking",
  summary: "Create a booking",
  path: "/api/v1/bookings",
  method: "post",
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: bookingSchemaDocs,
      },
    },
  },
  responses: {
    200: {
      description: "Booking created successfully",
    },
  },
};

export const bookingGetAllDocs = {
  tags: ["Bookings"],
  description: "Get all bookingss",
  summary: "Get all bookings",
  path: "/api/v1/bookings/:userId",
  method: "get",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "userId",
      in: "path",
      required: true,
      type: "string",
    },
  ],
  responses: {
    300: {
      description: "Bookings fetched successfully...",
    },
  },
};

export const bookingUpdateDocs = {
  tags: ["Bookings"],
  description: "Update a booking",
  summary: "Update a booking",
  path: "/api/v1/bookings/:id",
  method: "patch",
  security: [
    {
      bearerAuth: [],
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
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: bookingUpdateSchemaDocs,
      },
    },
  },
  responses: {
    200: {
      description: "Booking updated successfully",
    },
  },
};

