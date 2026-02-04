AOS.init({ duration: 1000, once: true });
const params = new URLSearchParams(window.location.search);

// 1. Ambil Data Dasar
const p = params.get('p') || "Ozi & Dina";
const wa = params.get('wa') || "6282175939107";
const themeNum = parseInt(params.get('c')) || 1;

document.querySelectorAll('.pengantin-header').forEach(el => el.innerText = p);
document.getElementById('tamu-display').innerText = params.get('to') || "Tamu Spesial";
document.getElementById('tgl-lengkap').innerText = params.get('t') || "10 Maret 2026";
document.querySelectorAll('.loc-display').forEach(el => el.innerText = params.get('l') || "Gedung USU");
document.getElementById('bank-name').innerText = params.get('bank') || "MANDIRI";
document.getElementById('norek').innerText = params.get('Norek') || params.get('norek') || "11223344";
document.getElementById('an-bank').innerText = params.get('an') || "Muhammad Fachrurrozi";

// 2. Logika Warna (Hanya Aksen, Tidak Merusak Foto)
const rotation = (themeNum - 1) * 12;
document.documentElement.style.setProperty('--gold', `hsl(${40 + rotation}, 50%, 45%)`);

// 3. LOGIKA FOTO (ANTI ERROR)
const imgParam = params.get('img');
const container = document.getElementById('gallery-container');

// Link Foto Cadangan Jika Link dari User Rusak/Kosong
const placeholderImg = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069";

let images = [];
if (imgParam && imgParam.includes('http')) {
    images = imgParam.split(',');
} else {
    images = [placeholderImg, placeholderImg]; // Munculkan cadangan jika kosong
}

container.innerHTML = ""; 
images.forEach(src => {
    if(src.trim() !== "") {
        container.innerHTML += `
            <div class="gallery-item" data-aos="zoom-in">
                <img src="${src.trim()}" onerror="this.src='${placeholderImg}'">
            </div>`;
    }
});

// 4. Kontrol Aplikasi
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

function sendRSVP() {
    const nama = document.getElementById('rsvp-nama').value;
    const status = document.getElementById('rsvp-status').value;
    window.open(`https://wa.me/${wa}?text=Konfirmasi RSVP:%0ANama: ${nama}%0AStatus: ${status}`, '_blank');
}
