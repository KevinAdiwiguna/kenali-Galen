"use client"

import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { temperamentDescriptions } from "@/lib/questions"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Download, Share2, Home } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

type ResultsData = {
  phlegmatic: number
  sanguine: number
  melancholic: number
  choleric: number
}

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [results, setResults] = useState<ResultsData | null>(null)
  const [sortedTemperaments, setSortedTemperaments] = useState<Array<[string, number]>>([])
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const data = searchParams.get("data")
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data)) as ResultsData
        setResults(parsedData)

        // Sort temperaments by percentage (highest first)
        const tempArray: Array<[string, number]> = [
          ["phlegmatic", parsedData.phlegmatic],
          ["sanguine", parsedData.sanguine],
          ["melancholic", parsedData.melancholic],
          ["choleric", parsedData.choleric],
        ]

        tempArray.sort((a, b) => b[1] - a[1])
        setSortedTemperaments(tempArray)
      } catch (error) {
        console.error("Failed to parse results data:", error)
      }
    }
  }, [searchParams])

  const chartData = results
    ? [
        { name: "Plegmatis", value: Math.round(results.phlegmatic) },
        { name: "Sanguinis", value: Math.round(results.sanguine) },
        { name: "Melankolis", value: Math.round(results.melancholic) },
        { name: "Koleris", value: Math.round(results.choleric) },
      ]
    : []

  const downloadAsPDF = async () => {
    if (!resultsRef.current) return

    try {
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save("hasil-empat-temperamen.pdf")
    } catch (error) {
      console.error("Failed to generate PDF:", error)
    }
  }

  const shareResults = async () => {
    if (!resultsRef.current) return

    try {
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
      })

      const imgData = canvas.toDataURL("image/png")

      // Create a blob from the image data
      const blob = await (await fetch(imgData)).blob()

      // Check if Web Share API is available
      if (navigator.share) {
        await navigator.share({
          title: "Hasil Tes Empat Temperamen Saya",
          text: "Lihat hasil tes temperamen kepribadian saya!",
          files: [new File([blob], "hasil-temperamen.png", { type: "image/png" })],
        })
      } else {
        // Fallback for browsers that don't support sharing files
        const shareUrl = URL.createObjectURL(blob)

        // Create a temporary link to download the image
        const a = document.createElement("a")
        a.href = shareUrl
        a.download = "hasil-temperamen.png"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        URL.revokeObjectURL(shareUrl)
      }
    } catch (error) {
      console.error("Failed to share results:", error)
    }
  }

  const temperamentNames = {
    phlegmatic: "Plegmatis",
    sanguine: "Sanguinis",
    melancholic: "Melankolis",
    choleric: "Koleris",
  }

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
    )
  }

  const dominantType = sortedTemperaments[0][0] as keyof typeof temperamentDescriptions
  const dominantInfo = temperamentDescriptions[dominantType]

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Empat Temperamen</h1>
          <div className="flex items-center space-x-2">
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
            <p className="text-muted-foreground">
              Berdasarkan jawaban Anda, berikut adalah profil temperamen unik Anda
            </p>
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
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "6px",
                          color: "hsl(var(--foreground))",
                        }}
                        formatter={(value) => [`${value}%`, "Persentase"]}
                      />
                      <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
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
                  {sortedTemperaments.map(([type, percentage], index) => (
                    <div key={type} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span
                          className={`w-6 h-6 rounded-full mr-3 ${
                            index === 0
                              ? "bg-primary"
                              : index === 1
                                ? "bg-primary/80"
                                : index === 2
                                  ? "bg-primary/60"
                                  : "bg-primary/40"
                          }`}
                        ></span>
                        <span className="font-medium">{temperamentNames[type as keyof typeof temperamentNames]}</span>
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
            </CardContent>
          </Card>

          <div className="bg-muted p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4">Memahami Perpaduan Anda</h3>
            <p className="mb-4 text-muted-foreground">
              Kebanyakan orang adalah perpaduan dari beberapa temperamen, dengan satu atau dua yang dominan. Hasil Anda
              menunjukkan kombinasi unik dari keempat temperamen klasik.
            </p>
            <p className="text-muted-foreground">
              Persentase menunjukkan seberapa kuat setiap temperamen diekspresikan dalam kepribadian Anda. Perpaduan ini
              menjadikan Anda unik!
            </p>
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
  )
}
