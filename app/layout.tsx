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
				<meta name="google-adsense-account" content="ca-pub-9394949604148306" />
				<meta name="google-site-verification" content="ca-pub-9394949604148306" />

				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-S21QKK1FW3"></Script>
				<Script>
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-S21QKK1FW3');
  					`}
				</Script>
				<Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="f8f1dced-37c0-4155-b909-5672b9e7d8cc" type="text/javascript" async></Script>
				<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9394949604148306" crossOrigin="anonymous" strategy="afterInteractive" />
			</head>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false} storageKey="temperament-theme">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
