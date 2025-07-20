export const userSchemaDocs = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
};

export const userLoginSchemaDocs = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
};

export const userUpdateSchemaDocs = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
};

export const userGetAllSchemaDocs = {
  type: "object",
  properties: {
    id: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
  },
};

export const userGetByIdSchemaDocs = {
  type: "object",
  properties: {
    id: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
  },
}