import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Empat Temperamen</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Temukan Tipe Kepribadianmu</h2>
            <p className="text-xl text-muted-foreground">
              Pahami dirimu lebih baik melalui empat temperamen klasik: Plegmatis, Sanguinis, Melankolis, dan Koleris.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
              <h3 className="text-xl font-semibold mb-2">Plegmatis</h3>
              <p className="text-muted-foreground">
                Tenang, santai, dan damai. Plegmatis adalah individu yang dapat diandalkan, penuh perhatian, dan sabar
                yang lebih suka harmoni dan menghindari konflik.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
              <h3 className="text-xl font-semibold mb-2">Sanguinis</h3>
              <p className="text-muted-foreground">
                Ramah, sosial, dan antusias. Sanguinis adalah orang yang banyak bicara, optimis, dan senang menjadi
                pusat perhatian.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
              <h3 className="text-xl font-semibold mb-2">Melankolis</h3>
              <p className="text-muted-foreground">
                Analitis, berorientasi detail, dan penuh pemikiran. Melankolis adalah perfeksionis yang menghargai
                kedalaman, kualitas, dan koneksi yang bermakna.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card">
              <h3 className="text-xl font-semibold mb-2">Koleris</h3>
              <p className="text-muted-foreground">
                Ambisius, tegas, dan berorientasi pada tujuan. Koleris adalah pemimpin alami yang berambisi, percaya
                diri, dan menghargai hasil.
              </p>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4">Ikuti Tes</h3>
            <p className="mb-6 text-muted-foreground">
              Jawab 30 pertanyaan sederhana untuk menemukan profil temperamen unikmu. Tes ini membutuhkan waktu sekitar
              5-7 menit untuk diselesaikan.
            </p>
            <Link href="/quiz">
              <Button className="group">
                Mulai Tes
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-semibold">Tentang Empat Temperamen</h3>
            <p className="text-muted-foreground">
              Teori empat temperamen adalah salah satu kerangka kerja kepribadian tertua dalam sejarah, yang berasal
              dari pengobatan Yunani kuno. Teori ini menunjukkan bahwa kepribadian kita dipengaruhi oleh empat
              temperamen yang berbeda, masing-masing dengan serangkaian sifat dan karakteristik tersendiri.
            </p>
            <p className="text-muted-foreground">
              Meskipun psikologi modern telah mengembangkan model yang lebih kompleks, empat temperamen memberikan cara
              yang sederhana namun mendalam untuk memahami perbedaan kepribadian dasar.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Tes Empat Temperamen. Semua hak dilindungi.
        </div>
      </footer>
    </div>
  )
}
