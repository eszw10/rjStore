//fungsi untuk menyalin text
const copyText = async (input) => {
    let text = document.getElementById(input).innerHTML;
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      alert('teks tidak bisa disalin!')
    }
  }

//Countdown
// Waktu awal dalam detik
let totalSeconds = 15 * 60;

// Mendapatkan elemen-elemen HTML yang akan diubah
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

// Fungsi untuk memperbarui tampilan countdown
function updateCountdown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Menambahkan nol di depan jika jumlah menit atau detik kurang dari 10
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    minutesDisplay.textContent = formattedMinutes;
    secondsDisplay.textContent = formattedSeconds;

    // Mengurangi waktu satu detik
    totalSeconds--;

    // Menampilkan "Expired" ketika waktu habis
    if (totalSeconds < 0) {
        countdown.textContent = 'Expired';
        countdown.classList.add('text-red-500');
    }
}

if(countdown) {
// Memanggil fungsi updateCountdown setiap 1 detik
const countdownInterval = setInterval(updateCountdown, 1000);

// Memanggil fungsi updateCountdown untuk menginisialisasi tampilan countdown awal
updateCountdown();
}

