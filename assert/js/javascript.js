 // Set ngày bắt đầu sự kiện
  const targetDate = new Date("2025-08-15T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      // Nếu hết thời gian thì đặt toàn bộ về 00
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị số có 2 chữ số
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
  }

  // Gọi hàm mỗi giây
  setInterval(updateCountdown, 1000);
  updateCountdown(); // gọi 1 lần khi load


document.getElementById("copyBtn").addEventListener("click", function () {
    const text = document.getElementById("qr_thanh_toan").innerText;
    const icon = document.getElementById("copyIcon");

    navigator.clipboard.writeText(text).then(() => {
        icon.classList.remove("fa-copy");
        icon.classList.add("fa-check");

        setTimeout(() => {
            icon.classList.remove("fa-check");
            icon.classList.add("fa-copy");
        }, 1500);
    });
});


