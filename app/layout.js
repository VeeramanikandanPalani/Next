"use client";

import { Geist, Geist_Mono } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Redirect to login if no token and not already on the login page
    if (!token && pathname !== "/") {
      router.push("/");
      return;
    }

    try {
      const decoded = jwtDecode(token); // No secret needed on client
      const now = Date.now() / 1000;
      if (decoded.exp && decoded.exp < now) {
        localStorage.removeItem("token");
        router.push("/");
      }
    } catch (err) {
      console.error("Token decode failed:", err);
      localStorage.removeItem("token");
      router.push("/");
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toaster position="top-right" />
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
