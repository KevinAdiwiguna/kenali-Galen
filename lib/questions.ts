export type Question = {
  id: number
  text: string
  options: {
    text: string
    type: "phlegmatic" | "sanguine" | "melancholic" | "choleric"
  }[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Kalau lagi nongkrong, kamu biasanya gimana?",
    options: [
      { text: "Diem sambil dengerin orang ngobrol", type: "phlegmatic" },
      { text: "Langsung nyapa semua orang dan jadi pusat perhatian", type: "sanguine" },
      { text: "Ngobrol serius cuma sama beberapa orang", type: "melancholic" },
      { text: "Ngambil alih obrolan dan mimpin diskusi", type: "choleric" },
    ],
  },
  {
    id: 2,
    text: "Kalau lagi bingung ambil keputusan, biasanya gimana?",
    options: [
      { text: "Dipikirin pelan-pelan, semua opsi dilihat dulu", type: "phlegmatic" },
      { text: "Ikutin kata hati aja", type: "sanguine" },
      { text: "Dibedah dulu semua kemungkinan hasilnya", type: "melancholic" },
      { text: "Mutusin cepat, lanjut tanpa mikir lama", type: "choleric" },
    ],
  },
  {
    id: 3,
    text: "Tempat kerja kamu biasanya kayak gimana?",
    options: [
      { text: "Nyaman dan gampang dipake", type: "phlegmatic" },
      { text: "Penuh warna dan barang-barang lucu", type: "sanguine" },
      { text: "Tertata rapi dan bersih banget", type: "melancholic" },
      { text: "Praktis dan fokus ke hasil", type: "choleric" },
    ],
  },
  {
    id: 4,
    text: "Kalau ada yang nggak setuju, kamu ngapain?",
    options: [
      { text: "Dengerin mereka, terus cari jalan tengah", type: "phlegmatic" },
      { text: "Coba bikin suasana santai, ogah ribut", type: "sanguine" },
      { text: "Jelasin kenapa-nya dengan rinci", type: "melancholic" },
      { text: "Tetep kekeuh sama pendapat, dibela habis-habisan", type: "choleric" },
    ],
  },
  {
    id: 5,
    text: "Kalau bikin rencana, kamu kayak gimana?",
    options: [
      { text: "Ngikut alur aja, liat situasi", type: "phlegmatic" },
      { text: "Coret-coret ide dulu, sisanya spontan", type: "sanguine" },
      { text: "Rencanain rinci plus punya backup", type: "melancholic" },
      { text: "Tentukan tujuan, langsung kerjain", type: "choleric" },
    ],
  },
  {
    id: 6,
    text: "Kalau lagi stres, biasanya kamu gimana?",
    options: [
      { text: "Menjauh dulu, cari ketenangan", type: "phlegmatic" },
      { text: "Cerita ke temen atau cari hiburan", type: "sanguine" },
      { text: "Kepikiran terus, overthinking", type: "melancholic" },
      { text: "Langsung cari solusi dan beresin", type: "choleric" },
    ],
  },
  {
    id: 7,
    text: "Hal yang paling bikin kamu semangat tuh apa?",
    options: [
      { text: "Kehidupan yang damai dan tenang", type: "phlegmatic" },
      { text: "Keseruan dan ketawa bareng orang lain", type: "sanguine" },
      { text: "Hal-hal yang punya makna buat diri sendiri", type: "melancholic" },
      { text: "Ngeraih target dan diakui orang", type: "choleric" },
    ],
  },
  {
    id: 8,
    text: "Kalau ngobrol, gaya kamu biasanya kayak gimana?",
    options: [
      { text: "Tenang, kalem, nggak meledak-ledak", type: "phlegmatic" },
      { text: "Rame, ekspresif, suka cerita", type: "sanguine" },
      { text: "Suka jelas dan detail banget", type: "melancholic" },
      { text: "To the point, langsung aja", type: "choleric" },
    ],
  },
  {
    id: 9,
    text: "Kalau kerja bareng tim, kamu lebih suka peran yang mana?",
    options: [
      { text: "Bantuin dan jaga suasana tetap adem", type: "phlegmatic" },
      { text: "Ngasih energi positif biar semangat", type: "sanguine" },
      { text: "Pastikan semua rapi dan teliti", type: "melancholic" },
      { text: "Ambil alih dan arahin tim", type: "choleric" },
    ],
  },
  {
    id: 10,
    text: "Kalau ngambil keputusan, kamu biasanya mikirin apa?",
    options: [
      { text: "Yang penting nggak bikin konflik", type: "phlegmatic" },
      { text: "Yang rasanya bener dan bikin happy", type: "sanguine" },
      { text: "Analisa dulu, mikir mateng-mateng", type: "melancholic" },
      { text: "Yang paling cepet bikin hasil", type: "choleric" },
    ],
  },
  {
    id: 11,
    text: "Weekend ideal kamu ngapain aja sih?",
    options: [
      { text: "Diem di rumah aja, santai-santai", type: "phlegmatic" },
      { text: "Main bareng temen, spontan aja", type: "sanguine" },
      { text: "Ngulik hobi atau hal yang kamu suka banget", type: "melancholic" },
      { text: "Produktif dan ngerjain hal yang ada tujuannya", type: "choleric" },
    ],
  },
  {
    id: 12,
    text: "Kalau kasih feedback ke orang, biasanya gimana?",
    options: [
      { text: "Pelan-pelan dan supportif", type: "phlegmatic" },
      { text: "Semangat dan nyemangatin", type: "sanguine" },
      { text: "Rinci dan kasih saran jelas", type: "melancholic" },
      { text: "Jujur dan to the point", type: "choleric" },
    ],
  },
  {
    id: 13,
    text: "Hal yang paling kamu cari di hubungan itu apa?",
    options: [
      { text: "Ketenangan dan penerimaan", type: "phlegmatic" },
      { text: "Have fun dan momen bareng", type: "sanguine" },
      { text: "Koneksi yang dalem dan jujur", type: "melancholic" },
      { text: "Setia dan saling respect", type: "choleric" },
    ],
  },
  {
    id: 14,
    text: "Kalau mulai proyek baru, kamu biasanya gimana?",
    options: [
      { text: "Pahami dulu, baru mulai jalan", type: "phlegmatic" },
      { text: "Langsung mulai aja, sambil jalan ngerti", type: "sanguine" },
      { text: "Riset dulu, rencanain mateng", type: "melancholic" },
      { text: "Set target, langsung action", type: "choleric" },
    ],
  },
  {
    id: 15,
    text: "Kalau ada perubahan, kamu biasanya gimana?",
    options: [
      { text: "Coba menyesuaikan, walau suka yang stabil", type: "phlegmatic" },
      { text: "Suka tantangan baru", type: "sanguine" },
      { text: "Hati-hati dan lihat-lihat dulu", type: "melancholic" },
      { text: "Langsung ambil kendali", type: "choleric" },
    ],
  },
   {
    id: 16,
    text: "Orang lain biasanya ngkritik kamu soal apa?",
    options: [
      { text: "Katanya aku kurang tegas atau terlalu santai", type: "phlegmatic" },
      { text: "Suka loncat-loncat ide, kurang konsisten", type: "sanguine" },
      { text: "Terlalu perfeksionis atau banyak nuntut", type: "melancholic" },
      { text: "Keliatan galak atau buru-buru", type: "choleric" },
    ],
  },
  {
    id: 17,
    text: "Kalau soal aturan, kamu biasanya gimana?",
    options: [
      { text: "Ngikut aja biar nggak ribet", type: "phlegmatic" },
      { text: "Bisa fleksibel, nggak harus saklek", type: "sanguine" },
      { text: "Penting banget buat ketertiban", type: "melancholic" },
      { text: "Diikutin kalau masuk akal, dilawan kalau nggak", type: "choleric" },
    ],
  },
  {
    id: 18,
    text: "Kalau cerita, gaya kamu gimana?",
    options: [
      { text: "Langsung ke intinya aja", type: "phlegmatic" },
      { text: "Seru dan penuh warna", type: "sanguine" },
      { text: "Lengkap dan penuh detail", type: "melancholic" },
      { text: "Singkat, padat, dan jelas", type: "choleric" },
    ],
  },
  {
    id: 19,
    text: "Kalau atur waktu, kamu termasuk yang kayak gimana?",
    options: [
      { text: "Kalem tapi tetap bisa diandalkan", type: "phlegmatic" },
      { text: "Suka spontan dan fleksibel", type: "sanguine" },
      { text: "Punya jadwal dan patuh sama itu", type: "melancholic" },
      { text: "Cepat dan produktif", type: "choleric" },
    ],
  },
  {
    id: 20,
    text: "Kalau lagi ada masalah, orang-orang lihat kamu gimana?",
    options: [
      { text: "Tenang dan nggak panikan", type: "phlegmatic" },
      { text: "Tetap positif dan fleksibel", type: "sanguine" },
      { text: "Mikirin semuanya dengan hati-hati", type: "melancholic" },
      { text: "Tegas dan langsung gerak", type: "choleric" },
    ],
  },
  {
    id: 21,
    text: "Kelebihan terbesar kamu tuh apa?",
    options: [
      { text: "Selalu ada dan support temen", type: "phlegmatic" },
      { text: "Bikin suasana jadi ceria dan seru", type: "sanguine" },
      { text: "Teliti dan perhatian", type: "melancholic" },
      { text: "Jago mimpin dan nyelesaiin masalah", type: "choleric" },
    ],
  },
  {
    id: 22,
    text: "Kalau nunjukin perasaan, kamu biasanya gimana?",
    options: [
      { text: "Coba tetap tenang dan nggak heboh", type: "phlegmatic" },
      { text: "Ekspresif banget, nggak bisa ditahan", type: "sanguine" },
      { text: "Dipendam dulu, terus cerita pas udah siap", type: "melancholic" },
      { text: "Fokus ke solusi daripada drama", type: "choleric" },
    ],
  },
  {
    id: 23,
    text: "Kalau ada konflik, biasanya kamu ngapain?",
    options: [
      { text: "Cari jalan damai biar adem lagi", type: "phlegmatic" },
      { text: "Bercanda biar suasana cair", type: "sanguine" },
      { text: "Coba paham akar masalahnya", type: "melancholic" },
      { text: "Langsung selesain, nggak pake lama", type: "choleric" },
    ],
  },
  {
    id: 24,
    text: "Kapan sih kamu ngerasa paling puas atau senang?",
    options: [
      { text: "Kalau lingkungan lagi tenang dan damai", type: "phlegmatic" },
      { text: "Kalau bisa bikin orang lain senyum", type: "sanguine" },
      { text: "Kalau bisa bikin hal yang punya makna", type: "melancholic" },
      { text: "Kalau berhasil capai target besar", type: "choleric" },
    ],
  },
  {
    id: 25,
    text: "Energi kamu sehari-hari tuh kayak gimana?",
    options: [
      { text: "Stabil, nggak naik turun", type: "phlegmatic" },
      { text: "Suka semangat tinggi", type: "sanguine" },
      { text: "Tergantung suasana hati dan minat", type: "melancholic" },
      { text: "Fokus dan intens", type: "choleric" },
    ],
  },
  {
    id: 26,
    text: "Kalau belajar hal baru, kamu sukanya gimana?",
    options: [
      { text: "Pelan-pelan aja, step by step", type: "phlegmatic" },
      { text: "Coba langsung aja, nanti juga ngerti", type: "sanguine" },
      { text: "Cari tau teorinya duluan", type: "melancholic" },
      { text: "Liat yang paling berguna dan langsung praktekin", type: "choleric" },
    ],
  },
  {
    id: 27,
    text: "Tempat pribadi kamu biasanya kayak apa?",
    options: [
      { text: "Simpel dan enak ditinggalin", type: "phlegmatic" },
      { text: "Penuh warna dan kenangan", type: "sanguine" },
      { text: "Tertata rapi dan estetik", type: "melancholic" },
      { text: "Fungsional dan efisien", type: "choleric" },
    ],
  },
  {
    id: 28,
    text: "Hal apa yang paling bikin kamu nggak sabaran?",
    options: [
      { text: "Orang yang suka drama nggak penting", type: "phlegmatic" },
      { text: "Rutinitas yang ngebosenin", type: "sanguine" },
      { text: "Orang ceroboh dan nggak detail", type: "melancholic" },
      { text: "Orang lambat dan nggak tegas", type: "choleric" },
    ],
  },
  {
    id: 29,
    text: "Kalau ambil risiko, kamu kayak gimana?",
    options: [
      { text: "Hati-hati dan mikir dulu", type: "phlegmatic" },
      { text: "Ayo aja, asal seru", type: "sanguine" },
      { text: "Ditunggu sampai yakin", type: "melancholic" },
      { text: "Ambil risiko kalau untungnya sepadan", type: "choleric" },
    ],
  },
  {
    id: 30,
    text: "Orang bilang hidup kamu tuh jalannya gimana?",
    options: [
      { text: "Lambat tapi pasti", type: "phlegmatic" },
      { text: "Random dan penuh kejutan", type: "sanguine" },
      { text: "Disusun dan terencana", type: "melancholic" },
      { text: "Cepat dan penuh target", type: "choleric" },
    ],
  },
]

