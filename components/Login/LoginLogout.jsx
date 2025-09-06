"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { User2, ChevronDown } from "lucide-react";
import { useCustomer } from "@/context/CustomerContext";
import { redirect, usePathname } from "next/navigation";

export const LoginLogout = () => {
  const { user, logout } = useCustomer();
  const { username, firstName } = user;
  const pathname = usePathname();

  const doLogout = () => {
    logout();
    redirect("/products");
  };

  return (
    <div className="flex flex-row items-center">
      {(username == null || username == "") && (
        <Button variant="link">
          <Link href={`/login?redirectTo=${encodeURIComponent(pathname)}`}>
            Login
          </Link>
        </Button>
      )}

      {/* If user is present and logged in */}
      {username != null && username !== "" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <User2 color="" fill="blue" size={32} />
              <span>{firstName}</span>
              <ChevronDown className="ml-auto" size={32} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="w-[--radix-popper-anchor-width]"
          >
            <DropdownMenuItem>
              <Link href="/account">My Account</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SidebarMenuButton asChild>
                <Button
                  onClick={doLogout}
                  variant="destructive"
                  className="text-white hover:bg-destructive hover:text-white"
                >
                  Logout
                </Button>
              </SidebarMenuButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
