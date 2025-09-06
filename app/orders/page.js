"use client";
import { useEffect, useState } from "react";
import SingleOrder from "@/components/Order/SingleOrder";
import ProductListSkeleton from "@/components/Product/ProductListSkeleton";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  //   async function fetchOrders() {
  //     try {
  //       const response = await fetch("http://localhost:8200/v1/orders");
  //       const data = await response.json();
  //       console.log("orders", data);
  //       setOrders(data);
  //     } catch (err) {
  //       console.log("Error: " + err.message);
  //     }
  //   }

  //   useEffect(() => {
  //     fetchOrders();
  //   }, []);

  return (
    <div className="container text-6xl text-muted-foreground mx-auto py-[3rem] h-[50vh]">
      {/* <ProductListSkeleton /> */}
      <h1 className="text-center">Coming soon...</h1>
      {/* <h1>My Orders</h1>
      {orders.length > 0 &&
        orders.map((order) => (
          <SingleOrder order={order} key={order.order_id} />
        ))} */}
    </div>
  );
};

export default OrdersPage;
