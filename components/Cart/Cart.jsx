"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useCart } from "@/context/CartContext";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <SidebarMenu className="w-auto">
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/cart">
            <Tooltip>
              <TooltipTrigger>
                <Badge variant="destructive">{cart?.totalQuantity ?? 0}</Badge>
              </TooltipTrigger>
              <TooltipContent>{`You have ${
                cart?.totalQuantity ?? 0
              } items in your cart`}</TooltipContent>
              <ShoppingCart className="me-3" />
            </Tooltip>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
