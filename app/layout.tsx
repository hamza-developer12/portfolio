import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const raleWay = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Hamza Azam | Full Stack Developer",
  description: "Full Stack Developer expert in Merstack, Next.js, and Flutter",
};
interface Props {
  children: Readonly<React.ReactNode>;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${raleWay.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
