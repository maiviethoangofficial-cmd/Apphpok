/** * 🛡️ IT HOÀNG GITHUB - HPOK SYSTEM CORE 2026 
 * @description: Quản lý kết nối Firebase & Tiện ích dữ liệu 
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, update, onValue, push, query, limitToLast, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBD27MYenkjWOEjqj0hCisbh_61F_6bhSE",
    authDomain: "hpok-d355c.firebaseapp.com",
    databaseURL: "https://hpok-d355c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hpok-d355c"
};

// Khởi tạo thực thể
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/** * Hệ thống Tiện ích (Helper) giúp rút ngắn code ở các file HTML 
 */
const HPOK_DB = {
    // Lấy dữ liệu 1 lần
    fetch: async (path) => {
        const snap = await get(ref(db, path));
        return snap.exists() ? snap.val() : null;
    },
    // Cập nhật dữ liệu
    edit: async (path, data) => update(ref(db, path), data),
    // Lắng nghe Real-time
    watch: (path, callback) => onValue(ref(db, path), (snap) => callback(snap.val())),
    // Tạo bản ghi mới với ID tự động
    insert: async (path, data) => push(ref(db, path), { ...data, createdAt: Date.now() })
};

export { db, ref, HPOK_DB };
