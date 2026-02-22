import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/Order_Management_System";

// THUNKS

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async () => {
        const response = await api.fetchOrders();
        return response.data;
    }
);

export const addOrder = createAsyncThunk(
    "orders/addOrder",
    async (order) => {
        const response = await api.createOrder(order);
        return response.data;
    }
);

export const completeOrder = createAsyncThunk(
    "orders/completeOrder",
    async (id) => {
        const response = await api.completeOrder(id);
        return response.data;
    }
);

export const deleteOrder = createAsyncThunk(
    "orders/deleteOrder",
    async (id) => {
        await api.deleteOrder(id);
        return id;
    }
);

// SLICE

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            // FETCH
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // ADD
            .addCase(addOrder.fulfilled, (state, action) => {
                state.orders.push(action.payload);
            })

            // COMPLETE
            .addCase(completeOrder.fulfilled, (state, action) => {
                const index = state.orders.findIndex(
                    (o) => o.id === action.payload.id
                );
                if (index !== -1) {
                    state.orders[index] = action.payload;
                }
            })

            // DELETE
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.orders = state.orders.filter(
                    (o) => o.id !== action.payload
                );
            });
    },
});

export default orderSlice.reducer;