export type Question = {
	id: number;
	text: string;
	options: {
		text: string;
		type: "phlegmatic" | "sanguine" | "melancholic" | "choleric";
	}[];
};

export const questions: Question[] = [
	{
		id: 1,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saya cenderung diam dan mendengarkan saat berkumpul dengan teman-teman.", type: "phlegmatic" },
			{ text: "Saya adalah orang pertama yang menyapa semua orang dan menjadi pusat perhatian.", type: "sanguine" },
			{ text: "Saya lebih suka mengobrol serius dengan beberapa orang saja.", type: "melancholic" },
			{ text: "Saya suka mengambil alih obrolan dan memimpin diskusi.", type: "choleric" },
		],
	},
	{
		id: 2,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat bingung mengambil keputusan, saya akan memikirkannya pelan-pelan dan mempertimbangkan semua opsi.", type: "phlegmatic" },
			{ text: "Saya cenderung mengikuti kata hati saat mengambil keputusan.", type: "sanguine" },
			{ text: "Saya akan membongkar semua kemungkinan hasil sebelum membuat keputusan.", type: "melancholic" },
			{ text: "Saya memutuskan dengan cepat dan langsung melangkah maju tanpa terlalu banyak berpikir.", type: "choleric" },
		],
	},
	{
		id: 3,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Tempat kerja ideal saya adalah yang nyaman dan mudah digunakan.", type: "phlegmatic" },
			{ text: "Tempat kerja saya biasanya penuh warna dan barang-barang yang menyenangkan.", type: "sanguine" },
			{ text: "Tempat kerja saya selalu tertata rapi dan bersih.", type: "melancholic" },
			{ text: "Tempat kerja saya dirancang untuk praktis dan berfokus pada hasil.", type: "choleric" },
		],
	},
	{
		id: 4,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Jika ada yang tidak setuju, saya akan mendengarkan mereka dan mencari jalan tengah.", type: "phlegmatic" },
			{ text: "Saya mencoba mencairkan suasana dan menghindari konflik saat ada ketidaksetujuan.", type: "sanguine" },
			{ text: "Saya akan menjelaskan alasan saya secara rinci saat ada ketidaksetujuan.", type: "melancholic" },
			{ text: "Saya akan mempertahankan pendapat saya dengan gigih saat ada ketidaksetujuan.", type: "choleric" },
		],
	},
	{
		id: 5,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat membuat rencana, saya cenderung mengikuti alur dan melihat situasi.", type: "phlegmatic" },
			{ text: "Saya suka mencoret-coret ide dan membiarkan sisanya spontan.", type: "sanguine" },
			{ text: "Saya membuat rencana rinci dan punya backup untuk segalanya.", type: "melancholic" },
			{ text: "Saya menentukan tujuan dan langsung mengerjakannya.", type: "choleric" },
		],
	},
	{
		id: 6,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat stres, saya cenderung menjauh dulu dan mencari ketenangan.", type: "phlegmatic" },
			{ text: "Saat stres, saya akan bercerita kepada teman atau mencari hiburan.", type: "sanguine" },
			{ text: "Saat stres, saya cenderung memikirkan masalah terus-menerus dan overthinking.", type: "melancholic" },
			{ text: "Saat stres, saya akan langsung mencari solusi dan menyelesaikannya.", type: "choleric" },
		],
	},
	{
		id: 7,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Hal yang paling membangkitkan semangat saya adalah kehidupan yang damai dan tenang.", type: "phlegmatic" },
			{ text: "Hal yang paling membangkitkan semangat saya adalah keseruan dan tawa bersama orang lain.", type: "sanguine" },
			{ text: "Hal yang paling membangkitkan semangat saya adalah hal-hal yang memiliki makna pribadi.", type: "melancholic" },
			{ text: "Hal yang paling membangkitkan semangat saya adalah mencapai target dan diakui orang lain.", type: "choleric" },
		],
	},
	{
		id: 8,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Gaya berbicara saya cenderung tenang dan kalem, tidak meledak-ledak.", type: "phlegmatic" },
			{ text: "Gaya berbicara saya ramai, ekspresif, dan saya suka bercerita.", type: "sanguine" },
			{ text: "Saya suka berbicara dengan jelas dan sangat detail.", type: "melancholic" },
			{ text: "Saya berbicara langsung ke intinya, to the point.", type: "choleric" },
		],
	},
	{
		id: 9,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Dalam tim, saya lebih suka peran yang membantu dan menjaga suasana tetap kondusif.", type: "phlegmatic" },
			{ text: "Dalam tim, saya suka memberi energi positif agar semua orang semangat.", type: "sanguine" },
			{ text: "Dalam tim, saya memastikan semua rapi dan teliti.", type: "melancholic" },
			{ text: "Dalam tim, saya suka mengambil alih dan mengarahkan tim.", type: "choleric" },
		],
	},
	{
		id: 10,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat mengambil keputusan, saya memikirkan yang penting tidak menimbulkan konflik.", type: "phlegmatic" },
			{ text: "Saya cenderung memilih keputusan yang terasa benar dan membuat saya bahagia.", type: "sanguine" },
			{ text: "Saya akan menganalisa dulu dan berpikir matang-matang sebelum memutuskan.", type: "melancholic" },
			{ text: "Saya memilih keputusan yang paling cepat menghasilkan sesuatu.", type: "choleric" },
		],
	},
	{
		id: 11,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Weekend ideal saya adalah diam di rumah saja, santai-santai.", type: "phlegmatic" },
			{ text: "Weekend ideal saya adalah bermain bersama teman-teman secara spontan.", type: "sanguine" },
			{ text: "Weekend ideal saya adalah mendalami hobi atau hal yang sangat saya sukai.", type: "melancholic" },
			{ text: "Weekend ideal saya adalah produktif dan mengerjakan hal yang memiliki tujuan.", type: "choleric" },
		],
	},
	{
		id: 12,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat memberi feedback, saya cenderung pelan-pelan dan supportif.", type: "phlegmatic" },
			{ text: "Saya memberi feedback dengan semangat dan menyemangati.", type: "sanguine" },
			{ text: "Saya memberi feedback secara rinci dan memberikan saran yang jelas.", type: "melancholic" },
			{ text: "Saya memberi feedback secara jujur dan to the point.", type: "choleric" },
		],
	},
	{
		id: 13,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Hal yang paling saya cari dalam sebuah hubungan adalah ketenangan dan penerimaan.", type: "phlegmatic" },
			{ text: "Hal yang paling saya cari dalam sebuah hubungan adalah bersenang-senang dan momen bersama.", type: "sanguine" },
			{ text: "Hal yang paling saya cari dalam sebuah hubungan adalah koneksi yang mendalam dan jujur.", type: "melancholic" },
			{ text: "Hal yang paling saya cari dalam sebuah hubungan adalah kesetiaan dan saling menghormati.", type: "choleric" },
		],
	},
	{
		id: 14,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat memulai proyek baru, saya akan memahami dulu baru mulai berjalan.", type: "phlegmatic" },
			{ text: "Saya cenderung langsung memulai saja proyek baru, nanti juga mengerti sambil jalan.", type: "sanguine" },
			{ text: "Saya akan melakukan riset dan merencanakan proyek baru dengan matang.", type: "melancholic" },
			{ text: "Saya akan menetapkan target dan langsung beraksi dalam proyek baru.", type: "choleric" },
		],
	},
	{
		id: 15,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat ada perubahan, saya mencoba menyesuaikan diri, meskipun saya lebih suka yang stabil.", type: "phlegmatic" },
			{ text: "Saya suka tantangan baru saat ada perubahan.", type: "sanguine" },
			{ text: "Saya akan berhati-hati dan melihat-lihat dulu saat ada perubahan.", type: "melancholic" },
			{ text: "Saya akan langsung mengambil kendali saat ada perubahan.", type: "choleric" },
		],
	},
	{
		id: 16,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Orang lain sering mengkritik saya karena kurang tegas atau terlalu santai.", type: "phlegmatic" },
			{ text: "Orang lain sering mengkritik saya karena suka berpindah-pindah ide dan kurang konsisten.", type: "sanguine" },
			{ text: "Orang lain sering mengkritik saya karena terlalu perfeksionis atau banyak menuntut.", type: "melancholic" },
			{ text: "Orang lain sering mengkritik saya karena terlihat galak atau terburu-buru.", type: "choleric" },
		],
	},
	{
		id: 17,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Soal aturan, saya cenderung mengikuti saja agar tidak ribet.", type: "phlegmatic" },
			{ text: "Soal aturan, saya bisa fleksibel dan tidak harus saklek.", type: "sanguine" },
			{ text: "Aturan penting sekali bagi saya untuk ketertiban.", type: "melancholic" },
			{ text: "Saya akan mengikuti aturan jika masuk akal, dan melawannya jika tidak.", type: "choleric" },
		],
	},
	{
		id: 18,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat bercerita, saya cenderung langsung ke intinya saja.", type: "phlegmatic" },
			{ text: "Gaya cerita saya seru dan penuh warna.", type: "sanguine" },
			{ text: "Saya bercerita secara lengkap dan penuh detail.", type: "melancholic" },
			{ text: "Saya bercerita secara singkat, padat, dan jelas.", type: "choleric" },
		],
	},
	{
		id: 19,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Dalam mengatur waktu, saya termasuk yang kalem tapi tetap bisa diandalkan.", type: "phlegmatic" },
			{ text: "Saya suka spontan dan fleksibel dalam mengatur waktu.", type: "sanguine" },
			{ text: "Saya memiliki jadwal dan patuh padanya dalam mengatur waktu.", type: "melancholic" },
			{ text: "Saya cepat dan produktif dalam mengatur waktu.", type: "choleric" },
		],
	},
	{
		id: 20,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Jika ada masalah, orang-orang melihat saya sebagai pribadi yang tenang dan tidak panik.", type: "phlegmatic" },
			{ text: "Jika ada masalah, orang-orang melihat saya sebagai pribadi yang tetap positif dan fleksibel.", type: "sanguine" },
			{ text: "Jika ada masalah, orang-orang melihat saya sebagai pribadi yang memikirkan semuanya dengan hati-hati.", type: "melancholic" },
			{ text: "Jika ada masalah, orang-orang melihat saya sebagai pribadi yang tegas dan langsung bergerak.", type: "choleric" },
		],
	},
	{
		id: 21,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Kelebihan terbesar saya adalah selalu ada dan mendukung teman.", type: "phlegmatic" },
			{ text: "Kelebihan terbesar saya adalah membuat suasana menjadi ceria dan seru.", type: "sanguine" },
			{ text: "Kelebihan terbesar saya adalah teliti dan perhatian terhadap detail.", type: "melancholic" },
			{ text: "Kelebihan terbesar saya adalah pandai memimpin dan menyelesaikan masalah.", type: "choleric" },
		],
	},
	{
		id: 22,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat menunjukkan perasaan, saya berusaha tetap tenang dan tidak terlalu heboh.", type: "phlegmatic" },
			{ text: "Saya sangat ekspresif saat menunjukkan perasaan, tidak bisa ditahan.", type: "sanguine" },
			{ text: "Saya cenderung memendam perasaan dulu, lalu bercerita saat sudah siap.", type: "melancholic" },
			{ text: "Saya fokus pada solusi daripada drama saat ada masalah emosional.", type: "choleric" },
		],
	},
	{
		id: 23,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat ada konflik, saya akan mencari jalan damai agar suasana kembali kondusif.", type: "phlegmatic" },
			{ text: "Saya akan bercanda untuk mencairkan suasana saat ada konflik.", type: "sanguine" },
			{ text: "Saya berusaha memahami akar masalahnya saat ada konflik.", type: "melancholic" },
			{ text: "Saya akan langsung menyelesaikan konflik tanpa menunda.", type: "choleric" },
		],
	},
	{
		id: 24,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saya merasa paling puas atau senang saat lingkungan saya tenang dan damai.", type: "phlegmatic" },
			{ text: "Saya merasa paling puas atau senang saat bisa membuat orang lain tersenyum.", type: "sanguine" },
			{ text: "Saya merasa paling puas atau senang saat bisa menciptakan hal yang bermakna.", type: "melancholic" },
			{ text: "Saya merasa paling puas atau senang saat berhasil mencapai target besar.", type: "choleric" },
		],
	},
	{
		id: 25,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Energi saya sehari-hari cenderung stabil, tidak naik turun.", type: "phlegmatic" },
			{ text: "Saya sering memiliki semangat yang tinggi dalam beraktivitas.", type: "sanguine" },
			{ text: "Energi saya tergantung pada suasana hati dan minat saya.", type: "melancholic" },
			{ text: "Energi saya fokus dan intens dalam mencapai tujuan.", type: "choleric" },
		],
	},
	{
		id: 26,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat belajar hal baru, saya suka pelan-pelan saja, langkah demi langkah.", type: "phlegmatic" },
			{ text: "Saya suka langsung mencoba saat belajar hal baru, nanti juga mengerti.", type: "sanguine" },
			{ text: "Saya akan mencari tahu teorinya dulu sebelum belajar hal baru.", type: "melancholic" },
			{ text: "Saya melihat yang paling berguna dan langsung mempraktikkannya saat belajar hal baru.", type: "choleric" },
		],
	},
	{
		id: 27,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Tempat pribadi saya biasanya simpel dan nyaman untuk ditinggali.", type: "phlegmatic" },
			{ text: "Tempat pribadi saya penuh warna dan kenangan yang menyenangkan.", type: "sanguine" },
			{ text: "Tempat pribadi saya tertata rapi dan estetik.", type: "melancholic" },
			{ text: "Tempat pribadi saya fungsional dan efisien.", type: "choleric" },
		],
	},
	{
		id: 28,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Hal yang paling membuat saya tidak sabar adalah orang yang suka drama tidak penting.", type: "phlegmatic" },
			{ text: "Hal yang paling membuat saya tidak sabar adalah rutinitas yang membosankan.", type: "sanguine" },
			{ text: "Hal yang paling membuat saya tidak sabar adalah orang yang ceroboh dan tidak detail.", type: "melancholic" },
			{ text: "Hal yang paling membuat saya tidak sabar adalah orang yang lambat dan tidak tegas.", type: "choleric" },
		],
	},
	{
		id: 29,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saat mengambil risiko, saya cenderung hati-hati dan berpikir dulu.", type: "phlegmatic" },
			{ text: "Saya akan mengambil risiko asal seru dan menarik.", type: "sanguine" },
			{ text: "Saya akan menunggu sampai yakin sebelum mengambil risiko.", type: "melancholic" },
			{ text: "Saya akan mengambil risiko jika keuntungannya sepadan.", type: "choleric" },
		],
	},
	{
		id: 30,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Orang bilang jalan hidup saya lambat tapi pasti.", type: "phlegmatic" },
			{ text: "Orang bilang hidup saya acak dan penuh kejutan.", type: "sanguine" },
			{ text: "Orang bilang hidup saya tersusun dan terencana.", type: "melancholic" },
			{ text: "Orang bilang hidup saya cepat dan penuh target.", type: "choleric" },
		],
	},
	{
		id: 31,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saya cenderung mudah beradaptasi dengan orang lain, meskipun tidak selalu proaktif.", type: "phlegmatic" },
			{ text: "Saya suka bertemu orang baru dan mudah berteman.", type: "sanguine" },
			{ text: "Saya lebih suka berinteraksi dengan orang yang sudah saya kenal baik dan memiliki koneksi yang mendalam.", type: "melancholic" },
			{ text: "Saya memilih-milih siapa yang diajak bicara, biasanya hanya pada orang yang bisa memberikan hasil atau dampak.", type: "choleric" },
		],
	},
	{
		id: 32,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Ketika dihadapkan pada tugas yang banyak, saya cenderung melakukan yang bisa saya lakukan tanpa terburu-buru.", type: "phlegmatic" },
			{ text: "Saya bersemangat memulai banyak tugas sekaligus, meskipun mungkin tidak semuanya selesai sempurna.", type: "sanguine" },
			{ text: "Saya akan membuat daftar tugas yang rinci dan mengerjakannya satu per satu secara metodis.", type: "melancholic" },
			{ text: "Saya mengidentifikasi tugas paling penting dan menyelesaikannya dengan cepat.", type: "choleric" },
		],
	},
	{
		id: 33,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saya merasa paling nyaman di lingkungan yang tenang dan damai.", type: "phlegmatic" },
			{ text: "Saya merasa paling nyaman di lingkungan yang penuh tawa dan keceriaan.", type: "sanguine" },
			{ text: "Saya merasa paling nyaman di lingkungan yang tertata rapi dan terstruktur.", type: "melancholic" },
			{ text: "Saya merasa paling nyaman di lingkungan yang menantang dan berorientasi pada tujuan.", type: "choleric" },
		],
	},
	{
		id: 34,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Jika ada yang meminta bantuan, saya cenderung siap membantu tanpa banyak pertanyaan.", type: "phlegmatic" },
			{ text: "Saya sangat antusias untuk membantu orang lain dan suka membuat mereka senang.", type: "sanguine" },
			{ text: "Saya akan mempertimbangkan detail permintaan sebelum memutuskan untuk membantu.", type: "melancholic" },
			{ text: "Saya akan membantu jika itu efisien dan membawa hasil yang jelas.", type: "choleric" },
		],
	},
	{
		id: 35,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saya cenderung mengindari konflik dan berusaha menjaga kedamaian.", type: "phlegmatic" },
			{ text: "Saya cenderung mengubah konflik menjadi lelucon untuk meredakan ketegangan.", type: "sanguine" },
			{ text: "Saya akan menganalisis konflik untuk menemukan akar masalahnya dan solusinya.", type: "melancholic" },
			{ text: "Saya akan menghadapi konflik secara langsung untuk menyelesaikannya.", type: "choleric" },
		],
	},
	{
		id: 36,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Hal yang paling membuat saya merasa aman adalah stabilitas dan rutinitas.", type: "phlegmatic" },
			{ text: "Hal yang paling membuat saya merasa aman adalah dukungan dan persahabatan dari orang lain.", type: "sanguine" },
			{ text: "Hal yang paling membuat saya merasa aman adalah perencanaan yang matang dan detail.", type: "melancholic" },
			{ text: "Hal yang paling membuat saya merasa aman adalah kontrol dan kemampuan saya untuk mencapai tujuan.", type: "choleric" },
		],
	},
	{
		id: 37,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Jika saya harus menunggu, saya cenderung sabar dan tenang.", type: "phlegmatic" },
			{ text: "Saya akan mencari sesuatu yang menarik untuk dilakukan saat harus menunggu.", type: "sanguine" },
			{ text: "Saya akan memanfaatkan waktu menunggu untuk menganalisis atau merencanakan sesuatu.", type: "melancholic" },
			{ text: "Saya tidak suka menunggu dan akan mencari cara untuk mempercepat prosesnya.", type: "choleric" },
		],
	},
	{
		id: 38,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saya dikenal sebagai orang yang loyal dan suportif.", type: "phlegmatic" },
			{ text: "Saya dikenal sebagai orang yang optimis dan inspiratif.", type: "sanguine" },
			{ text: "Saya dikenal sebagai orang yang analitis dan teliti.", type: "melancholic" },
			{ text: "Saya dikenal sebagai orang yang tegas dan berorientasi pada hasil.", type: "choleric" },
		],
	},
	{
		id: 39,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Dalam memilih hiburan, saya suka yang menenangkan dan santai.", type: "phlegmatic" },
			{ text: "Saya suka hiburan yang seru dan melibatkan banyak orang.", type: "sanguine" },
			{ text: "Saya suka hiburan yang mendalam dan merangsang pemikiran.", type: "melancholic" },
			{ text: "Saya suka hiburan yang kompetitif dan memberikan tantangan.", type: "choleric" },
		],
	},
	{
		id: 40,
		text: "Pilih pernyataan yang paling mencerminkan Anda:",
		options: [
			{ text: "Saya cenderung membiarkan orang lain memimpin jika tidak ada masalah.", type: "phlegmatic" },
			{ text: "Saya suka menjadi pusat perhatian dan memimpin dengan karisma.", type: "sanguine" },
			{ text: "Saya akan memimpin jika ada rencana yang jelas dan terstruktur.", type: "melancholic" },
			{ text: "Saya secara alami mengambil peran kepemimpinan dan mengarahkan.", type: "choleric" },
		],
	},
];

