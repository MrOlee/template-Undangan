AOS.init({ duration: 1000, once: true });
const params = new URLSearchParams(window.location.search);

// Ambil Data
const p = params.get('p') || "Mempelai & Mempelai";
const wa = params.get('wa') || "628123456789";
const themeNum = parseInt(params.get('c')) || 1;

// Terapkan Data
document.querySelectorAll('.pengantin-header').forEach(el => el.innerText = p);
document.getElementById('tamu-display').innerText = params.get('to') || "Tamu Spesial";
document.getElementById('tgl-lengkap').innerText = params.get('t') || "10 Maret 2026";
document.querySelectorAll('.loc-display').forEach(el => el.innerText = params.get('l') || "Gedung Acara");
document.getElementById('bank-name').innerText = params.get('bank') || "MANDIRI";
document.getElementById('norek').innerText = params.get('Norek') || params.get('norek') || "11223344";
document.getElementById('an-bank').innerText = params.get('an') || p;

// Ganti Warna Akses (Bukan Foto)
const rotation = (themeNum - 1) * 12;
document.documentElement.style.setProperty('--gold', `hsl(${40 + rotation}, 40%, 50%)`);

// Muat Foto
const imgParam = params.get('img');
const container = document.getElementById('gallery-container');
const images = imgParam ? imgParam.split(',') : ["https://picsum.photos/400/600?random=1"];
images.forEach(src => {
    container.innerHTML += `<div class="gallery-item"><img src="${src.trim()}"></div>`;
});

function startApp() {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('bg-music').play();
    }, 1000);
}

function sendRSVP() {
    const nama = document.getElementById('rsvp-nama').value;
    const status = document.getElementById('rsvp-status').value;
    window.open(`https://wa.me/${wa}?text=Konfirmasi RSVP:%0ANama: ${nama}%0AStatus: ${status}`, '_blank');
}
