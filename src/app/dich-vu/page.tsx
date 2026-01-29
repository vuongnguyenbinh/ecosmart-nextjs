// Dịch vụ - Static Landing Page
import Link from "next/link";

const services = [
  {
    slug: "kinh-doanh",
    title: "Kinh Doanh",
    description:
      "Tư vấn chiến lược kinh doanh, phát triển thị trường, tối ưu hóa quy trình vận hành và nâng cao hiệu quả hoạt động.",
  },
  {
    slug: "marketing",
    title: "Marketing",
    description:
      "Xây dựng thương hiệu, chiến lược marketing số, quảng cáo trực tuyến và phát triển nội dung chất lượng.",
  },
  {
    slug: "phap-ly",
    title: "Pháp Lý",
    description:
      "Tư vấn pháp luật doanh nghiệp, soạn thảo hợp đồng, bảo vệ quyền sở hữu trí tuệ và giải quyết tranh chấp.",
  },
  {
    slug: "ke-toan",
    title: "Kế Toán",
    description:
      "Dịch vụ kế toán trọn gói, báo cáo tài chính, tư vấn thuế và hoạch định tài chính doanh nghiệp.",
  },
];

export default function DichVuPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold gold-text mb-4">Dịch Vụ</h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          Giải pháp toàn diện cho doanh nghiệp của bạn
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="p-8 border border-[var(--esg-gold)]/20 hover:border-[var(--esg-gold)] transition group"
            >
              <h2 className="text-2xl font-bold mb-4 group-hover:text-[var(--esg-gold)] transition">
                {service.title}
              </h2>
              <p className="opacity-70 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-[var(--esg-gold)]">
                Xem chi tiết →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn?</h2>
        <p className="opacity-70 mb-8 max-w-xl mx-auto">
          Liên hệ với chúng tôi để được hỗ trợ tốt nhất cho nhu cầu của doanh
          nghiệp bạn.
        </p>
        <Link
          href="/lien-he"
          className="inline-block px-8 py-3 border border-[var(--esg-gold)] text-[var(--esg-gold)] hover:bg-[var(--esg-gold)] hover:text-white transition"
        >
          Liên hệ ngay
        </Link>
      </section>
    </main>
  );
}
