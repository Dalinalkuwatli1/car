import { Cormorant_Garamond, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure Google Fonts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Velox Rentals | Premium Car Rental & Chauffeur Services",
  description: "Experience the ultimate in automotive luxury. Rent premium sports cars, SUVs, and luxury sedans with Velox Rentals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${barlow.variable} scroll-smooth`}>
      <body className="bg-obsidian-900 text-platinum-50 font-body antialiased selection:bg-gold/30 selection:text-gold-light min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
