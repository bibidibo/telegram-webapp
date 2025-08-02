function sendToBot() {
  const tg = window.Telegram.WebApp;
  const name = document.getElementById('nameInput').value;
  tg.sendData(name);  // ارسال به ربات
}
