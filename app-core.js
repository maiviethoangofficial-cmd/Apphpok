/* HPOK - SYSTEM CORE RUNNER 
   Hỗ trợ vận hành hệ thống mượt mà & đồng bộ
*/

// 1. CẤU HÌNH FIREBASE (Dùng chung cho toàn hệ thống)
const firebaseConfig = {
    apiKey: "AIzaSyBD27MYenkjWOEjqj0hCisbh_61F_6bhSE",
    authDomain: "hpok-d355c.firebaseapp.com",
    databaseURL: "https://hpok-d355c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hpok-d355c"
};

// 2. TRÌNH QUẢN LÝ ĐIỀU HƯỚNG (Guard)
const protectedPages = ['home.html', 'taikhoan.html', 'naptien.html', 'ruttien.html', 'diemdanh.html', 'baomat.html'];
const currentPage = window.location.pathname.split("/").pop();

const checkAuth = () => {
    const user = localStorage.getItem("username");
    if (protectedPages.includes(currentPage) && !user) {
        window.location.href = "login.html";
    }
    if ((currentPage === "login.html" || currentPage === "register.html") && user) {
        window.location.href = "home.html";
    }
};

// 3. HIỆU ỨNG MƯỢT MÀ (Smooth Transition)
const injectCoreStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        body { opacity: 0; transition: opacity 0.5s ease; }
        body.sys-ready { opacity: 1; }
        .loading-overlay { 
            position: fixed; top:0; left:0; width:100%; height:100%; 
            background: #000; z-index: 9999; display: flex; 
            justify-content: center; align-items: center; transition: 0.5s;
        }
        .loader-spin {
            width: 40px; height: 40px; border: 3px solid #333;
            border-top: 3px solid #ff007f; border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);
};

// 4. KHỞI CHẠY HỆ THỐNG
window.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    injectCoreStyles();
    
    // Tạo hiệu ứng Loading Screen giả lập cực nhanh
    const loader = document.createElement('div');
    loader.className = 'loading-overlay';
    loader.innerHTML = '<div class="loader-spin"></div>';
    document.body.appendChild(loader);

    setTimeout(() => {
        document.body.classList.add('sys-ready');
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 300);

    // Tự động Active Menu Bar
    const navLinks = document.querySelectorAll('.nav-item, .menu-link');
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.style.color = '#ff007f';
        }
    });
});

// Xuất username để các file khác sử dụng nhanh
window.currentUser = localStorage.getItem("username");
