import type { Metadata } from "next";
import "./globals.css";
// import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HRIS",
  description: "HR system App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <AppRouterCacheProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-blue-200">{children}</main>
            <Footer />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
