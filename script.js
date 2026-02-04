// Ambil data dari URL
const params = new URLSearchParams(window.location.search);

// 1. Ambil Nama Pengantin (parameter 'p')
const pengantin = params.get('p') || "Romeo & Juliet";
document.getElementById('mempelai').innerText = pengantin;

// 2. Ambil Nama Tamu (parameter 'to')
const tamu = params.get('to') || "Tamu Spesial";
document.getElementById('tamu').innerText = tamu;

// 3. Ambil Tanggal (parameter 't')
const tanggal = params.get('t') || "Waktu Belum Ditentukan";
document.getElementById('tanggal').innerText = tanggal;

// 4. Ambil Lokasi (parameter 'l')
const lokasi = params.get('l') || "Lokasi Menyusul";
document.getElementById('lokasi').innerText = lokasi;

// 5. Ganti Tema Otomatis (parameter 'theme')
const tema = params.get('theme'); // gold atau floral
if (tema) {
    document.getElementById('body-theme').classList.add(tema);
}
