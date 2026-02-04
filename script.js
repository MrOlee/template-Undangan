AOS.init();
const params = new URLSearchParams(window.location.search);

// 1. Ambil Data URL
const p = params.get('p') || "Mempelai & Mempelai";
const wa = params.get('wa') || "628123456789";

document.querySelectorAll('.pengantin-header').forEach(el => el.innerText = p);
document.getElementById('tamu-display').innerText = params.get('to') || "Tamu Spesial";
document.getElementById('tgl-lengkap').innerText = params.get('t') || "12 . 12 . 2026";
document.querySelectorAll('.loc-display').forEach(el => el.innerText = params.get('l') || "Gedung Pernikahan");
document.getElementById('bank-name').innerText = params.get('bank') || "BANK BCA";
document.getElementById('norek').innerText = params.get('norek') || "1234567890";
document.getElementById('an-bank').innerText = params.get('an') || "Mempelai";

// 2. Tema Warna (1-30)
const c = parseInt(params.get('c')) || 1;
document.getElementById('body-theme').style.filter = `hue-rotate(${(c-1)*12}deg)`;

// 3. Galeri Foto Otomatis (Gunakan URL gambar dari link &img=url1,url2)
const imgParam = params.get('img');
const galleryContainer = document.getElementById('gallery-container');
const defaultImages = ["https://picsum.photos/400/600?random=1", "https://picsum.photos/400/600?random=2", "https://picsum.photos/400/600?random=3"];
const images = imgParam ? imgParam.split(',') : defaultImages;

images.forEach(src => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `<img src="${src.trim()}" data-aos="zoom-in">`;
    galleryContainer.appendChild(div);
});

// 4. Timer
const target = new Date("Dec 31, 2026 08:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const gap = target - now;
    document.getElementById('days').innerText = Math.floor(gap / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
}, 1000);

// 5. Functions
function startApp() {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('bg-music').play();
    }, 1000);
}

function toggleAudio() {
    const m = document.getElementById('bg-music');
    m.paused ? m.play() : m.pause();
}

function sendWish() {
    const name = document.getElementById('sender-name').value;
    const msg = document.getElementById('sender-msg').value;
    window.open(`https://wa.me/${wa}?text=Halo, saya ${name}. Mengucapkan: ${msg}`, '_blank');
}
