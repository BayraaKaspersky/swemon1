"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Suspense, useEffect } from "react";
import Footer from "@/components/Footer";
import HuviHumuus from "@/components/HuviHumuus";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import AjilOlgogchid from "@/components/AjilOlgogchid";
import HolbooBarih from "@/components/HolbooBarih";

import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const search = searchParams.get("category");

  return (
    <Suspense>
      <html
        lang="en"
        suppressHydrationWarning={true}
        style={{ background: "#f2f2f2" }}
      >
        <body suppressHydrationWarning={true}>
          <Navbar />

          {pathname !== "/" ? (
            search === "huviHumuus" ? (
              <div
                className="grid grid-cols-6 gap-5 mt-10 p-5 container"
                style={{ background: "white", margin: "0 auto" }}
              >
                <div className="col-span-2">
                  <HuviHumuus />
                </div>
                <div className="col-span-4">
                  <div>
                    <div>
                      <main>{children}</main>
                    </div>
                  </div>
                </div>
              </div>
            ) : search === "ajilOlgogchid" ? (
              <div
                className="grid grid-cols-6 gap-5 mt-10 p-5 container"
                style={{ background: "white", margin: "0 auto" }}
              >
                <div className="col-span-2">
                  <AjilOlgogchid />
                </div>
                <div className="col-span-4">
                  <div>
                    <div>
                      <main>{children}</main>
                    </div>
                  </div>
                </div>
              </div>
            ) : search === "holbooBarih" ? (
              <div
                className="grid grid-cols-6 gap-5 mt-10 p-5 container"
                style={{ background: "white", margin: "0 auto" }}
              >
                <div className="col-span-2">
                  <HolbooBarih />
                </div>
                <div className="col-span-4">
                  <div>
                    <div>
                      <main>{children}</main>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="grid grid-cols-6 gap-5 mt-10 p-5 container"
                style={{ background: "white", margin: "0 auto" }}
              >
                <div className="col-span-2">
                  <HuviHumuus />
                </div>
                <div className="col-span-4">
                  <div>
                    <div>
                      <main>{children}</main>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div>
              <div>
                <main>{children}</main>
              </div>
            </div>
          )}

          <Footer />
        </body>
      </html>
    </Suspense>
  );
}
