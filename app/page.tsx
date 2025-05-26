import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

import { IoWater } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-background text-foreground">
			<header className="border-b border-border">
				<Link href={"/"} className="container mx-auto px-4 py-6 flex justify-between items-center">
					<div className="flex justify-center items-center">
						<Image src={"/galen-logo.png"} alt="Galen Logo" width={60} height={60} className="inline-block mr-2" />
						<h1 className="text-2xl font-semibold">Kenali Galen</h1>
					</div>
					<ThemeToggle />
				</Link>
			</header>

			<main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
				<div className="space-y-8">
					<div className="space-y-4">
						<h2 className="text-4xl font-bold tracking-tight">Temukan Tipe Kepribadianmu</h2>
						<p className="text-xl text-muted-foreground">Pahami dirimu lebih baik melalui Kenali Galen klasik: Plegmatis, Sanguinis, Melankolis, dan Koleris.</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 my-12">
						<div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
							<h3 className="text-xl font-semibold mb-2 text-blue-500">
								<div className="flex items-center gap-x-2">
									<IoWater size={"20px"} />
									Plegmatis
								</div>
							</h3>
							<p className="text-muted-foreground">Tenang, santai, dan damai. Plegmatis adalah individu yang dapat diandalkan, penuh perhatian, dan sabar yang lebih suka harmoni dan menghindari konflik.</p>
						</div>

						<div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
							<h3 className="text-xl font-semibold mb-2 text-green-500">
								<div className="flex items-center gap-x-2">
									<FaLeaf size={"20px"} />
									Sanguinis
								</div>
							</h3>
							<p className="text-muted-foreground">Ramah, sosial, dan antusias. Sanguinis adalah orang yang banyak bicara, optimis, dan senang menjadi pusat perhatian.</p>
						</div>

						<div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
							<h3 className="text-xl font-semibold mb-2 text-purple-500">
								<div className="flex items-center gap-x-2">
									<AiFillThunderbolt size={"20px"} />
									Melankolis
								</div>
							</h3>
							<p className="text-muted-foreground">Analitis, berorientasi detail, dan penuh pemikiran. Melankolis adalah perfeksionis yang menghargai kedalaman, kualitas, dan koneksi yang bermakna.</p>
						</div>

						<div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
							<h3 className="text-xl font-semibold mb-2 text-red-500">
								<div className="flex items-center gap-x-2">
									<FaFire size={"20px"} />
									Koleris
								</div>
							</h3>
							<p className="text-muted-foreground">Ambisius, tegas, dan berorientasi pada tujuan. Koleris adalah pemimpin alami yang berambisi, percaya diri, dan menghargai hasil.</p>
						</div>
					</div>

					<div className="bg-muted p-8 rounded-lg border border-border">
						<h3 className="text-2xl font-semibold mb-4">Ikuti Tes</h3>
						<p className="mb-6 text-muted-foreground">Jawab 30 pertanyaan sederhana untuk menemukan profil temperamen unikmu. Tes ini membutuhkan waktu sekitar 5-7 menit untuk diselesaikan.</p>
						<Link href="/quiz">
							<Button className="group">
								Mulai Tes
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Button>
						</Link>
					</div>

					<div className="mt-12 space-y-4">
						<h3 className="text-2xl font-semibold">Tentang Kenali Galen</h3>
						<p className="text-muted-foreground">Teori Kenali Galen adalah salah satu kerangka kerja kepribadian tertua dalam sejarah, yang berasal dari pengobatan Yunani kuno. Teori ini menunjukkan bahwa kepribadian kita dipengaruhi oleh empat temperamen yang berbeda, masing-masing dengan serangkaian sifat dan karakteristik tersendiri.</p>
						<p className="text-muted-foreground">Meskipun psikologi modern telah mengembangkan model yang lebih kompleks, Kenali Galen memberikan cara yang sederhana namun mendalam untuk memahami perbedaan kepribadian dasar.</p>
					</div>
				</div>
			</main>

			<footer className="border-t border-border py-6">
				<div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
					© {new Date().getFullYear()} Kenali Galen. <Link href={"https://github.com/KevinAdiwiguna"}>KevinAdiwiguna</Link>
				</div>
			</footer>
		</div>
	);
}
