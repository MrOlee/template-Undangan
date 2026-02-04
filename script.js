AOS.init({ duration: 1000, once: true });
const params = new URLSearchParams(window.location.search);

// 1. DATA UTAMA
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

// 2. TEMA WARNA (Force Change)
const rotation = (themeNum - 1) * 12;
document.documentElement.style.setProperty('--gold', `hsl(${40 + rotation}, 50%, 45%)`);

// 3. FOTO GALERI (SOLUSI FINAL)
function loadPhotos() {
    const imgParam = params.get('img');
    const container = document.getElementById('gallery-container');
    
    // Hapus semua isi container (membersihkan error lama)
    container.innerHTML = ""; 

    if (imgParam) {
        const images = imgParam.split(',');
        images.forEach(src => {
            const cleanSrc = src.trim();
            if (cleanSrc.includes('http')) {
                const imgHTML = `
                    <div class="gallery-item" data-aos="zoom-in">
                        <img src="${cleanSrc}" style="width:100%; height:250px; object-fit:cover; border:5px solid #fff;">
                    </div>`;
                container.innerHTML += imgHTML;
            }
        });
    } else {
        // Jika tidak ada foto di link, tampilkan placeholder cantik agar tidak kosong
        container.innerHTML = "<p>Foto akan segera hadir</p>";
    }
}

// 4. KONTROL APLIKASI
function startApp() {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        loadPhotos(); // Panggil foto SETELAH undangan dibuka
        document.getElementById('bg-music').play();
    }, 500);
}

function sendRSVP() {
    const nama = document.getElementById('rsvp-nama').value;
    const status = document.getElementById('rsvp-status').value;
    window.open(`https://wa.me/${wa}?text=Konfirmasi RSVP:%0ANama: ${nama}%0AStatus: ${status}`, '_blank');
}
