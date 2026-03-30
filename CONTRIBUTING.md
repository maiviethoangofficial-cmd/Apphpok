# 🛠 HƯỚNG DẪN CẬP NHẬT & BẢO TRÌ HỆ THỐNG HPOK

Tài liệu này cung cấp các bước kỹ thuật để bảo trì và cập nhật phiên bản ứng dụng cho hệ thống **888NOW** (iOS & Android).

---

## 1. CẬP NHẬT PHIÊN BẢN ỨNG DỤNG (APP UPGRADE)

Khi có bản cập nhật mới (Ví dụ: v16.0 -> v17.0), hãy thực hiện các bước sau:

### 🍏 Đối với hệ điều hành iOS:
1. Mở file `hpok.mobileconfig`.
2. Tìm từ khóa `<key>Version</key>` và tăng giá trị `<integer>` bên dưới lên.
3. Cập nhật thông tin hiển thị trong file `taiapp.html` tại dòng:
   ```html
   <div class="info-item"><b>2026</b><span>Phiên bản</span></div>
