"use client";
import { useEffect, useState } from "react";
import SingleOrder from "@/components/Order/SingleOrder";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    try {
      const response = await fetch("http://localhost:8200/v1/orders");
      const data = await response.json();
      console.log("orders", data);
      setOrders(data);
    } catch (err) {
      console.log("Error: " + err.message);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h1>My Orders</h1>
      {orders.length > 0 &&
        orders.map((order) => (
          <SingleOrder order={order} key={order.order_id} />
        ))}
    </div>
  );
};

export default OrdersPage;
