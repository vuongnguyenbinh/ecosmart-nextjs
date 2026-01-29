// Liên hệ - Static Landing Page
export default function LienHePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold gold-text mb-4">Liên Hệ</h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng hỗ trợ bạn
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-[var(--esg-gold)]">
              Thông Tin Liên Hệ
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Địa chỉ</h3>
                <p className="opacity-70">
                  123 Đường ABC, Quận 1<br />
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:contact@ecosmartgroup.vn"
                  className="opacity-70 hover:text-[var(--esg-gold)] transition"
                >
                  contact@ecosmartgroup.vn
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Điện thoại</h3>
                <a
                  href="tel:+84123456789"
                  className="opacity-70 hover:text-[var(--esg-gold)] transition"
                >
                  +84 123 456 789
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Giờ làm việc</h3>
                <p className="opacity-70">
                  Thứ 2 - Thứ 6: 8:00 - 17:30
                  <br />
                  Thứ 7: 8:00 - 12:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--esg-gold)] mb-8">
              Gửi Tin Nhắn
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm">Họ và tên *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-[var(--esg-gold)]/30 bg-transparent focus:border-[var(--esg-gold)] outline-none"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-[var(--esg-gold)]/30 bg-transparent focus:border-[var(--esg-gold)] outline-none"
                  placeholder="Nhập email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Số điện thoại</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-[var(--esg-gold)]/30 bg-transparent focus:border-[var(--esg-gold)] outline-none"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Nội dung *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[var(--esg-gold)]/30 bg-transparent focus:border-[var(--esg-gold)] outline-none resize-none"
                  placeholder="Nhập nội dung tin nhắn"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 border border-[var(--esg-gold)] text-[var(--esg-gold)] hover:bg-[var(--esg-gold)] hover:text-white transition"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
