function showEmail() {
    var link = "mailto:email@ejemplo.com";
    window.location.href = link;
  }

function mostrarHabilidades() {
  var elemento = document.getElementById("listaHabilidades");
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}function expandirInfo(id) {
  var elemento = document.getElementById(id);
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}
function toggleEducacion() {
  var educacion = document.getElementById("info-educacion");
  if (educacion.style.display === "none") {
    educacion.style.display = "block";
    document.getElementById("toggle-educacion").innerHTML = "Esconder Educación";
  } else {
    educacion.style.display = "none";
    document.getElementById("toggle-educacion").innerHTML = "Mostrar Educación";
  }
}