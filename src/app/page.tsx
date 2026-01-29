// Homepage - Luxury Landing Page matching old/index.html
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Wallet,
  Layers,
  Users,
  ShieldCheck,
  Building,
  PenTool,
  Scale,
  FileText,
  Megaphone,
  Briefcase,
  Quote,
  Star,
} from "lucide-react";

const uspItems = [
  {
    icon: Wallet,
    title: "Chi Phí Tối Ưu",
    desc: "Giá thuê cạnh tranh nhất thị trường, cam kết tiết kiệm đến 30% chi phí vận hành cho doanh nghiệp.",
  },
  {
    icon: Layers,
    title: "Giải Pháp Trọn Gói",
    desc: "Từ không gian đến vận hành, pháp lý đến marketing - Tất cả tích hợp trong một điểm chạm duy nhất.",
  },
  {
    icon: Users,
    title: "Cộng Đồng Doanh Nghiệp",
    desc: "Kết nối với 500+ doanh nghiệp trong hệ sinh thái, mở rộng cơ hội hợp tác kinh doanh B2B.",
  },
  {
    icon: ShieldCheck,
    title: "Pháp Lý Minh Bạch",
    desc: "Hợp đồng rõ ràng, hỗ trợ toàn diện thủ tục đăng ký kinh doanh và pháp lý doanh nghiệp.",
  },
];

const services = [
  {
    icon: Building,
    title: "Cho Thuê Văn Phòng",
    desc: "Không gian làm việc linh hoạt từ 10-500m², thiết kế hiện đại, tiện nghi đầy đủ.",
  },
  {
    icon: PenTool,
    title: "Thiết Kế Nội Thất",
    desc: "Giải pháp thiết kế không gian làm việc chuyên nghiệp, tối ưu công năng sử dụng.",
  },
  {
    icon: Scale,
    title: "Tư Vấn Pháp Lý",
    desc: "Hỗ trợ thành lập doanh nghiệp, tư vấn hợp đồng và các vấn đề pháp lý kinh doanh.",
  },
  {
    icon: FileText,
    title: "Dịch Vụ Kế Toán",
    desc: "Báo cáo tài chính, kê khai thuế và quản lý sổ sách kế toán chuyên nghiệp.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Branding",
    desc: "Xây dựng thương hiệu, chiến lược marketing số và phát triển nội dung.",
  },
  {
    icon: Briefcase,
    title: "Tư Vấn Kinh Doanh",
    desc: "Chiến lược phát triển, tối ưu quy trình vận hành và nâng cao hiệu quả kinh doanh.",
  },
];

