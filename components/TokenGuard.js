"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_JWT_TOKEN;
console.log(JWT_SECRET);

export default function TokenGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (pathname == "/") {
      router.push("/");
      return;
    }
    if (pathname != "/") {
      try {
        jwt.verify(token, JWT_SECRET);
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
        router.push("/");
      }
    }
  }, []);

  return <>{children}</>;
}
