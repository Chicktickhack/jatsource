
import React, { useState } from "react";

/* =========================================================
   DATA ARMADA
========================================================= */

const fleetData = {
  Mobil: [
    {
      name: "Avanza FC",
      price: "550 Ribu",
      priceFull: "Rp 550.000",
      image:"/jat.png",
      description:
        "Mobil keluarga ekonomis dan nyaman untuk perjalanan di Jogja.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "AC Double Blower"],
    },
    {
      name: "Avanza FWD",
      price: "700 Ribu",
      priceFull: "Rp 700.000",
      image:"/jat.png",      description:
        "MPV modern yang nyaman untuk keluarga maupun perjalanan wisata.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "AC Double Blower"],
    },
    {
      name: "All New Brio",
      price: "600 Ribu",
      priceFull: "Rp 600.000",
      image:"/jat.png",      description:
        "Mobil ringkas dan lincah untuk menjelajahi berbagai sudut Jogja.",
      specs: ["5 Kursi", "Termasuk Sopir & BBM", "AC"],
    },
    {
      name: "Mobilio",
      price: "600 Ribu",
      priceFull: "Rp 600.000",
      image:"/jat.png",      description:
        "MPV praktis dan nyaman untuk perjalanan bersama keluarga.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "AC Double Blower"],
    },
    {
      name: "Ertiga",
      price: "600 Ribu",
      priceFull: "Rp 600.000",
      image:"/jat.png",      description:
        "MPV nyaman dengan kabin lega untuk perjalanan keluarga.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "AC Double Blower"],
    },
    {
      name: "Blindvan",
      price: "600 Ribu",
      priceFull: "Rp 600.000",
      image:"/jat.png",      description:
        "Pilihan praktis untuk kebutuhan perjalanan maupun angkutan.",
      specs: ["Kabin Lega", "Termasuk Sopir & BBM", "AC"],
    },
    {
      name: "Innova Reborn",
      price: "850 Ribu",
      priceFull: "Rp 850.000",
      image:"/jat.png",      
      description:
        "Kenyamanan premium untuk perjalanan keluarga maupun bisnis.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "Kursi Kapten"],
    },
    {
      name: "Fortuner",
      price: "1,5 Juta",
      priceFull: "Rp 1.500.000",
      image:"/jat.png",     
       description:
        "SUV premium yang nyaman untuk perjalanan dalam maupun luar kota.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "AC"],
    },
    {
      name: "Pajero",
      price: "1,5 Juta",
      priceFull: "Rp 1.500.000",
      image:"/jat.png",      
      description:
        "SUV premium dengan kabin luas untuk perjalanan jauh.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "AC"],
    },
    {
      name: "Innova Zenix",
      price: "1,3 Juta",
      priceFull: "Rp 1.300.000",
      image:"/jat.png",      
      description:
        "MPV modern dengan kabin luas dan kenyamanan perjalanan.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "AC"],
    },
    {
      name: "Innova Q Hybrid",
      price: "1,8 Juta",
      priceFull: "Rp 1.800.000",
      image:"/jat.png",      
      description:
        "MPV premium dengan teknologi hybrid dan kenyamanan maksimal.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "Interior Premium"],
    },
    {
      name: "Alphard",
      price: "3,5 Juta",
      priceFull: "Rp 3.500.000",
      image:"/jat.png",      
      description:
        "Kendaraan mewah dengan kenyamanan dan privasi maksimal.",
      specs: ["7 Kursi", "Termasuk Sopir & BBM", "Interior Mewah"],
    },
  ],

  Bus: [
    {
      name: "Hiace Commuter",
      price: "1,2 Juta",
      priceFull: "Rp 1.200.000",
      image:"/jat.png",      
      description:
        "Kendaraan nyaman untuk perjalanan rombongan dengan kabin lega.",
      specs: ["14 Kursi", "Termasuk Sopir & BBM"],
    },
    {
      name: "Hiace Premio",
      price: "1,3 Juta",
      priceFull: "Rp 1.300.000",
      image:"/jat.png",      
      description:
        "Pilihan nyaman dan lega untuk perjalanan rombongan.",
      specs: ["14 Kursi", "Termasuk Sopir & BBM"],
    },
    {
      name: "Elf Short",
      price: "750 Ribu",
      priceFull: "Rp 750.000",
      image:"/jat.png",      
      description:
        "Pilihan praktis untuk perjalanan rombongan dengan kapasitas pas.",
      specs: ["10-12 Kursi", "Termasuk Sopir & BBM"],
    },
    {
      name: "Elf Long NLR",
      price: "1,3 Juta",
      priceFull: "Rp 1.300.000",
      image:"/jat.png",      
      description:
        "Kendaraan rombongan dengan kapasitas lebih besar.",
      specs: ["17-19 Kursi", "Termasuk Sopir & BBM"],
    },
    {
      name: "Medium Bus",
      price: "2 Juta",
      priceFull: "Rp 2.000.000",
      image:"/jat.png",      
      description:
        "Solusi perjalanan rombongan besar dengan kapasitas 30 orang.",
      specs: ["30 Kursi", "Termasuk Sopir & BBM"],
    },
    {
      name: "Big Bus",
      price: "3 Juta",
      priceFull: "Rp 3.000.000",
      image:"/jat.png",      
      description:
        "Pilihan untuk perjalanan rombongan besar hingga 50 orang.",
      specs: ["50 Kursi", "Termasuk Sopir & BBM"],
    },
  ],

  Motor: [
    {
      name: "Beat Street",
      price: "80 Ribu",
      priceFull: "Rp 80.000",
      image:"/jat.png",      
      description:
        "Motor ringan dan lincah untuk menjelajahi berbagai sudut Jogja.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["110 cc", "Irit Bahan Bakar", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Beat",
      price: "75 Ribu",
      priceFull: "Rp 75.000",
      image:"/jat.png",      
      description:
        "Motor ringan, irit, dan praktis untuk perjalanan harian.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["110 cc", "Irit Bahan Bakar", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Genio",
      price: "80 Ribu",
      priceFull: "Rp 80.000",
      image:"/jat.png",      
      description:
        "Skuter praktis dengan desain modern untuk mobilitas di Jogja.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["110 cc", "Irit Bahan Bakar", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Scoopy",
      price: "85 Ribu",
      priceFull: "Rp 85.000",
      image:"/jat.png",
      description:
        "Skuter bergaya retro untuk berkeliling tempat wisata.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["110 cc", "Gaya Retro", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Vario",
      price: "95 Ribu",
      priceFull: "Rp 95.000",
      image:"/jat.png",      description:
        "Skuter sporty yang nyaman untuk mobilitas harian maupun wisata.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["125 cc", "Irit Bahan Bakar", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "PCX",
      price: "130 Ribu",
      priceFull: "Rp 130.000",
      image:"/jat.png",      description:
        "Skuter premium dengan posisi berkendara nyaman untuk perjalanan jauh.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["160 cc", "Bagasi Luas", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Honda Stylo",
      price: "125 Ribu",
      priceFull: "Rp 125.000",
      image:"/jat.png",      description:
        "Skuter bergaya modern untuk menikmati perjalanan di Jogja.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["125 cc", "Tampilan Bergaya", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "CRF",
      price: "150 Ribu",
      priceFull: "Rp 150.000",
      image:"/jat.png",      description:
        "Motor bergaya petualangan untuk pengalaman berkendara yang lebih seru.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["150 cc", "Gaya Petualangan", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Fazio",
      price: "85 Ribu",
      priceFull: "Rp 85.000",
      image:"/jat.png",      description:
        "Skuter bergaya retro-modern untuk berkeliling kota.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["125 cc", "Gaya Retro", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "NMAX",
      price: "135 Ribu",
      priceFull: "Rp 135.000",
      image:"/jat.png",      description:
        "Skuter nyaman untuk perjalanan jarak jauh.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["155 cc", "Bagasi Luas", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Vetic Primavera",
      price: "165 Ribu",
      priceFull: "Rp 165.000",
      image:"/jat.png",      description:
        "Skuter premium bergaya klasik untuk berkeliling Jogja.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["150 cc", "Gaya Premium", "Gratis 2 Helm + Jas Hujan"],
    },
    {
      name: "Vetic Sprint",
      price: "175 Ribu",
      priceFull: "Rp 175.000",
      image:"/jat.png",      description:
        "Skuter premium bergaya sporty-klasik untuk perjalanan di Jogja.",
      tag: "Gratis 2 Helm & Jas Hujan",
      specs: ["150 cc", "Gaya Sporty", "Gratis 2 Helm + Jas Hujan"],
    },
  ],

  "Mobil Lepas Kunci": [
    {
      name: "Avanza FWD",
      price: "350 Ribu",
      priceFull: "Full Day Rp 350.000 / 12 Jam Rp 300.000",
      image:"/jat.png",      description:
        "Sewa tanpa sopir dengan pilihan durasi Full Day atau 12 Jam.",
      specs: ["7 Kursi", "Tanpa Sopir", "Full Day 350 Ribu", "12 Jam 300 Ribu"],
    },
    {
      name: "Avanza FC",
      price: "300 Ribu",
      priceFull: "Full Day Rp 300.000 / 12 Jam Rp 275.000",
      image:"/jat.png",      description:
        "MPV ekonomis untuk perjalanan mandiri di Jogja.",
      specs: ["7 Kursi", "Tanpa Sopir", "Full Day 300 Ribu", "12 Jam 275 Ribu"],
    },
    {
      name: "Brio",
      price: "300 Ribu",
      priceFull: "Full Day Rp 300.000 / 12 Jam Rp 250.000",
      image:"/jat.png",      description:
        "Mobil kota ringkas dan lincah untuk perjalanan mandiri.",
      specs: ["5 Kursi", "Tanpa Sopir", "Full Day 300 Ribu", "12 Jam 250 Ribu"],
    },
    {
      name: "Ertiga",
      price: "300 Ribu",
      priceFull: "Full Day Rp 300.000 / 12 Jam Rp 250.000",
      image:"/jat.png",      description:
        "MPV nyaman dan praktis untuk perjalanan bersama keluarga.",
      specs: ["7 Kursi", "Tanpa Sopir", "Full Day 300 Ribu", "12 Jam 250 Ribu"],
    },
    {
      name: "Luxio",
      price: "300 Ribu",
      priceFull: "Full Day Rp 300.000 / 12 Jam Rp 250.000",
      image:"/jat.png",      description:
        "Kabin luas untuk perjalanan keluarga maupun rombongan kecil.",
      specs: ["7 Kursi", "Tanpa Sopir", "Full Day 300 Ribu", "12 Jam 250 Ribu"],
    },
    {
      name: "Mobilio",
      price: "300 Ribu",
      priceFull: "Full Day Rp 300.000 / 12 Jam Rp 275.000",
      image:"/jat.png",      description:
        "MPV praktis dan nyaman untuk perjalanan mandiri.",
      specs: ["7 Kursi", "Tanpa Sopir", "Full Day 300 Ribu", "12 Jam 275 Ribu"],
    },
    {
      name: "Xpander",
      price: "375 Ribu",
      priceFull: "Full Day Rp 375.000 / 12 Jam Rp 325.000",
      image:"/jat.png",      description:
        "MPV modern dengan kabin luas untuk perjalanan jauh.",
      specs: ["7 Kursi", "Tanpa Sopir", "Full Day 375 Ribu", "12 Jam 325 Ribu"],
    },
    {
      name: "Jazz",
      price: "350 Ribu",
      priceFull: "Full Day Rp 350.000 / 12 Jam Rp 300.000",
      image:"/jat.png",      description:
        "Mobil ringkas dan lincah untuk berkeliling kota.",
      specs: ["5 Kursi", "Tanpa Sopir", "Full Day 350 Ribu", "12 Jam 300 Ribu"],
    },
    {
      name: "WRV",
      price: "350 Ribu",
      priceFull: "Full Day Rp 350.000 / 12 Jam Rp 300.000",
      image:"/jat.png",      description:
        "SUV ringkas modern untuk perjalanan dalam maupun luar kota.",
      specs: ["5 Kursi", "Tanpa Sopir", "Full Day 350 Ribu", "12 Jam 300 Ribu"],
    },
  ],
};

