const message = document.querySelector("#message");
const doll = document.querySelector("#doll");
const titlemsg = document.querySelector("#title-msg");
const paragraph = document.querySelector("#paragraph");
const btnencript = document.querySelector("#btn-encrypt");
const toastBox = document.querySelector('#toastBox');

function validMessage() {
  let patter = new RegExp(/^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s]+$/g);
  let msg = message.value;
  let match = patter.exec(msg);
  if (match == null) {
    showToast('error');
  }
  if (match !== null) {
    encrypt();
    titlemsg.textContent = "Texto encriptado con éxito";
    paragraph.textContent = "";
    doll.src = "../assets/encriptado.jpg";
    showToast('success');
  }
}
function encrypt() {
  let msg = message.value;
  let msgEncrypt = msg
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    .replaceAll("é", "énter")
    .replaceAll("í", "ímes")
    .replaceAll("á", "ái")
    .replaceAll("ó", "óber")
    .replaceAll("ú", "úfat")
    .replaceAll("E", "Enter")
    .replaceAll("I", "Imes")
    .replaceAll("A", "Ai")
    .replaceAll("O", "Ober")
    .replaceAll("U", "Ufat")
    .replaceAll("É", "Énter")
    .replaceAll("Í", "Ímes")
    .replaceAll("Á", "Ái")
    .replaceAll("Ó", "Óber")
    .replaceAll("Ú", "Úfat");
  message.value = msgEncrypt;
  hear();
}

function decrypt() {
  let msgEncrypt = message.value;
  if (msgEncrypt !== "") {
    let msg = msgEncrypt
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u")
      .replaceAll("énter", "é")
      .replaceAll("ímes", "í")
      .replaceAll("ái", "á")
      .replaceAll("óber", "ó")
      .replaceAll("úfat", "ú")
      .replaceAll("Enter", "E")
      .replaceAll("Imes", "I")
      .replaceAll("Ai", "A")
      .replaceAll("Ober", "O")
      .replaceAll("Ufat", "U")
      .replaceAll("Énter", "É")
      .replaceAll("Ímes", "Í")
      .replaceAll("Ái", "Á")
      .replaceAll("Óber", "Ó")
      .replaceAll("Úfat", "Ú");
    message.value = msg;
    titlemsg.textContent = "Texto desencriptado con éxito";
    paragraph.textContent = "";
    doll.src = "../assets/desencriptado.jpg";
    showToast('success');
    hear();
  } else {
    showToast('error');
  }
}
function hear() {
  let msgEncrypt = message.value;
  let msg = new SpeechSynthesisUtterance();
  msg.text = msgEncrypt;
  msg.lang = "es-MX";
  window.speechSynthesis.speak(msg);
}

function showToast(alert) {
  if (alert === 'error') {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ¡ERROR! No hay texto para hacer acción`
    toast.classList.add('error')
    toastBox.appendChild(toast)
    setTimeout(()=>{
      toast.remove();
    }, 6000);
  }
  if (alert === 'success') {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Éxito! acción realizada`
    toast.classList.add('success')
    toastBox.appendChild(toast)
    setTimeout(()=>{
      toast.remove();
    }, 6000);
  }
}
