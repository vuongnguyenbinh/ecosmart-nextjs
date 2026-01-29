// Homepage - Static Landing Page
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold gold-text mb-4">ECO SMART GROUP</h1>
        <p className="text-xl opacity-70 mb-8">
          Kết Nối - Hợp Tác - Thành Công
        </p>
        <Link
          href="/lien-he"
          className="px-8 py-3 border border-[var(--esg-gold)] text-[var(--esg-gold)] hover:bg-[var(--esg-gold)] hover:text-white transition"
        >
          Liên hệ ngay
        </Link>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Dịch vụ</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["kinh-doanh", "marketing", "phap-ly", "ke-toan"].map((cat) => (
            <Link
              key={cat}
              href={`/${cat}`}
              className="p-6 border border-[var(--esg-gold)]/20 hover:border-[var(--esg-gold)] transition text-center"
            >
              <h3 className="text-lg font-semibold capitalize">
                {cat.replace("-", " ")}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
