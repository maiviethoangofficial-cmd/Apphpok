/**
 * SLOT.JS - HPOK CASINO ENGINE
 * Quản lý danh sách game và đồng bộ số dư người dùng
 */

// 1. DANH SÁCH 16 GAME (Cập nhật i và l tại đây)
export const games = [
    { l: "mahjongways", i: "17Yeaf-mcBIaWZi2VNg6nMsdNSSdUR-0-" },
    { l: "mahjongways2", i: "1U_lNSHEtpsFRx1beq53LUzUqzYi4Nz5J" },
    { l: "treasuresofaztec", i: "10pkvs_IbdqmprzgIhRObUteHKYaRmAXb" },
    { l: "mahjongwins2", i: "1U_lNSHEtpsFRx1beq53LUzUqzYi4Nz5J" },
    { l: "wildbountyshowdown", i: "10pkvs_IbdqmprzgIhRObUteHKYaRmAXb" },
    { l: "luckyneko", i: "1L44JEYCaDpj_avYPeEok4oyFuNkDmb-Y" },
    { l: "fortunerabbit", i: "11upSq5AZD8__-dD8S9tiGJqgrEC068Zc" },
    { l: "fortunetiger", i: "1j7TU3afS_jd0ZVTKmVrFD_mbgHGomsFk" },
    { l: "caishenwins", i: "13MM0fIMqonGWX0jYKU7hXJWDnxAHW1GQ" },
    { l: "songkransplash", i: "1aB3f8qwzzJC0Z-AMpbCO06p5txSm0K-W" },
    { l: "mythicalsand", i: "1PhnzOLzPvSJTQAL_tl4kt7im9rNI9uha" },
    { l: "zeusvstyphon", i: "1BLK3DVo_a8hwDgzO6jomEz9UenLVvtlI" },
    { l: "gatesofolympus1000", i: "1hL3OEUrnOaGfMlDRJyl1G2WwXfovPL44" },
    { l: "mahjongwinsgongxifacai", i: "1FjM7jh7EJ0q2RP4jc22d8fOtJfDLDJNC" },
    { l: "supergolfdrive", i: "11rBe_tZxJaKE4NAbezeHIkQR9ogpvnB3" },
    { l: "knockoutriches", i: "1Bqxzp2n5qbj5rgvjhc0a1CUbhds1J-d8" }
];

// 2. BIẾN TOÀN CỤC CỦA HỆ THỐNG
let currentBal = 0;
const username = localStorage.getItem("username");

/**
 * Hàm khởi tạo Engine
 * @param {Object} db - Đối tượng Database từ Firebase
 * @param {Function} ref - Hàm ref từ Firebase
 * @param {Function} onValue - Hàm onValue từ Firebase
 */
export function initSlotEngine(db, ref, onValue) {
    const container = document.getElementById('gameContainer');

    // HIỂN THỊ DANH SÁCH GAME LÊN MÀN HÌNH
    if (container) {
        container.innerHTML = games.map(g => `
            <div class="game-item" onclick="play('https://nagaimam.xyz/pgsoft/${g.l}')">
                <div class="hot-tag">HOT</div>
                <img src="https://drive.google.com/thumbnail?id=${g.i}&sz=w1000" loading="lazy">
            </div>
        `).join('');
    }

    // ĐỒNG BỘ DỮ LIỆU TỪ FIREBASE
    if (username) {
        onValue(ref(db, 'users/' + username), (snap) => {
            if (snap.exists()) {
                const data = snap.val();
                currentBal = data.balance || 0;
                
                // Cập nhật text lên giao diện nếu các thẻ ID tồn tại
                const updateText = (id, val) => {
                    const el = document.getElementById(id);
                    if (el) el.innerText = val;
                };

                updateText('uName', data.fullName);
                updateText('uBalance', currentBal.toLocaleString() + " ₫");
                updateText('uID', "MÃ ID: " + (data.uid_permanent || "---"));
            }
        });
    }
}

// 3. LOGIC CHƠI GAME (Gắn vào window để gọi từ HTML)
window.play = (url) => {
    if (!username) {
        if (window.showAlert) {
            window.showAlert("Vui lòng đăng nhập để trải nghiệm!", "CẢNH BÁO");
        } else {
            alert("Vui lòng đăng nhập!");
        }
        return;
    }

    const gameArea = document.getElementById('gameArea');
    const gameFrame = document.getElementById('gameFrame');

    if (gameArea && gameFrame) {
        // Gửi kèm số dư và tên người dùng vào URL game
        gameFrame.src = `${url}?balance=${currentBal}&user=${username}`;
        gameArea.style.display = 'block';
        console.log(`Đang khởi động: ${url} | Tài khoản: ${currentBal}₫`);
    }
};

window.closeGame = () => {
    const gameArea = document.getElementById('gameArea');
    const gameFrame = document.getElementById('gameFrame');
    if (gameArea) gameArea.style.display = 'none';
    if (gameFrame) gameFrame.src = '';
};
