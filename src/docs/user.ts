import { userSchemaDocs, userLoginSchemaDocs, userUpdateSchemaDocs } from "./schemaDocs/userSchemaDocs";

export const userCreateDocs = {
  tags: ["Auth"],
  summary: "User registration",
  description: "User registration",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: userSchemaDocs,
      },
    },
  },
  responses: {
    200: {
      description: "User created successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: { type: "string" },
              user: userSchemaDocs,
            },
          },
        },
      },
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

export const userLoginDocs = {
  tags: ["Auth"],
  summary: "User login",
  description: "User login",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: userLoginSchemaDocs,
      },
    },
  },
  responses: {
    200: {
      description: "User logged in successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              token: { type: "string" },
              user: userSchemaDocs,
            },
          },
        },
      },
    },
    401: {
      description: "Invalid credentials",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
  },
};
export const userGetAllDocs = {
  tags: ["Users"],
  description: "Get all users",
  summary: "Get all users",
  path: "/api/v1/users",
  security: [
    {
      admin: [],
    },
  ],
  method: "get",
  responses: {
    200: {
      description: "Users fetched successfully",
    },
  },
};
export const userGetByIdDocs = { 
  tags: ["Users"],
  description: "Get user by id",
  summary: "Get user by id",
  path: "/api/v1/users/:id",
  security: [
    {
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
};
export const userUpdateDocs = {
  tags: ["Users"],
  description: "Update user",
  summary: "Update user",
  path: "/api/v1/users/:id",
    security: [
    {
      bearerAuth: [],
    },
  ],
  method: "patch",
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
        schema: userUpdateSchemaDocs,
      },
    },
  },
  responses: {
    200: {
      description: "User updated successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: { type: "string" },
              user: userSchemaDocs,
            },
          },
        },
      },
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
    404: {
      description: "User not found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
  },
};
export const userDeleteDocs = {
  tags: ["Users"],
  description: "Delete user",
  summary: "Delete user",
  path: "/api/v1/users/:id",
  method: "delete",
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
  responses: {
    200: {
      description: "User deleted successfully",
    },
  },
};
export const userGetAllBookingsDocs = {
  tags: ["Users"],
  description: "Get all bookings",
  summary: "Get all bookings",
  path: "/api/v1/users/:id/bookings",
  security: [
    {
      bearerAuth: [],
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
      description: "Bookings fetched successfully",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                eventId: { type: "string" },
                userId: { type: "string" },
                status: { type: "string" },
                createdAt: { type: "string" },
                updatedAt: { type: "string" },
              },
            },
          },
        },
      },
    },
  },
};

