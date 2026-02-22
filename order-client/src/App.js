import logo from './logo.svg';
import './App.css';
import AddOrderForm from "./components/AddOrderForm";
import OrderList from "./components/OrderList";
function App() {
    return (
        <div>
            <h2>Order Management</h2>
            <AddOrderForm />
            <OrderList />
        </div>
    );
}

export default App;