export const temperamentDescriptions = {
  phlegmatic: {
    title: "Plegmatis",
    description:
      "Kamu tuh tipe orang yang kalem banget. Nggak gampang panik, dan enak diajak ngobrol karena selalu bisa bikin suasana adem. Kamu bisa diandalkan, sabar, dan nggak suka drama. Lebih seneng damai daripada ribut-ribut, jadi sering banget jadi penengah yang bijak. Kamu juga suka waktu sendiri, tapi kalau udah sayang sama orang, kamu bakal loyal banget. Kehadiran kamu tuh bikin orang merasa aman dan nyaman.",
    strengths: ["Sabar banget", "Suka damai", "Nggak ribet", "Pintar jaga suasana", "Konsisten", "Pendengar setia"],
    challenges: [
      "Kadang terlalu ngikut aja",
      "Suka menghindari konflik penting",
      "Terlalu santai sampai nggak ambil sikap",
      "Kurang suka perubahan mendadak",
      "Suka nunda-nunda",
    ],
  },
  sanguine: {
    title: "Sanguinis",
    description:
      "Kamu itu si happy virus! Selalu rame, ceria, dan gampang bikin orang ketawa. Gampang akrab sama siapa aja, dan kayaknya selalu punya cerita seru buat dibagi. Kamu suka banget keramaian, dan biasanya jadi pusat perhatian. Hidup kamu penuh warna, dan kamu tuh jagonya bikin suasana jadi lebih hidup. Kamu juga spontan dan nggak suka yang terlalu kaku.",
    strengths: ["Ceria banget", "Semangatnya nular", "Ekspresif", "Optimis", "Suka kejutan", "Orangnya asik banget"],
    challenges: [
      "Kadang berantakan dan lupa detail",
      "Susah fokus dan gampang bosen",
      "Suka ngomong tapi kurang dengerin",
      "Gampang impulsif",
      "Kadang pengen diperhatiin terus",
    ],
  },
  melancholic: {
    title: "Melankolis",
    description:
      "Kamu tuh tipe yang mikirnya dalam dan penuh pertimbangan. Suka hal-hal yang detail dan punya makna. Perfeksionis? Iya banget. Tapi kamu juga kreatif dan punya rasa seni yang kuat. Temen-temen suka ngobrol serius sama kamu karena kamu ngerti cara dengerin dan kasih masukan yang thoughtful. Kamu suka refleksi dan mikirin hal-hal yang orang lain mungkin lewatkan.",
    strengths: ["Detail banget", "Pikirannya dalem", "Analitis", "Tertata rapi", "Kreatif", "Setia banget"],
    challenges: [
      "Kadang terlalu kritis, bahkan ke diri sendiri",
      "Suka overthinking",
      "Bisa pesimis kalau lagi down",
      "Terlalu ngincer yang sempurna",
      "Perasa banget, gampang baper",
    ],
  },
  choleric: {
    title: "Koleris",
    description:
      "Kamu tuh pemimpin alami. Nggak suka berlama-lama, kalau bisa langsung dikerjain ya langsung aja. Kamu percaya diri, ambisius, dan punya semangat tinggi buat capai tujuan. Tantangan justru bikin kamu semangat. Kamu nggak takut ambil keputusan dan nggak suka basa-basi. Tapi di balik ketegasan kamu, kadang orang juga butuh kamu buat sedikit lebih chill.",
    strengths: ["Tegas", "Percaya diri banget", "Nggak suka nunda-nunda", "Fokus ke hasil", "Punya tekad kuat", "Mandiri"],
    challenges: [
      "Kadang suka dominan banget",
      "Nggak sabaran kalau semuanya lambat",
      "Kurang peka sama perasaan orang",
      "Suka ngotot kalau merasa benar",
      "Susah buat santai dan lepas kontrol",
    ],
  },
};
