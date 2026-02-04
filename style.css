AOS.init({ duration: 1000, once: true });
const params = new URLSearchParams(window.location.search);

// Setup Data
const p = params.get('p') || "Mempelai & Mempelai";
const wa = params.get('wa') || "628123456789";
const theme = parseInt(params.get('c')) || 1;

document.querySelectorAll('.pengantin-header').forEach(el => el.innerText = p);
document.getElementById('tamu-display').innerText = params.get('to') || "Tamu Spesial";
document.getElementById('tgl-lengkap').innerText = params.get('t') || "Minggu, 10 Maret 2026";
document.querySelectorAll('.loc-display').forEach(el => el.innerText = params.get('l') || "Gedung Serbaguna");
document.getElementById('map-link').href = params.get('map') || "#";
document.getElementById('bank-name').innerText = params.get('bank') || "BANK BCA";
document.getElementById('norek').innerText = params.get('Norek') || params.get('norek') || "1234567890";
document.getElementById('an-bank').innerText = params.get('an') || "Mempelai";

// 30 Themes Filter
document.getElementById('body-theme').style.filter = `hue-rotate(${(theme-1)*12}deg)`;

// Load Images
const imgList = params.get('img') ? params.get('img').split(',') : ["https://picsum.photos/400/600?random=1", "https://picsum.photos/400/600?random=2"];
const container = document.getElementById('gallery-container');
imgList.forEach(src => {
    container.innerHTML += `<div class="gallery-item" data-aos="zoom-in"><img src="${src.trim()}"></div>`;
});

// App Logic
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

function copyNorek() {
    const nr = document.getElementById('norek').innerText;
    navigator.clipboard.writeText(nr);
    alert("Nomor Rekening Berhasil Disalin!");
}

function sendWish() {
    const msg = document.getElementById('sender-msg').value;
    window.open(`https://wa.me/${wa}?text=Halo, Ucapan Doa: ${msg}`, '_blank');
}

function sendRSVP() {
    const nama = document.getElementById('rsvp-nama').value;
    const status = document.getElementById('rsvp-status').value;
    window.open(`https://wa.me/${wa}?text=Konfirmasi RSVP:%0ANama: ${nama}%0AStatus: ${status}`, '_blank');
}
