export const bookingSchemaDocs = {
  type: "object",
  properties: {
    id: { type: "string" },
    eventId: { type: "string" },
    userId: { type: "string" },
    status: { type: "string" },
    quantity: { type: "number" },
    totalPrice: { type: "number" },
  },
};

export const bookingGetAllSchemaDocs = {
  type: "object",
  properties: {
    id: { type: "string" },
    eventId: { type: "string" },
    userId: { type: "string" },
    status: { type: "string" },
    quantity: { type: "number" },
    totalPrice: { type: "number" },
  },
};

export const bookingUpdateSchemaDocs = {
  type: "object",
  properties: {
    status: { type: "string" },
  }
};
