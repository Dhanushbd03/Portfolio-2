const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = sidebar.querySelector(".toggle");
const modeSwitch = sidebar.querySelector(".toggle-switch");
const modeText = sidebar.querySelector(".mode-text");
const num = body.querySelector(".whatsapp-num");
const whatsapp = body.querySelector(".whatsapp");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.textContent = "Dark Mode";
  } else {
    modeText.textContent = "Light Mode";
  }
});

whatsapp.addEventListener("click", () => {
  $(".whatsapp-num").style.display = 'none';
  setTimeout(()=>{
    $(".whatsapp-num").show();
  },2000);
});
