import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tes Kepribadian Kenali Galen",
	description: "Temukan tipe kepribadianmu berdasarkan Kenali Galen klasik: Plegmatis, Sanguinis, Melankolis, dan Koleris.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id" suppressHydrationWarning>
			<head>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-KN1QLHH33J"></Script>
				<Script>
					{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KN1QLHH33J');
	`}
				</Script>
			</head>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false} storageKey="temperament-theme">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
