"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import MobileNav from "@/component/mobilenav/MobileNav";
import { useState } from "react";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "Prakash Academy",
//   description: "Coaching and Carrier Guidance in Laxmi Nagar",
// };

export default function RootLayout({ children }) {
  const [mobNav, SetMobNav] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header setMob={SetMobNav} mobNav={mobNav}></Header>
        <MobileNav setMob={SetMobNav} mobNav={mobNav}></MobileNav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
