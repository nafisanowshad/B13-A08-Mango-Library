import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mango Library | Online Book Borrowing",
  description: "Digitizing the traditional library experience. Explore, filter, and borrow books digitally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mango-pro">
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased bg-base-100 text-base-content`}
      >
        <Toaster position="top-center" />
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
