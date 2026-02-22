import { useDispatch } from "react-redux";
import {
    completeOrder,
    deleteOrder,
} from "../features/orders/orderSlice";

function OrderItem({ order }) {
    const dispatch = useDispatch();

    return (
        <tr>
            <td>{order.customerName}</td>
            <td>{order.productName}</td>
            <td>${order.amount}</td>
            <td>
                <span className={`status ${order.status}`}>
                    {order.status}
                </span>
            </td>
            <td>
                {order.status === "Pending" && (
                    <button onClick={() => dispatch(completeOrder(order.id))}>
                        Complete
                    </button>
                )}
                <button onClick={() => dispatch(deleteOrder(order.id))}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default OrderItem;