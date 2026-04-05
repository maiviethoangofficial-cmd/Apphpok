/**
 * auto-handler.js - Hệ thống xử lý tự động HPOK ELITE
 * Tối ưu cho iPhone 8 Plus & iSH Shell
 */

const HPOK_AUTO = {
    config: {
        updateInterval: 30000, // 30 giây cập nhật 1 lần
        idleTimeout: 300000,   // 5 phút treo máy
        apiURL: "https://your-firebase-link.com" 
    },

    // 1. Tự động kiểm tra thiết bị để cung cấp file cài đặt chuẩn
    autoDetectDevice: function() {
        const ua = navigator.userAgent;
        if (/iPhone|iPad|iPod/.test(ua)) {
            console.log("Device: iOS detected");
            return "ios";
        } else if (/Android/.test(ua)) {
            console.log("Device: Android detected");
            return "android";
        }
        return "web";
    },

    // 2. Tự động cập nhật số dư từ Firebase (Real-time)
    syncBalance: function() {
        setInterval(() => {
            // Giả sử bạn dùng Firebase hoặc API
            console.log("Auto-syncing balance...");
            // Code fetch data của bạn sẽ đặt ở đây
            // fetch(this.config.apiURL + '/getBalance').then(...)
        }, this.config.updateInterval);
    },

    // 3. Tự động xử lý khi người dùng treo máy (Tiết kiệm tài nguyên)
    idleHandler: function() {
        let time;
        const resetTimer = () => {
            clearTimeout(time);
            time = setTimeout(() => {
                alert("Phiên làm việc đã hết hạn do bạn không hoạt động!");
                window.location.href = 'index.html';
            }, this.config.idleTimeout);
        };
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
    },

    // 4. Tự động tối ưu giao diện theo màn hình (Fix lỗi iPhone 8 Plus)
    autoResponsive: function() {
        const height = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
    },

    init: function() {
        this.autoDetectDevice();
        this.syncBalance();
        this.idleHandler();
        this.autoResponsive();
        console.log("🚀 HPOK Auto-Handler v16.0 PRO đã sẵn sàng!");
    }
};

// Khởi chạy hệ thống tự động
document.addEventListener('DOMContentLoaded', () => HPOK_AUTO.init());
