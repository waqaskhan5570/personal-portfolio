import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waqas Khan - Software Engineer",
  description:
    "Software Engineer with over 3 years of experience as a Front-end Developer, Advanced proficiency in JavaScript and ReactJs/NextJs.  I excel at guiding projects and teams toward success, consistently delivering high-quality results that exceed expectations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <StarsCanvas /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
