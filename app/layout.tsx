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
			<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394949604148306" crossOrigin="anonymous" />
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false} storageKey="temperament-theme">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
