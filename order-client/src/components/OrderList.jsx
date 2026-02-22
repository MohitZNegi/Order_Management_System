import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../features/orders/orderSlice";
import OrderItem from "./OrderItem";

function OrderList() {
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector(
        (state) => state.orders
    );

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <OrderItem key={order.id} order={order} />
                ))}
            </tbody>
        </table>
    );
}

export default OrderList;