import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Prakash Academy",
  description: "Coaching and Carrier Guidance in Laxmi Nagar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
