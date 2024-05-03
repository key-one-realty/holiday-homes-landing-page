import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "List your property | Holiday Homes",
  description: "List your property on Holiday Homes and start earning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        id="respondio__growth_tool"
        src="https://cdn.respond.io/widget/widget.js?wId=6ab1a4a3-ebe1-4686-9ff0-b4629ce7acd8"
      />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HY48FQ3B2N"></Script>

      <Script>
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)} gtag('js', new Date()); gtag('config', 'G-HY48FQ3B2N');`}
      </Script>
      {/* <!-- https://respond.io --> */}
    </html>
  );
}
