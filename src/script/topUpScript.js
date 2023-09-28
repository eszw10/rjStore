//notifikasi
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('fade-in');
    notification.classList.remove('hidden');
    notification.classList.add('md:flex');
    // Menghilangkan notifikasi setelah beberapa detik (misalnya, 5 detik)
    setTimeout(() => {
        notification.classList.add('hidden');
        notification.classList.remove('fade-in');
    }, 5000); // Menghilangkan notifikasi setelah 5 detik
  }
  
  // Memanggil fungsi showNotification setiap 10 detik
  setInterval(showNotification, 7000); 