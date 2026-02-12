function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();

  if (!name || !phone || !city) {
    alert("Please fill all details");
    return;
  }

  const whatsappNumber = "919105016695"; // apna WhatsApp number (country code ke saath)

  const message = `🌱 New Solar Quote Request 🌱

Name: ${name}
Mobile: ${phone}
City: ${city}

⚡ Switch On the Future
Luminorr Energy`;

  const url =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
