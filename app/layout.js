import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { Cart } from "../components/Cart/Cart";
import { LoginLogout } from "@/components/Login/LoginLogout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Navigation/AppSidebar";
import { AppProvider } from "@/context/AppContext";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Niyava e-Commerce App",
  description: "Created by Niyava Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <SidebarProvider defaultOpen={false}>
            <CartProvider>
              <AppSidebar />
              <main className="w-[100%]">
                <div className="flex flex-row items-center">
                  <SidebarTrigger />
                  <Navbar />
                  <Cart />
                  <LoginLogout />
                </div>
                <hr />
                {children}
              </main>
            </CartProvider>
          </SidebarProvider>
        </AppProvider>
      </body>
    </html>
  );
}
