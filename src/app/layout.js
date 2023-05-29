import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone Next Js 13",
  description: "Google Clone created by nextjs 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        {/* Footer */}

        <Footer />
      </body>
    </html>
  );
}