/* =========================================================
   WHATSAPP
========================================================= */

const JAT_WHATSAPP = "6281804291100";

function orderViaWhatsApp(vehicleName, packageType) {
const message = `Halo JAT Admin, saya tertarik menyewa ${vehicleName} (${packageType}).
Mohon info ketersediaan dan detail harga untuk tanggal yang saya inginkan.
Terima kasih.`;

  const whatsappURL = `https://wa.me/${JAT_WHATSAPP}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

/* =========================================================
   IKON
========================================================= */

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
      ✓
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.81c.14.18 1.91 2.92 4.63 4.09.65.28 1.15.45 1.54.57.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
      <path d="M16.02 3C8.83 3 3 8.82 3 16c0 2.29.6 4.44 1.66 6.3L3 29l6.89-1.61A12.94 12.94 0 0 0 16.02 29C23.18 29 29 23.18 29 16S23.18 3 16.02 3zm0 23.6c-2.03 0-4.01-.54-5.75-1.56l-.41-.24-4.09.96.98-3.99-.27-.42A10.96 10.96 0 1 1 16.02 26.6z" />
    </svg>
  );
}

/* =========================================================
   LOGO JAT
========================================================= */

function JATLogo({ light = false }) {
  return (
    <img
      src="/logo.png"
      alt="Joglo Auto Transport"
      className={`h-11 w-auto object-contain ${
        light ? "brightness-0 invert" : ""
      }`}
    />
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [activeTab, setActiveTab] = useState("Mobil");

  const tabs = [
    {
      id: "Mobil",
      label: "Mobil + Sopir",
      shortLabel: "Mobil",
    },
    {
      id: "Mobil Lepas Kunci",
      label: "Lepas Kunci",
      shortLabel: "Lepas Kunci",
    },
    {
      id: "Bus",
      label: "Bus",
      shortLabel: "Bus",
    },
    {
      id: "Motor",
      label: "Motor",
      shortLabel: "Motor",
    },
  ];

  const currentFleet = fleetData[activeTab];
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a
            href="#home"
            className="flex items-center text-white"
          >
            <JATLogo/>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#armada"
              className="text-sm font-semibold text-white/90 transition hover:text-white"
            >
              Pilihan Armada
            </a>

            <a
              href="#kontak"
              className="text-sm font-semibold text-white/90 transition hover:text-white"
            >
              Hubungi Kami
            </a>
          </nav>

          <button
            onClick={() =>
              orderViaWhatsApp("Armada JAT Group", "Konsultasi")
            }
            className="rounded-full bg-green-500 px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-green-900/20 transition hover:bg-green-400 active:scale-95 sm:px-5 sm:text-sm"
          >
            Konsultasi
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative min-h-[780px] overflow-visible bg-slate-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16">

            {/* KIRI */}

            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Jelajahi Jogja
                <br />

                <span className="text-sky-300">
                  dengan cara berbeda.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                Pilih mobil, bus, atau motor sesuai kebutuhanmu.
                Armada siap jalan, harga jelas, dan pemesanan langsung
                melalui WhatsApp.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  "Armada Terawat",
                  "Sopir Profesional",
                  "Harga Transparan",
                  "Layanan Fleksibel",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-md"
                  >
                    <CheckIcon />

                    <span className="text-[11px] font-bold leading-tight text-white sm:text-xs">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* KANAN */}

            <div className="relative">
              <div className="rounded-3xl bg-white p-5 shadow-2xl shadow-black/30 sm:p-6">
                <div className="mb-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-jatblue">
                        JAT Yogjakarta
                      </p>

                    
                    </div>

                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    Pilih jenis kendaraan yang ingin dicari.
                  </p>
                </div>

                {/* KATEGORI */}

                <div className="-mx-1 mb-6 overflow-x-auto px-1 pb-1">
                  <div className="flex min-w-max gap-1 rounded-xl bg-slate-100 p-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-lg px-4 py-3 text-[11px] font-bold transition ${
                          activeTab === tab.id
                            ? "bg-white text-jatblue shadow-sm"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* INFO PILIHAN */}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                        Pilihanmu
                      </p>

                      <p className="mt-1 font-extrabold text-slate-900">
                        {activeTabData?.label}
                      </p>
                    </div>


                  </div>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("armada")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-4 w-full rounded-xl bg-green-500 py-4 text-sm font-extrabold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-600 active:scale-[0.98]"
                >
                  LIHAT PILIHAN ARMADA
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400">
                  <span>✓</span>
                  Tanpa biaya pemesanan
                  <span>•</span>
                  Konsultasi via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KATALOG ARMADA
      ===================================================== */}

      <section
        id="armada"
        className="px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-jatblue">
              PILIHAN ARMADA
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Pilih kendaraanmu.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                  Temukan kendaraan yang sesuai dengan jumlah orang,
                  kebutuhan perjalanan, dan budget kamu.
                </p>
              </div>

              <div className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500 sm:block">
                {currentFleet.length} pilihan tersedia
              </div>
            </div>
          </div>

          {/* FILTER KATEGORI */}

          <div className="-mx-1 mb-8 overflow-x-auto px-1 pb-2">
            <div className="flex min-w-max gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-5 py-3 text-xs font-extrabold transition ${
                    activeTab === tab.id
                      ? "border-jatblue bg-jatblue text-white shadow-md shadow-blue-500/20"
                      : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* INFO AKTIF */}

          <div className="mb-7 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                Kategori terpilih
              </p>

              <p className="mt-1 text-sm font-extrabold text-slate-900">
                {activeTabData?.label}
              </p>
            </div>

            <p className="text-xs font-medium text-slate-500">
              Klik pesan untuk konsultasi langsung melalui WhatsApp.
            </p>
          </div>

          {/* KARTU ARMADA */}

          <div
            className={`grid gap-5 ${
              currentFleet.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {currentFleet.map((vehicle) => (
              <article
                key={vehicle.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* FOTO KENDARAAN */}

                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={vehicle.image}
                    alt={`Foto ${vehicle.name}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  {vehicle.tag && (
                    <div className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1.5 text-[10px] font-extrabold text-white shadow-lg">
                      {vehicle.tag}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-lg font-extrabold text-white drop-shadow-lg">
                      {vehicle.name}
                    </p>
                  </div>
                </div>

                {/* ISI KARTU */}

                <div className="p-5">
                  <p className="min-h-[40px] text-xs leading-5 text-slate-500">
                    {vehicle.description}
                  </p>

                  {/* SPESIFIKASI */}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {vehicle.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* HARGA */}

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    {activeTab === "Mobil Lepas Kunci" ? (
                      <div className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Harga sewa
                        </p>

                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <div className="rounded-xl bg-slate-50 p-3">
                            <p className="text-[9px] font-bold uppercase text-slate-400">
                              Full Day
                            </p>

                            <p className="mt-1 text-sm font-extrabold text-slate-900">
                              {vehicle.price}
                            </p>
                          </div>

                          <div className="rounded-xl bg-slate-50 p-3">
                            <p className="text-[9px] font-bold uppercase text-slate-400">
                              12 Jam
                            </p>

                            <p className="mt-1 text-sm font-extrabold text-slate-900">
                              {vehicle.priceFull
                                .split(" / 12 Jam ")[1]
                                ?.replace("Rp ", "")
                                .replace(".", " Ribu") || "-"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Harga mulai
                        </p>

                        <p className="mt-0.5 text-xl font-extrabold text-slate-900">
                          {vehicle.price}
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                          {vehicle.priceFull}
                        </p>
                      </div>
                    )}

                    {/* TOMBOL */}

                    <button
                      onClick={() =>
                        orderViaWhatsApp(
                          vehicle.name,
                          activeTab === "Mobil Lepas Kunci"
                            ? "Lepas Kunci"
                            : activeTab
                        )
                      }
                      className="w-full rounded-xl bg-green-500 px-4 py-3 text-xs font-extrabold text-white transition hover:bg-green-600 active:scale-[0.98]"
                    >
                      Pesan {vehicle.name}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-10 lg:px-14">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl text-white">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-300">
                  BUTUH BANTUAN?
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Bingung pilih kendaraan?
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base">
                  Ceritakan kebutuhan perjalananmu.
                  Tim JAT Group siap membantu memilihkan kendaraan
                  yang sesuai.
                </p>
              </div>

              <button
                onClick={() =>
                  orderViaWhatsApp(
                    "Armada JAT Group",
                    "Konsultasi"
                  )
                }
                className="shrink-0 rounded-xl bg-green-500 px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-green-950/30 transition hover:bg-green-400 active:scale-95"
              >
                Konsultasi via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        id="kontak"
        className="bg-white px-5 py-12 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">

            {/* MEREK */}

            <div>
              <div className="flex items-center">
                <JATLogo />
              </div>

              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
                Sewa mobil, bus, dan motor untuk kebutuhan perjalanan
                di Jogja dan sekitarnya.
              </p>
            </div>

            {/* ALAMAT */}

            <div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Garasi Jogja
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Yogyakarta, Daerah Istimewa Yogyakarta
                <br />
                Indonesia
              </p>
            </div>

            {/* KONTAK */}

            <div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Layanan
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                24 Jam / 7 Hari
              </p>

              <button
                onClick={() =>
                  orderViaWhatsApp(
                    "Armada JAT Group",
                    "Konsultasi"
                  )
                }
                className="mt-4 rounded-xl bg-green-500 px-5 py-3 text-xs font-extrabold text-white transition hover:bg-green-600"
              >
                Hubungi WhatsApp
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} JAT Group — Joglo Auto Transport.
              Seluruh hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>

      {/* =====================================================
          WHATSAPP MENGAMBANG
      ===================================================== */}

      <button
        onClick={() =>
          orderViaWhatsApp(
            "Armada JAT Group",
            "Konsultasi"
          )
        }
        aria-label="Hubungi JAT Group melalui WhatsApp"
        className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 transition duration-300 hover:scale-110 hover:bg-green-600 active:scale-95 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon />

        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-lg sm:block">
          Hubungi JAT Admin
        </span>
      </button>
    </div>
  );
}


