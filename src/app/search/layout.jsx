import "./../globals.css";
import { Inter } from "next/font/google";
import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone Next Js 13",
  description: "Google Clone created by nextjs 13",
};

export default function SearchLayout({ children }) {
  return (
    <div className={inter.className}>
      <SearchHeader />
      {children}
    </div>
  );
}
