// Giới thiệu - Static Landing Page
export default function GioiThieuPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold gold-text mb-4">Giới Thiệu</h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto">
          ECO SMART GROUP - Đối tác tin cậy trong hành trình phát triển doanh
          nghiệp của bạn
        </p>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[var(--esg-gold)]">
              Về Chúng Tôi
            </h2>
            <p className="opacity-80 leading-relaxed">
              ECO SMART GROUP được thành lập với sứ mệnh hỗ trợ doanh nghiệp
              Việt Nam phát triển bền vững. Chúng tôi cung cấp giải pháp toàn
              diện trong các lĩnh vực Kinh doanh, Marketing, Pháp lý và Kế toán.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[var(--esg-gold)]">
              Tầm Nhìn
            </h2>
            <p className="opacity-80 leading-relaxed">
              Trở thành đối tác chiến lược hàng đầu, đồng hành cùng doanh nghiệp
              Việt Nam trong hành trình chuyển đổi số và phát triển bền vững.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[var(--esg-gold)]">
              Sứ Mệnh
            </h2>
            <p className="opacity-80 leading-relaxed">
              Kết nối - Hợp tác - Thành công. Chúng tôi cam kết mang đến những
              giải pháp tối ưu, giúp doanh nghiệp tiết kiệm thời gian và nguồn
              lực, tập trung vào hoạt động kinh doanh cốt lõi.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[var(--esg-gold)]">
              Giá Trị Cốt Lõi
            </h2>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-start gap-3">
                <span className="text-[var(--esg-gold)]">•</span>
                <span>
                  <strong>Chuyên nghiệp:</strong> Đội ngũ chuyên gia giàu kinh
                  nghiệm
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--esg-gold)]">•</span>
                <span>
                  <strong>Tận tâm:</strong> Luôn đặt lợi ích khách hàng lên hàng
                  đầu
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--esg-gold)]">•</span>
                <span>
                  <strong>Sáng tạo:</strong> Không ngừng đổi mới và cải tiến
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--esg-gold)]">•</span>
                <span>
                  <strong>Bền vững:</strong> Hướng tới phát triển lâu dài và ổn
                  định
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
