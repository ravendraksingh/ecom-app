import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import { Cart } from "../Cart/Cart";
import { LoginLogout } from "../Login/LoginLogout";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
  const LOGO_SIZE = 64;
  return (
    <>
    <div className="container mx-auto py-1 ps-1 md:ps-0 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <Link href="/">
          <Image
            src="/niyava-logo.png"
            height={LOGO_SIZE}
            width={LOGO_SIZE}
            alt="Niyava Logo"
            className="rounded"
          />
        </Link>
      </div>

      <Navbar />

      <div className="flex flex-row">
        <Cart />
        <LoginLogout />
        <SidebarTrigger>
          <Menu />
        </SidebarTrigger>
      </div>
    </div>
    <hr/>
    </>
  );
};

export default TopNav;
