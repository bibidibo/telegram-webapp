function sendData() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (!name || !phone) {
    alert("لطفاً همه فیلدها را پر کنید");
    return;
  }

  const data = JSON.stringify({ name, phone });

  const tg = window.Telegram.WebApp;
  tg.sendData(data);  // ارسال به ربات
}
