import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder } from "../features/orders/orderSlice";

function AddOrderForm() {
    const dispatch = useDispatch();

    const [customerName, setCustomerName] = useState("");
    const [productName, setProductName] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            addOrder({
                customerName,
                productName,
                amount: Number(amount),
            })
        );

        setCustomerName("");
        setProductName("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Customer"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
                placeholder="Product"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Order</button>
        </form>
    );
}

export default AddOrderForm;