export const temperamentDescriptions = {
	phlegmatic: {
		title: "Plegmatis",
		description: "Kamu tuh tipe orang yang kalem banget. Nggak gampang panik, dan enak diajak ngobrol karena selalu bisa bikin suasana adem. Kamu bisa diandalkan, sabar, dan nggak suka drama. Lebih seneng damai daripada ribut-ribut, jadi sering banget jadi penengah yang bijak. Kamu juga suka waktu sendiri, tapi kalau udah sayang sama orang, kamu bakal loyal banget. Kehadiran kamu tuh bikin orang merasa aman dan nyaman.",
		strengths: ["Sabar banget", "Suka damai", "Nggak ribet", "Pintar jaga suasana", "Konsisten", "Pendengar setia"],
		challenges: ["Kadang terlalu ngikut aja", "Suka menghindari konflik penting", "Terlalu santai sampai nggak ambil sikap", "Kurang suka perubahan mendadak", "Suka nunda-nunda"],
	},
	sanguine: {
		title: "Sanguinis",
		description: "Kamu itu si happy virus! Selalu rame, ceria, dan gampang bikin orang ketawa. Gampang akrab sama siapa aja, dan kayaknya selalu punya cerita seru buat dibagi. Kamu suka banget keramaian, dan biasanya jadi pusat perhatian. Hidup kamu penuh warna, dan kamu tuh jagonya bikin suasana jadi lebih hidup. Kamu juga spontan dan nggak suka yang terlalu kaku.",
		strengths: ["Ceria banget", "Semangatnya nular", "Ekspresif", "Optimis", "Suka kejutan", "Orangnya asik banget"],
		challenges: ["Kadang berantakan dan lupa detail", "Susah fokus dan gampang bosen", "Suka ngomong tapi kurang dengerin", "Gampang impulsif", "Kadang pengen diperhatiin terus"],
	},
	melancholic: {
		title: "Melankolis",
		description: "Kamu tuh tipe yang mikirnya dalam dan penuh pertimbangan. Suka hal-hal yang detail dan punya makna. Perfeksionis? Iya banget. Tapi kamu juga kreatif dan punya rasa seni yang kuat. Temen-temen suka ngobrol serius sama kamu karena kamu ngerti cara dengerin dan kasih masukan yang thoughtful. Kamu suka refleksi dan mikirin hal-hal yang orang lain mungkin lewatkan.",
		strengths: ["Detail banget", "Pikirannya dalem", "Analitis", "Tertata rapi", "Kreatif", "Setia banget"],
		challenges: ["Kadang terlalu kritis, bahkan ke diri sendiri", "Suka overthinking", "Bisa pesimis kalau lagi down", "Terlalu ngincer yang sempurna", "Perasa banget, gampang baper"],
	},
	choleric: {
		title: "Koleris",
		description: "Kamu tuh pemimpin alami. Nggak suka berlama-lama, kalau bisa langsung dikerjain ya langsung aja. Kamu percaya diri, ambisius, dan punya semangat tinggi buat capai tujuan. Tantangan justru bikin kamu semangat. Kamu nggak takut ambil keputusan dan nggak suka basa-basi. Tapi di balik ketegasan kamu, kadang orang juga butuh kamu buat sedikit lebih chill.",
		strengths: ["Tegas", "Percaya diri banget", "Nggak suka nunda-nunda", "Fokus ke hasil", "Punya tekad kuat", "Mandiri"],
		challenges: ["Kadang suka dominan banget", "Nggak sabaran kalau semuanya lambat", "Kurang peka sama perasaan orang", "Suka ngotot kalau merasa benar", "Susah buat santai dan lepas kontrol"],
	},
};
