import type { Metadata } from "next";
import { Cardo, Poppins, Roboto, Dancing_Script } from "next/font/google";
import { atziluth, robotoBold, robotoMedium, poppinsRegular, poppinsItalic, robotoLight } from "./fonts";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jejak Rasa Toba",
  description: "Website Menuju Wisata Kuliner di Daerah Toba",
  icons: {
    icon: "/icon/logo-jejak-rasa.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${cardo.variable} ${dancingScript.variable} ${atziluth.variable} ${robotoBold.variable} ${robotoMedium.variable} ${poppinsRegular.variable} ${poppinsItalic.variable} ${robotoLight.variable} h-full scroll-smooth scroll-pt-24 antialiased`}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
