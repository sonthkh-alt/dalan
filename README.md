# Gửi những người phụ nữ của gia đình · 20/10

Trang quà tặng tương tác nhân ngày Phụ nữ Việt Nam, từ những người đàn ông trong gia đình Dạ Lan (Thanh Hóa)
gửi tới bà Trịnh Thị Loan, chị Nguyễn Thị Hồng Liên và mợ Bảo Anh.

## Link gửi riêng từng người

| Người nhận | Link |
|---|---|
| Bà / mẹ Trịnh Thị Loan | `https://sonthkh-alt.github.io/dalan/?co=loan` |
| Vợ / mẹ Nguyễn Thị Hồng Liên | `https://sonthkh-alt.github.io/dalan/?co=lien` |
| Mợ Bảo Anh | `https://sonthkh-alt.github.io/dalan/?co=baoanh` |

Không có `?co=` thì trang hiện màn hình chọn người nhận.

## Sửa nội dung

Toàn bộ lời thư, lưu bút, thẻ tri ân, lời chúc, chữ ký… nằm trong `RECIPIENTS` ở đầu file `app.js`.
Muốn thêm tên người gửi (ví dụ tên các con, các cháu) chỉ cần sửa các mảng `signers`, `voices`, `closingSignatures`.

## Chạy thử trên máy

Mở `index.html` bằng trình duyệt là được (không cần cài gì). Trang được deploy tự động lên GitHub Pages
qua workflow `.github/workflows/pages.yml` mỗi khi push lên nhánh `main`.

## Ảnh và nhạc

- Ảnh trong khung tròn (trang chào và trang mở đầu) được căn chính giữa bằng `object-position`. Với ảnh dọc quá dài
  (bị cắt bớt trên/dưới), đặt điểm lấy nét riêng qua trường `focus` của `photo` trong `RECIPIENTS`
  (ví dụ `'50% 20%'` để giữ khuôn mặt ở phía trên ảnh).
- Nhạc nền là bản bolero trữ tình tự soạn theo hướng nhạc Lệ Quyên (giọng La thứ, ~60 BPM, guitar đệm điệu bolero,
  tiếng dẫn có rung và luyến), tạo bằng Web Audio trong `makeMusic()` ở `app.js`, không cần file nhạc.
