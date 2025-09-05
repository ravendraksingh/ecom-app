"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  if (cart.items.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  //   async function fetchCart() {
  //     try {
  //       const response = await fetch("/api/dummyjson/cart");
  //       if (response.status != 200) {
  //         throw new Error("Could not fetch cart from API");
  //       }
  //       const data = await response.json();
  //       console.log("cart", data);
  //       setCart(data);
  //     } catch (err) {
  //       console.log("Error:", err);
  //     }
  //   }

  //   useEffect(() => {
  //     fetchCart();
  //   }, []);

  console.log("cart", cart);

  return (
    <div className="container mx-auto md:p-3">
      <h2 className="text-3xl font-bold mb-3">Shopping Cart</h2>
      <div className="flex flex-col md:flex-row md:gap-3">
        <Card className="md:w-[70%]">
          <CardHeader>
            <CardTitle className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
              <p>Cart ID: {cart.cartId}</p>
              <div>
                <p className="mb-1">Total Products: {cart.totalProducts}</p>
                <p>Total Quantity: {cart.totalQuantity}</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {cart?.items?.map((item) => (
                <li key={item?.id} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <CardContent>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full max-w-[200px] me-3">
                          <Image
                            src={item?.thumbnail}
                            alt={item?.title}
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="me-3">
                          <p className="font-semibold">
                            {item?.description}
                          </p>
                          <p className={`text-sm mt-1 mb-3 ${item.stock < 50 ? " text-red-500" : " text-green-500"}`}>
                            {item?.stock < 50 ? `Only ${item.stock} items left` : "In stock"}
                          </p>
                          <div className="flex flex-row items-center border border-yellow-400 rounded-xl p-1 px-2 w-fit mb-3 md:mb-0">
                            Quantity:
                            <button
                              onClick={() => decreaseQuantity(item?.id)}
                              style={{
                                marginLeft: "1rem",
                                marginRight: "0.5rem",
                              }}
                            >
                              <Minus size={16} />
                            </button>
                            {item?.quantity}
                            <button
                              onClick={() => increaseQuantity(item?.id)}
                              style={{ marginLeft: "0.5rem" }}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <div className="min-w-[180px] md:text-end">
                          <p>Price: ${item?.price.toFixed(2)}</p>
                          <p>
                            Total: ${(item?.price * item?.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-1 h-fit">
          <CardContent>
            <p>
              Subtotal {`(${cart.totalQuantity} items)`}: $
              {cart.subtotal.toFixed(2)}
            </p>
            <p>Discount: -${cart.discount.toFixed(2)}</p>
            <p className="mb-3">
              <strong>Total: ${cart.total.toFixed(2)}</strong>
            </p>
            <Button className="bg-yellow-200 text-black hover:bg-yellow-400 hover:text-black">
                Proceed to Buy
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CartPage;
