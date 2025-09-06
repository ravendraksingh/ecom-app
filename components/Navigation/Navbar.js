"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Images } from "lucide-react";
import { useCustomer } from "@/context/CustomerContext";

const Navbar = () => {
  const { user } = useCustomer();
  const { username } = user;
  const imageSize = 64;

  return (
    <div className="hidden md:flex md:flex-1 md:flex-row md:justify-center md:my-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/"}>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/products"}>Products</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {username !== null && username != "" && (
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={"/orders"}>Orders</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/refunds"}>Refunds</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/cart"}>Cart</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
