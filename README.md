# 💎 HPOK ELITE - IOS & ANDROID DEPLOYMENT SYSTEM 💎

![Version](https://img.shields.io/badge/Version-16.0_PRO-ff007f?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-00d2ff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Stable-00ff88?style=for-the-badge)
![Developer](https://img.shields.io/badge/Developer-Mai%20Viet%20Hoang-gold?style=for-the-badge)

---

## 📖 TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)
Hệ thống **HPOK** là giải pháp phân phối ứng dụng di động (Mobile App Distribution) độc lập, tối ưu hóa cho khu vực Hải Phòng. Dự án sử dụng công nghệ **Web Clip Profile** (iOS) và **APK Distribution** (Android) giúp người dùng cài đặt ứng dụng trực tiếp từ trình duyệt mà không cần qua App Store hay Google Play.

### 🎯 Mục tiêu cốt lõi:
* **Tối ưu UI/UX:** Giao diện Cyberpunk Luxury (Đỏ & Vàng), thiết kế tràn viền sát mép (full-width) chuẩn Mobile 9:16.
* **Độ tin cậy:** Giả lập chứng chỉ **Apple Development** chuyên nghiệp (HPOK / Mai Viet Hoang).
* **Tính bền vững:** Giải pháp Anti-Revoke giúp ứng dụng không bao giờ bị Apple thu hồi chứng chỉ.

---

## 🏗 CẤU TRÚC HỆ THỐNG (ARCHITECTURE)

| Thành phần | Tên File | Chức năng chính |
| :--- | :--- | :--- |
| **Gateway** | `index.html` | Tự động nhận diện thiết bị (iPhone/Android) để điều hướng thông minh. |
| **Landing Page** | `taiapp.html` | Trang giới thiệu thông số App (Rating, Size) và lựa chọn hệ điều hành. |
| **iOS Engine** | `tai-ios.html` | Chạy tiến trình ký chứng chỉ Apple Development & hướng dẫn cài đặt Profile. |
| **Android Engine** | `tai-android.html` | Cung cấp link tải APK trực tiếp với quy trình quét bảo mật giả lập. |
| **Core Profile** | `hpok.mobileconfig` | Tệp cấu hình XML định danh (Mã nguồn trái tim của hệ thống iOS). |

---

## 🛠 HƯỚNG DẪN CÀI ĐẶT CHI TIẾT (INSTALLATION)

### 1. Cấu hình định danh nhà phát triển
Mở file `hpok.mobileconfig` và cập nhật các dòng sau để cá nhân hóa thương hiệu:
* `<string>MAI VIET HOANG</string>`: Tên tổ chức hiển thị trong Cài đặt.
* `<string>Maiviethoangofficial@gmail.com</string>`: Email nhà phát triển hiển thị trên iPhone.

### 2. Triển khai lên GitHub Pages
1. Đẩy toàn bộ mã nguồn lên Repository `HPOK`.
2. Truy cập **Settings** > **Pages**.
3. Tại mục **Build and deployment**, chọn **Branch: main** -> **Save**.
4. Chờ 1-2 phút để hệ thống kích hoạt đường dẫn HTTPS bảo mật.

---

## 📱 QUY TRÌNH DÀNH CHO NGƯỜI DÙNG (USER FLOW)

### 🍏 Quy trình iPhone (iOS):
1. Truy cập link hệ thống -> Tự động chuyển sang giao diện Hồng Luxury.
2. Nhấn **Cài đặt** -> Hệ thống chạy thanh tiến trình % ký chứng chỉ.
3. Khi thông báo hiện ra: Chọn **Cho phép (Allow)** để tải Profile.
4. Mở **Cài đặt (Settings)** -> **Đã tải về hồ sơ (Profile Downloaded)**.
5. Nhấn **Cài đặt** ở góc trên cùng bên phải -> Nhập mật khẩu máy -> Hoàn tất.
6. Icon **HPOK Elite** xuất hiện trên màn hình chính với giao diện Full Screen.

### 🤖 Quy trình Android:
1. Hệ thống chuyển sang giao diện Xanh Tech.
2. Nhấn **Tải APK** -> Xác nhận tải tệp về máy.
3. Nếu bị chặn cài đặt: Vào **Cài đặt** -> **Bảo mật** -> Bật **Cài đặt ứng dụng không rõ nguồn gốc** cho Chrome.
4. Nhấn **Cài đặt** để hoàn tất quá trình.

---

## 🛡 TÍNH BẢO MẬT & TỐI ƯU (SECURITY)
* **SSL/TLS:** Hoạt động bắt buộc trên HTTPS để đảm bảo tính xác thực của Profile.
* **Zero-Revoke:** Không sử dụng Enterprise Certificate kém ổn định, thay bằng Web Clip Profile tồn tại vĩnh viễn.
* **Icon Base64:** Hình ảnh logo được nhúng trực tiếp vào mã nguồn, đảm bảo hiển thị ngay cả khi offline.

---

## 👨‍💻 THÔNG TIN TÁC GIẢ (DEVELOPER INFO)
* **Developer:** **Mai Việt Hoàng**
* **Chuyên môn:** Full-stack Developer (Google Apps Script, Web Design, UI/UX Mobile).
* **Email:** [Maiviethoangofficial@gmail.com](mailto:Maiviethoangofficial@gmail.com)
* **GitHub:** [https://github.com/maiviethoangofficial-cmd](https://github.com/maiviethoangofficial-cmd)

---
> **Lưu ý:** Dự án này được phát triển cho mục đích quản lý ứng dụng nội bộ HPOK. Vui lòng sử dụng đúng mục đích và tuân thủ các chính sách bảo mật của Apple và Google.

*Copyright © 2026 HPOK System. All rights reserved.*
