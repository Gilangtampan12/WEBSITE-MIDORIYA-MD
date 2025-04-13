function showInfo() {
  // Ganti dengan link saluran WA kamu
  const channelLink = "https://whatsapp.com/channel/0029VafmFFfDuMRoBswnBz06";
  window.open(channelLink, "_blank");
}

function getScript() {
  alert("Mengalihkan ke WhatsApp untuk mendapatkan script...");
  // Ganti nomor & teks sesuai keinginan
  const waNumber = "6288973461209";
  const waMessage = "Halo saya ingin membeli script Midoriya-MD";
  const encodedMessage = encodeURIComponent(waMessage);
  const waLink = `https://wa.me/${waNumber}?text=${encodedMessage}`;
  window.open(waLink, "_blank");
}

const searchInput = document.getElementById("searchInput");
const contentCard = document.getElementById("contentCard");

searchInput.addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const textContent = contentCard.textContent.toLowerCase();
  
  if (!keyword || textContent.includes(keyword)) {
    contentCard.style.display = "block";
  } else {
    contentCard.style.display = "none";
  }
});
