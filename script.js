// Data Jadwal Piket (Anda bisa mengganti nama-nama ini)
const schedules = {
    senin: {
        title: "Senin Ceria! 💪",
        members: ["Andi", "Budi", "Citra", "Doni"]
    },
    selasa: {
        title: "Selasa Produktif! 🚀",
        members: ["Eka", "Fani", "Galih", "Hana"]
    },
    rabu: {
        title: "Rabu Santai ☕",
        members: ["Irfan", "Joko", "Karin", "Lita"]
    },
    kamis: {
        title: "Kamis Semangat! 🔥",
        members: ["Maya", "Naufal", "Olivia", "Panca"]
    },
    jumat: {
        title: "Jumat Berkah! 🙏",
        members: ["Risa", "Satria", "Tina", "Umar"]
    }
};

const daySelect = document.getElementById('day-select');
const piketTitleElement = document.getElementById('piket-title');
const piketListElement = document.getElementById('piket-list');
const piketOutputBox = document.getElementById('piket-output');

// Fungsi untuk menampilkan jadwal berdasarkan hari
function displaySchedule(dayKey) {
    piketListElement.innerHTML = ''; // Kosongkan daftar sebelumnya
    piketOutputBox.classList.remove('loaded'); // Hapus efek loading lama

    // Kasus jika belum ada hari yang dipilih
    if (!dayKey || !schedules[dayKey]) {
        piketTitleElement.textContent = "Pilih Hari untuk Melihat Jadwal!";
        return;
    }

    const schedule = schedules[dayKey];

    // 1. Update Judul
    piketTitleElement.textContent = `Piket Hari ${schedule.title}`;

    // 2. Buat HTML untuk Daftar Piket
    let listHtml = '';
    schedule.members.forEach(member => {
        listHtml += `<li>${member}</li>`;
    });
    
    // 3. Masukkan ke elemen daftar
    piketListElement.innerHTML = listHtml;

    // 4. Tambahkan kelas 'loaded' untuk memicu animasi fade-in
    setTimeout(() => {
        piketOutputBox.classList.add('loaded');
    }, 10); // Penundaan singkat untuk memastikan transisi berjalan
}

// Tambahkan event listener saat pilihan di dropdown berubah
daySelect.addEventListener('change', (event) => {
    displaySchedule(event.target.value);
});

// Panggil sekali saat dimuat untuk inisialisasi tampilan awal
displaySchedule(daySelect.value);