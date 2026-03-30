// Cấu hình ID video YouTube từ bạn: ylh8UR9-irw
const VIDEO_ID = 'ylh8UR9-irw';

// Tự động thêm khung phát nhạc ẩn vào body
document.body.insertAdjacentHTML('beforeend', `
    <div id="youtube-audio-player" style="position:fixed; opacity:0; pointer-events:none; width:1px; height:1px;"></div>
    <div id="music-control" onclick="toggleMusic()" style="position:fixed; bottom:100px; right:20px; z-index:9999; background:rgba(0,0,0,0.6); border:1px solid #ff2d55; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; color:#ff2d55; box-shadow:0 0 10px rgba(255,45,85,0.5);">
        <i id="music-icon" class="fa-solid fa-compact-disc fa-spin"></i>
    </div>
`);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    // Lấy thời gian đã phát từ trang trước (nếu có)
    const savedTime = localStorage.getItem('music_current_time') || 0;

    player = new YT.Player('youtube-audio-player', {
        height: '0',
        width: '0',
        videoId: VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': VIDEO_ID,
            'controls': 0,
            'start': parseInt(savedTime) // Phát tiếp từ giây đã lưu
        },
        events: {
            'onReady': (event) => {
                event.target.setVolume(60);
                event.target.playVideo();
                
                // Cập nhật thời gian phát liên tục vào localStorage
                setInterval(() => {
                    if (player && player.getCurrentTime) {
                        localStorage.setItem('music_current_time', player.getCurrentTime());
                    }
                }, 1000);
            }
        }
    });
}

// Hàm bật/tắt nhạc nhanh
function toggleMusic() {
    const icon = document.getElementById('music-icon');
    if (player.getPlayerState() === 1) {
        player.pauseVideo();
        icon.classList.remove('fa-spin');
        icon.style.color = '#555';
    } else {
        player.playVideo();
        icon.classList.add('fa-spin');
        icon.style.color = '#ff2d55';
    }
}

// Kích hoạt phát nhạc khi người dùng chạm vào màn hình (lách luật trình duyệt)
document.addEventListener('click', () => {
    if (player && player.playVideo) {
        player.playVideo();
    }
}, { once: true });
