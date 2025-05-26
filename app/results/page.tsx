"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { temperamentDescriptions } from "@/lib/questions";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Download, Share2, Home } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import { color } from "html2canvas/dist/types/css/types/color";

type ResultsData = {
	phlegmatic: number;
	sanguine: number;
	melancholic: number;
	choleric: number;
};

export default function ResultsPage() {
	const searchParams = useSearchParams();
	const [results, setResults] = useState<ResultsData | null>(null);
	const [sortedTemperaments, setSortedTemperaments] = useState<Array<[string, number]>>([]);
	const resultsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const data = searchParams.get("data");
		if (data) {
			try {
				const parsedData = JSON.parse(decodeURIComponent(data)) as ResultsData;
				setResults(parsedData);

				const tempArray: Array<[string, number]> = [
					["phlegmatic", parsedData.phlegmatic],
					["sanguine", parsedData.sanguine],
					["melancholic", parsedData.melancholic],
					["choleric", parsedData.choleric],
				];

				tempArray.sort((a, b) => b[1] - a[1]);
				setSortedTemperaments(tempArray);
			} catch (error) {
				console.error("Failed to parse results data:", error);
			}
		}
	}, [searchParams]);

	const chartData = results
		? [
				{ name: "Plegmatis", value: Math.round(results.phlegmatic), color: "#3B82F6" },
				{ name: "Sanguinis", value: Math.round(results.sanguine), color: "#22C55E" },
				{ name: "Melankolis", value: Math.round(results.melancholic), color: "#8B5CF6" },
				{ name: "Koleris", value: Math.round(results.choleric), color: "#EF4444" },
		  ]
		: [];

	const downloadAsPDF = async () => {
		if (!resultsRef.current) return;

		try {
			const canvas = await html2canvas(resultsRef.current, {
				scale: 2,
				backgroundColor: "#ffffff",
			});

			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF({
				orientation: "portrait",
				unit: "mm",
				format: "a4",
			});

			const imgWidth = 210;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
			pdf.save("hasil-empat-temperamen.pdf");
		} catch (error) {
			console.error("Failed to generate PDF:", error);
		}
	};

	const downloadGalenCard = async () => {
		const nickname = prompt("Masukkan nama panggilan kamu:");
		if (!nickname || !results) return;

		const sorted = [...sortedTemperaments].sort((a, b) => b[1] - a[1]);

		const temperamentColors: Record<string, string> = {
			phlegmatic: "#3B82F6",
			sanguine: "#22C55E",
			melancholic: "#8B5CF6",
			choleric: "#EF4444",
		};

		const canvasWidth = 1123;
		const canvasHeight = 794;

		const canvas = document.createElement("canvas");
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		const padding = 50;
		const boxX = padding;
		const boxY = padding;
		const boxWidth = canvas.width - padding * 2;
		const boxHeight = canvas.height - padding * 2;

		ctx.fillStyle = "#000000";
		ctx.font = "bold 80px Arial";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(nickname.toUpperCase(), canvas.width / 2, canvas.height / 2 - 100);

		ctx.strokeStyle = "#ccc";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(boxX + 30, canvas.height / 2 - 60);
		ctx.lineTo(boxX + boxWidth - 30, canvas.height / 2 - 60);
		ctx.stroke();

		ctx.font = "bold 100px Arial";
		const spacing = 150;
		const total = sorted.length;
		const startX = canvas.width / 2 - ((total - 1) * spacing) / 2;

		sorted.forEach(([type], index) => {
			let initial = "";
			switch (type) {
				case "phlegmatic":
					initial = "P";
					break;
				case "melancholic":
					initial = "M";
					break;
				case "choleric":
					initial = "K";
					break;
				case "sanguine":
					initial = "S";
					break;
			}
			ctx.fillStyle = temperamentColors[type];
			const x = startX + index * spacing;
			const y = canvas.height / 2 + 60;
			ctx.fillText(initial, x, y);
		});

		const imgData = canvas.toDataURL("image/png");
		const pdf = new jsPDF({
			orientation: "landscape",
			unit: "px",
			format: [canvas.width, canvas.height],
		});
		pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
		pdf.save(`${nickname.toLowerCase()}-galen-card.pdf`);
	};

	const shareResults = async () => {
		if (!resultsRef.current) return;

		try {
			const canvas = await html2canvas(resultsRef.current, {
				scale: 2,
				backgroundColor: "#ffffff",
			});

			const imgData = canvas.toDataURL("image/png");

			const blob = await (await fetch(imgData)).blob();

			if (navigator.share) {
				await navigator.share({
					title: "Hasil Tes Kenali Galen Saya",
					text: "Lihat hasil tes galen kepribadian saya!",
					files: [new File([blob], "hasil-galen.png", { type: "image/png" })],
				});
			} else {
				const shareUrl = URL.createObjectURL(blob);

				const a = document.createElement("a");
				a.href = shareUrl;
				a.download = "hasil-temperamen.png";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);

				URL.revokeObjectURL(shareUrl);
			}
		} catch (error) {
			console.error("Failed to share results:", error);
		}
	};

	const temperamentNames = {
		phlegmatic: "Plegmatis",
		sanguine: "Sanguinis",
		melancholic: "Melankolis",
		choleric: "Koleris",
	};

	const getTemperamentColor = (type: keyof typeof temperamentNames) => {
		switch (type) {
			case "phlegmatic":
				return "#3B82F6";
			case "sanguine":
				return "#22C55E";
			case "melancholic":
				return "#8B5CF6";
			case "choleric":
				return "#EF4444";
			default:
				return "#A3A3A3";
		}
	};

	if (!results) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-background text-foreground">
				<div className="text-center">
					<h1 className="text-2xl font-semibold mb-4">Hasil tidak ditemukan</h1>
					<p className="mb-6 text-muted-foreground">Silakan ikuti tes untuk melihat hasil Anda.</p>
					<Link href="/quiz">
						<Button>Ikuti Tes</Button>
					</Link>
				</div>
			</div>
		);
	}

	const dominantType = sortedTemperaments[0][0] as keyof typeof temperamentDescriptions;
	const dominantInfo = temperamentDescriptions[dominantType];

	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<header className="border-b border-border">
				<div className="container mx-auto px-4 py-6 flex justify-between items-center">
					<Link href={"/"} className="flex justify-center items-center">
						<Image src={"/galen-logo.png"} alt="Galen Logo" width={60} height={60} className="inline-block mr-2" />
						<h1 className="text-2xl font-semibold">Kenali Galen</h1>
					</Link>
					<div className="flex items-center space-x-2">
						<Button variant="outline" size="sm" onClick={downloadGalenCard}>
							<Download className="h-4 w-4 mr-2" />
							Buat Galen
						</Button>
						<Button variant="outline" size="sm" onClick={downloadAsPDF}>
							<Download className="h-4 w-4 mr-2" />
							Unduh
						</Button>
						<Button variant="outline" size="sm" onClick={shareResults}>
							<Share2 className="h-4 w-4 mr-2" />
							Bagikan
						</Button>
						<ThemeToggle />
					</div>
				</div>
			</header>

			<main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
				<div ref={resultsRef} className="bg-background p-6 rounded-lg">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold mb-2">Profil Temperamen Anda</h2>
						<p className="text-muted-foreground">Berdasarkan jawaban Anda, berikut adalah profil temperamen unik Anda</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-8">
						<Card className="bg-card border-border">
							<CardHeader>
								<CardTitle>Grafik Temperamen</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="h-[300px] w-full">
									<ResponsiveContainer width="100%" height="100%">
										<BarChart data={chartData}>
											<CartesianGrid strokeDasharray="3 3" className="opacity-30" />
											<XAxis dataKey="name" tick={{ fontSize: 12 }} className="text-muted-foreground" />
											<YAxis tick={{ fontSize: 12 }} className="text-muted-foreground" />
											<Tooltip
												content={({ active, payload }) => {
													if (active && payload && payload.length) {
														const data = payload[0].payload;
														return (
															<div
																className="p-2 rounded-md border text-sm"
																style={{
																	backgroundColor: "hsl(var(--tooltip-card))",
																	borderColor: "hsl(var(--tooltip-border))",
																	color: "hsl(var(--tooltip-foreground))",
																}}
															>
																<p className="font-medium">{data.name}</p>
																<p style={{ color: data.color }}>{data.value}%</p>
															</div>
														);
													}

													return null;
												}}
											/>
											<Bar dataKey="value" radius={[4, 4, 0, 0]}>
												{chartData.map((entry, index) => (
													<Cell key={`cell-${index}`} fill={entry.color} />
												))}
											</Bar>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-card border-border">
							<CardHeader>
								<CardTitle>Hasil Anda</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									{sortedTemperaments.map(([type, percentage]) => (
										<div key={type} className="flex justify-between items-center">
											<div className="flex items-center">
												<span className="w-6 h-6 rounded-full mr-3" style={{ backgroundColor: getTemperamentColor(type as keyof typeof temperamentNames) }}></span>
												<span className={`font-medium`}>{temperamentNames[type as keyof typeof temperamentNames]}</span>
											</div>
											<span className="font-semibold">{percentage.toFixed(1)}%</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					<Card className="mb-8 bg-card border-border">
						<CardHeader>
							<CardTitle>Temperamen Dominan Anda: {dominantInfo.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-6 text-muted-foreground">{dominantInfo.description}</p>

							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<h3 className="font-semibold mb-2">Kekuatan</h3>
									<ul className="list-disc pl-5 space-y-1 text-muted-foreground">
										{dominantInfo.strengths.map((strength, index) => (
											<li key={index}>{strength}</li>
										))}
									</ul>
								</div>

								<div>
									<h3 className="font-semibold mb-2">Tantangan</h3>
									<ul className="list-disc pl-5 space-y-1 text-muted-foreground">
										{dominantInfo.challenges.map((challenge, index) => (
											<li key={index}>{challenge}</li>
										))}
									</ul>
								</div>
							</div>
							<div>
								<h2 className="text-center mt-12 text-2xl font-semibold">Galen Anda seperti Tokoh</h2>
							</div>
						</CardContent>
					</Card>

					<div className="bg-muted p-6 rounded-lg border border-border">
						<h3 className="text-xl font-semibold mb-4">Memahami Perpaduan Anda</h3>
						<p className="mb-4 text-muted-foreground">Kebanyakan orang adalah perpaduan dari beberapa temperamen, dengan satu atau dua yang dominan. Hasil Anda menunjukkan kombinasi unik dari keempat galen klasik.</p>
						<p className="text-muted-foreground">Persentase menunjukkan seberapa kuat setiap temperamen diekspresikan dalam kepribadian Anda. Perpaduan ini menjadikan Anda unik!</p>
					</div>
				</div>

				<div className="mt-8 text-center">
					<Link href="/">
						<Button variant="outline" className="mr-4">
							<Home className="h-4 w-4 mr-2" />
							Kembali ke Beranda
						</Button>
					</Link>
					<Link href="/quiz">
						<Button>Ikuti Tes Lagi</Button>
					</Link>
				</div>
			</main>
		</div>
	);
}