const stats = [
  { value: "50+", label: "Dự án hoàn thành" },
  { value: "500+", label: "Doanh nghiệp đối tác" },
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "98%", label: "Khách hàng hài lòng" },
];

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "CEO, Công ty ABC",
    content:
      "Eco Smart Group đã giúp chúng tôi tiết kiệm đến 40% chi phí vận hành văn phòng. Dịch vụ chuyên nghiệp và hỗ trợ tận tâm.",
    rating: 5,
  },
  {
    name: "Trần Thị B",
    role: "Founder, Startup XYZ",
    content:
      "Không gian làm việc tuyệt vời, đội ngũ hỗ trợ nhiệt tình. Rất phù hợp cho các startup muốn tập trung vào phát triển sản phẩm.",
    rating: 5,
  },
  {
    name: "Lê Văn C",
    role: "Director, Company DEF",
    content:
      "Giải pháp trọn gói từ văn phòng đến pháp lý giúp chúng tôi yên tâm kinh doanh mà không lo các vấn đề hậu cần.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 lg:pt-0 relative overflow-hidden bg-theme-primary">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[var(--esg-gold)]/30 to-transparent" />
        <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[var(--esg-gold)]/30 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[var(--esg-gold)]/30 rounded-full animate-float" />
        <div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[var(--esg-gold)]/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[var(--esg-gold)]" />
                <span className="text-[var(--esg-gold)] text-sm tracking-[0.3em] uppercase font-medium">
                  Chào mừng đến với
                </span>
              </div>

              <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
                <span className="text-theme-primary">Không Gian</span>
                <br />
                <span className="gold-text">Làm Việc</span>
                <br />
                <span className="text-theme-primary">Đẳng Cấp</span>
              </h1>

              <p className="text-theme-secondary text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
                Hệ sinh thái dịch vụ văn phòng 360° - Nơi khởi nguồn thành công
                cho doanh nghiệp của bạn với giải pháp vận hành toàn diện và tối
                ưu chi phí.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="btn-luxury btn-luxury-filled text-center"
                >
                  Đặt lịch tham quan
                </Link>
                <Link href="#services" className="btn-luxury text-center">
                  Khám phá dịch vụ
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative z-10">
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-office.jpg"
                    alt="Eco Smart Office - Văn phòng hiện đại"
                    width={600}
                    height={550}
                    className="w-full h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent" />
                </div>

                {/* Decorative Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-[var(--esg-gold)]/30 rounded-lg z-0" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-[var(--esg-gold)]/10 rounded-lg z-0" />

                {/* Floating Badge */}
                <div className="absolute bottom-8 -left-8 bg-theme-primary backdrop-blur-md border border-[var(--esg-gold)] p-6 rounded-lg shadow-2xl z-20 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--esg-gold)]/20 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[var(--esg-gold)]" />
                    </div>
                    <div>
                      <p className="text-[var(--esg-gold)] font-[var(--font-display)] text-3xl font-bold">
                        50+
                      </p>
                      <p className="text-theme-secondary text-xs uppercase tracking-wider">
                        Dự án hoàn thành
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section id="about" className="py-20 lg:py-32 bg-theme-primary relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[var(--esg-gold)] text-sm tracking-[0.3em] uppercase">
              Giá trị cốt lõi
            </span>
            <h2 className="font-[var(--font-display)] text-3xl lg:text-5xl font-semibold mt-4 mb-6">
              <span className="text-theme-primary">Tại Sao Chọn </span>
              <span className="gold-text">Eco Smart Group?</span>
            </h2>
            <div className="w-24 h-px bg-[var(--esg-gold)] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {uspItems.map((item, index) => (
              <div
                key={index}
                className="service-card p-8 rounded-lg text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--esg-gold)]/10 flex items-center justify-center group-hover:bg-[var(--esg-gold)]/20 transition-all">
                  <item.icon className="w-8 h-8 text-[var(--esg-gold)]/70 group-hover:text-[var(--esg-gold)] transition-all duration-300" />
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-theme-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-theme-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-theme-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center relative after:hidden lg:after:block after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-[60%] after:w-px after:bg-gradient-to-b after:from-transparent after:via-[var(--esg-gold)] after:to-transparent last:after:hidden"
              >
                <p className="font-[var(--font-display)] text-4xl lg:text-5xl font-bold gold-text mb-2">
                  {stat.value}
                </p>
                <p className="text-theme-secondary text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-theme-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[var(--esg-gold)] text-sm tracking-[0.3em] uppercase">
              Dịch vụ của chúng tôi
            </span>
            <h2 className="font-[var(--font-display)] text-3xl lg:text-5xl font-semibold mt-4 mb-6">
              <span className="text-theme-primary">Hệ Sinh Thái </span>
              <span className="gold-text">Dịch Vụ 360°</span>
            </h2>
            <div className="w-24 h-px bg-[var(--esg-gold)] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-8 rounded-lg group cursor-pointer"
              >
                <div className="w-14 h-14 mb-6 rounded-lg bg-[var(--esg-gold)]/10 flex items-center justify-center group-hover:bg-[var(--esg-gold)]/20 transition-all">
                  <service.icon className="w-7 h-7 text-[var(--esg-gold)]/70 group-hover:text-[var(--esg-gold)] transition-all duration-300" />
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-semibold text-theme-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-theme-secondary text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-[var(--esg-gold)] text-sm font-medium group-hover:underline">
                  Tìm hiểu thêm →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-theme-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[var(--esg-gold)] text-sm tracking-[0.3em] uppercase">
              Dự án tiêu biểu
            </span>
            <h2 className="font-[var(--font-display)] text-3xl lg:text-5xl font-semibold mt-4 mb-6">
              <span className="text-theme-primary">Công Trình </span>
              <span className="gold-text">Nổi Bật</span>
            </h2>
            <div className="w-24 h-px bg-[var(--esg-gold)] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={`/images/project-${item}.jpg`}
                  alt={`Dự án ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/95 via-[var(--bg-primary)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                  <div>
                    <h3 className="font-[var(--font-display)] text-xl font-semibold text-white mb-2">
                      Văn phòng Premium {item}
                    </h3>
                    <p className="text-white/70 text-sm">
                      Thiết kế và thi công hoàn thiện
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32 bg-theme-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[var(--esg-gold)] text-sm tracking-[0.3em] uppercase">
              Khách hàng nói gì
            </span>
            <h2 className="font-[var(--font-display)] text-3xl lg:text-5xl font-semibold mt-4 mb-6">
              <span className="text-theme-primary">Đánh Giá </span>
              <span className="gold-text">Từ Khách Hàng</span>
            </h2>
            <div className="w-24 h-px bg-[var(--esg-gold)] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card p-8 rounded-lg">
                <Quote className="w-10 h-10 text-[var(--esg-gold)]/30 mb-4" />
                <p className="text-theme-secondary leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[var(--esg-gold)] text-[var(--esg-gold)]"
                    />
                  ))}
                </div>
                <div className="border-t border-theme pt-4">
                  <p className="font-semibold text-theme-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-theme-secondary text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-theme-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[var(--esg-gold)] text-sm tracking-[0.3em] uppercase">
                Liên hệ với chúng tôi
              </span>
              <h2 className="font-[var(--font-display)] text-3xl lg:text-5xl font-semibold mt-4 mb-6">
                <span className="text-theme-primary">Bắt Đầu </span>
                <span className="gold-text">Hành Trình</span>
                <br />
                <span className="text-theme-primary">Thành Công</span>
              </h2>
              <p className="text-theme-secondary leading-relaxed mb-8">
                Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn tìm kiếm
                giải pháp không gian làm việc phù hợp nhất.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+84123456789"
                  className="btn-luxury btn-luxury-filled text-center"
                >
                  Gọi ngay: +84 123 456 789
                </Link>
              </div>
            </div>

            <div className="service-card p-8 lg:p-10 rounded-lg">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-theme-primary mb-6">
                Gửi yêu cầu tư vấn
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ và tên *"
                  className="form-input w-full rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="form-input w-full rounded-lg"
                  required
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="form-input w-full rounded-lg"
                />
                <textarea
                  placeholder="Nội dung tin nhắn *"
                  rows={4}
                  className="form-input w-full rounded-lg resize-none"
                  required
                />
                <button
                  type="submit"
                  className="btn-luxury btn-luxury-filled w-full"
                >
                  Gửi yêu cầu
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
