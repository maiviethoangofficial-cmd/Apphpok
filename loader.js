/**
 * loader.js - HPOK ELITE Elegant Loading Screen
 * Created to give a premium, seamless experience like major platforms.
 */

// 1. Tự động thêm CSS cần thiết khi file JS này được load
// Bạn không cần tạo file CSS riêng nếu dùng cách này.
const injectLoaderCSS = () => {
    const css = `
        /* Khung bao phủ toàn màn hình */
        #hpok-global-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #0c0e12; /* Màu nền tối sâu, sang trọng */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 99999; /* Luôn trên cùng */
            transition: opacity 0.6s ease, visibility 0.6s;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        /* Khi loader ẩn đi */
        #hpok-global-loader.fade-out {
            opacity: 0;
            visibility: hidden;
        }

        /* Container chứa Logo và Vòng quay */
        .loader-content {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px; /* Điều chỉnh kích thước tại đây */
            height: 150px;
        }

        /* Vòng quay Neon ngoài cùng (Màu Hồng) */
        .loader-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 4px solid transparent;
            border-top-color: #FF007F; /* Màu Hồng Neon chính */
            border-bottom-color: #FF007F;
            animation: hpok-spin 1.5s linear infinite;
            filter: drop-shadow(0 0 8px #FF007F); /* Hiệu ứng tỏa sáng */
        }

        /* Vòng quay phụ bên trong (Màu Vàng Gold) */
        .loader-ring-inner {
            position: absolute;
            width: 80%;
            height: 80%;
            border-radius: 50%;
            border: 3px solid transparent;
            border-left-color: #FFD700; /* Màu Vàng Gold */
            border-right-color: #FFD700;
            animation: hpok-spin-reverse 1.2s linear infinite;
            filter: drop-shadow(0 0 5px #FFD700);
        }

        /* Logo hoặc Biểu tượng ở tâm (Dùng chữ 💎 làm ví dụ) */
        .loader-logo {
            font-size: 3rem;
            animation: hpok-pulse 2s ease-in-out infinite;
            filter: drop-shadow(0 0 10px rgba(255,255,255,0.8));
            z-index: 2;
        }

        /* Hiệu ứng hạt ánh sáng nền */
        .loader-particles {
            position: absolute;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255,0,127,0.1) 0%, rgba(0,0,0,0) 70%);
            animation: hpok-ambient 4s ease-in-out infinite;
        }

        /* --- Keyframes Animations --- */
        @keyframes hpok-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @keyframes hpok-spin-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }

        @keyframes hpok-pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes hpok-ambient {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.3); opacity: 1; }
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);
};

// 2. Tạo cấu trúc HTML cho Loader và thêm vào trang
const createLoaderHTML = () => {
    const loaderHTML = `
        <div id="hpok-global-loader">
            <div class="loader-particles"></div>
            <div class="loader-content">
                <div class="loader-ring"></div>
                <div class="loader-ring-inner"></div>
                <div class="loader-logo">💎</div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
};

// 3. Xử lý logic ẩn/hiện Loader
const HPOKLoader = {
    // Thời gian tối thiểu để loader hiển thị (tránh bị nháy quá nhanh)
    minDisplayTime: 1200, 
    startTime: null,

    init: function() {
        injectLoaderCSS();
        createLoaderHTML();
        this.startTime = Date.now();
        
        // Luôn chặn cuộn trang khi đang load
        document.body.style.overflow = 'hidden';
    },

    hide: function() {
        const loader = document.getElementById('hpok-global-loader');
        if (!loader) return;

        const currentTime = Date.now();
        const elapsedTime = currentTime - this.startTime;

        // Tính toán xem cần chờ thêm bao nhiêu lâu
        const remainingTime = Math.max(0, this.minDisplayTime - elapsedTime);

        setTimeout(() => {
            loader.classList.add('fade-out');
            
            // Mở lại cuộn trang sau khi hiệu ứng fade hoàn tất
            setTimeout(() => {
                document.body.style.overflow = '';
                // Tùy chọn: Xóa hẳn loader khỏi DOM để tối ưu
                // loader.remove();
            }, 600); // Khớp với thời gian transition CSS
        }, remainingTime);
    }
};

// 4. Khởi tạo loader ngay khi script được chạy (nhanh nhất có thể)
HPOKLoader.init();

// 5. Sự kiện khi toàn bộ trang đã load xong (Ảnh, API...)
window.addEventListener('load', () => {
    // Gọi hàm ẩn loader
    HPOKLoader.hide();
});

// (Tùy chọn) Dự phòng: Ẩn loader sau 10s nếu sự kiện 'load' không kích hoạt
setTimeout(() => HPOKLoader.hide(), 10000);
