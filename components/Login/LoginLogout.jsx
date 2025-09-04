"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import { signOut } from "@/app/actions/auth";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { User2, ChevronDown } from "lucide-react";

export const LoginLogout = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState();
  const { appData, setAppData } = useContext(AppContext);

  useEffect(() => {
    if (appData != null) {
      const _authenticated = appData?.user?.authenticated ?? false;
      console.log("authenticated", _authenticated);
      setAuthenticated(_authenticated);
      setUsername(appData?.user?.email);
    }
  }, [appData]);

  function doLogout() {
    if (signOut()) {
      localStorage.removeItem("user");
      setAppData({});
    }
  }

  return (
    <div className="flex flex-row me-3 items-center">
      {authenticated && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <User2 color="" fill="blue" size={32} />
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
      {!authenticated && (
        <Button variant="link">
          <Link href="/login">Login</Link>
        </Button>
      )}
    </div>
  );
};
