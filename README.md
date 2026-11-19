# Website gieo quẻ Lục Hào

Website tĩnh gồm HTML, CSS và JavaScript thuần, có thể triển khai miễn phí trên GitHub Pages.

## Chức năng
- Ghi câu hỏi và chọn chủ đề.
- Lập 6 hào từ dưới lên trên; quy ước 6/7/8/9.
- Tạo quẻ chủ, quẻ biến và quẻ hỗ.
- Đánh dấu hào động, bảng sáu hào và luận giải khái quát theo chủ đề.
- Lưu tối đa 20 lần gieo trong `localStorage` của trình duyệt.
- In hoặc lưu kết quả thành PDF.

## Chạy thử
Mở `index.html` bằng trình duyệt. Kết nối Internet chỉ cần thiết nếu muốn tải phông chữ Google Fonts; website vẫn hoạt động khi không có phông.

## Đưa lên GitHub Pages
1. Đăng nhập GitHub và chọn **New repository**.
2. Đặt tên ví dụ `luc-hao`, chọn **Public**, rồi tạo repository.
3. Chọn **Add file → Upload files**, tải lên `index.html`, `style.css`, `app.js` và `README.md`.
4. Nhấn **Commit changes**.
5. Vào **Settings → Pages**.
6. Trong **Build and deployment**, chọn **Deploy from a branch**.
7. Chọn branch `main`, thư mục `/(root)`, nhấn **Save**.
8. Chờ GitHub triển khai; địa chỉ thường có dạng `https://TEN-TAI-KHOAN.github.io/luc-hao/`.

## Riêng tư
- Câu hỏi, kết quả và lịch sử được xử lý/lưu cục bộ trong trình duyệt.
- Mã nguồn hiện tại không gửi câu hỏi hay kết quả gieo quẻ tới máy chủ của chủ website.
- GitHub Pages vẫn là máy chủ lưu trữ và có thể ghi nhận các nhật ký truy cập ở cấp hạ tầng. Không nên nhập thông tin định danh hoặc bí mật.
- Lịch sử nằm trong localStorage của trình duyệt/thiết bị; xóa dữ liệu trang hoặc đổi trình duyệt có thể làm mất lịch sử.

## Giới hạn học thuật
Đây là bản nền tảng có thể chạy độc lập. Tên 64 quẻ và phép tính quẻ chủ/biến/hỗ được tích hợp; phần luận giải là gợi ý khái quát, chưa phải hệ thống Lục Hào cổ pháp hoàn chỉnh. Chưa tích hợp lịch Can Chi, tiết khí, nhật thần/nguyệt kiến, nạp Giáp, lục thân, lục thần, thế/ứng, tuần không, nguyệt phá, sinh khắc và vượng suy. Không dùng để thay thế tư vấn chuyên môn hoặc làm căn cứ duy nhất cho quyết định quan trọng.
