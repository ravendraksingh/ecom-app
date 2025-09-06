"use client";
import React, { useState, useEffect} from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "../ui/button";

export const Cart = () => {
  const { cart } = useCart();
  const [clientQuantity, setClientQuantity] = useState(null);

  useEffect(() => {
    // Set cart quantity only on the client
    setClientQuantity(cart?.totalQuantity ?? 0);
  }, [cart?.totalQuantity]);

  return (
    <Button variant="outline" asChild>
      <Link href="/cart">
        {clientQuantity !== null ? (
          <Badge variant="destructive">
            <span>{clientQuantity}</span>
          </Badge>
        ) : (
          // Optionally render a placeholder or nothing during SSR to avoid mismatch
          <span style={{ width: 24, display: "inline-block" }} />
        )}
        <ShoppingCart className="me-3" />
      </Link>
    </Button>
  );
};
