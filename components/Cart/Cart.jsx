import React from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";

export const Cart = ({ cart }) => {
  return (
    <SidebarMenu className="w-auto">
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/cart">
            <Badge variant="destructive">5</Badge>
            <ShoppingCart className="me-3" />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
