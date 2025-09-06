"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "../ui/button";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <Button variant="outline" asChild>
      <Link href="/cart">
        <Badge variant="destructive">
          <span> {cart?.totalQuantity ?? 0}</span>
        </Badge>
        <ShoppingCart className="me-3" />
      </Link>
    </Button>
  );
};
