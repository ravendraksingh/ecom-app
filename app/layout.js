import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Navigation/AppSidebar";
import { CartProvider } from "@/context/CartContext";
import TopNav from "@/components/Navigation/TopNav";
import { CustomerProvider } from "@/context/CustomerContext";
import Footer from "@/components/Navigation/Footer";

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
        <CustomerProvider>
          <SidebarProvider defaultOpen={false}>
            <CartProvider>
              <AppSidebar />
              <main className="w-[100%]">
                <TopNav />
                {children}
                <Footer />
              </main>
            </CartProvider>
          </SidebarProvider>
        </CustomerProvider>
      </body>
    </html>
  );
}
