hljs.highlightAll();

/* Agrego href a anchor tag para linkear a rutas*/
const rutaUsuario = document.getElementById("ruta_usuarios");
const rutaCarpetaInicio = document.getElementById("ruta_carpeta_inicio");
const rutaCarpetaAssets = document.getElementById("ruta_carpeta_assets");
const rutaCarpetaError404 = document.getElementById("ruta_carpeta_error404");
const rutaError = document.getElementById("ruta_error");

rutaUsuario.href = location.origin + "/abracadabra/usuarios";
rutaCarpetaInicio.href = location.origin + "/inicio";
rutaCarpetaAssets.href = location.origin + "/assets";
rutaCarpetaError404.href = location.origin + "/error404";
rutaError.href = location.origin + "/CualquierRuta";

for (let i = 1; i <= 5; i++) {
  document.getElementById(`ruta_juego_usuario${i}`).href =
    location.origin + `/abracadabra/juego/usuario${i}`;
}

for (let i = 1; i <= 4; i++) {
  document.getElementById(`ruta_conejo_${i}`).href =
    location.origin + `/abracadabra/conejo/${i}`;
}
