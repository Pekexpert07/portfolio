// FUNCIONES
function mostrarInicio()  {
    sectionInicio.style.display = "flex";
    sectionCodigo.style.display = "none";
    sectionContacto.style.display = "none";
}
function mostrarCodigo()  {
    sectionInicio.style.display = "none";
    sectionCodigo.style.display = "flex";
    sectionContacto.style.display = "none";
}
function mostrarContacto()  {
    sectionInicio.style.display = "none";
    sectionCodigo.style.display = "none";
    sectionContacto.style.display = "flex";
}
// MAIN
inputInicio.addEventListener("click", mostrarInicio);
inputCodigo.addEventListener("click", mostrarCodigo);
inputContacto.addEventListener("click", mostrarContacto);
