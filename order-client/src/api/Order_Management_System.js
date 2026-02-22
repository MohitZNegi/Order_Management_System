import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:44390/api/orders",
});

// GET
export const fetchOrders = () => API.get("/");

// POST
export const createOrder = (order) => API.post("/", order);

// PUT
export const completeOrder = (id) =>
    API.put(`/${id}/complete`);

// DELETE
export const deleteOrder = (id) =>
    API.delete(`/${id}`);