const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");


abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  cerrar.style.display = "block"; // mostrar ✖
  cerrar.style.backgroundColor = "transparent"; // quitar fondo
  cerrar.style.color = "white";
  cerrar.style.position = "relative";
  // cerrar.style.top = "1.75rem";
  cerrar.style.right = "-95px"; // cambiar
  abrir.style.display = "none"; // ocultar ☰
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  cerrar.style.display = "none"; // ocultar ✖
  abrir.style.display = "block"; // mostrar ☰
});
