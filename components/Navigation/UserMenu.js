"use client";
import { useState, useEffect } from "react";
import { useCustomer } from "@/context/CustomerContext";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import { PackageOpen, User2, Inbox, Calendar, Settings } from "lucide-react";

const menuItems = [
  {
    title: "My Orders",
    url: "/orders",
    icon: PackageOpen,
  },
  {
    title: "My Account",
    url: "/account",
    icon: User2,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const UserMenu = () => {
  const { user } = useCustomer();
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null; // render nothing until client-side hydration

  if (user.username == "" || user.email == "") {
    return null;
  }

  return (
    <SidebarMenu>
      {/* links visible only to logged-in users */}
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default UserMenu;
