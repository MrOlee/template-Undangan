const params = new URLSearchParams(window.location.search);

// 1. Ambil Data URL
const pengantin = params.get('p') || "Pria & Wanita";
const tamu = params.get('to') || "Tamu Spesial";
const tgl = params.get('t') || "12 Desember 2026";
const loc = params.get('l') || "Gedung Serbaguna";
const wa = params.get('wa') || "628123456789"; // No WA Klien

// 2. Terapkan ke HTML
document.querySelectorAll('.nama-pengantin').forEach(el => el.innerText = pengantin);
document.getElementById('tamu-buka').innerText = tamu;
document.getElementById('tgl-acara').innerText = tgl;
document.querySelectorAll('.lokasi-teks').forEach(el => el.innerText = loc);

// 3. LOGIKA 30 KONSEP WARNA (Konsep 1 - 30)
const konsep = parseInt(params.get('c')) || 1; 
const rotasiWarna = (konsep - 1) * 12; // Memutar warna dasar sebesar 12 derajat per konsep
document.getElementById('body-theme').style.filter = `hue-rotate(${rotasiWarna}deg)`;

// 4. Fungsi Mulai
function mulaiUndangan() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('musik').play();
}

// 5. Kirim WhatsApp
function kirimWA() {
    const nama = document.getElementById('input-nama').value;
    const ucapan = document.getElementById('input-ucapan').value;
    const teks = `Halo, saya ${nama}. Ingin mengucapkan: ${ucapan}`;
    const urlWA = `https://wa.me/${wa}?text=${encodeURIComponent(teks)}`;
    window.open(urlWA, '_blank');
}
