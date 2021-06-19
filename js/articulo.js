function inicio() {
    crearTabla()

};
const datosTabla = [
    { nombre: "ABROCHADORA DELI + BROCHE EXPLORA 2-12HJ 0220", precio: 162.55 },
    { nombre: "ABROCHADORA DELI 10-15HJ E0254", precio: 162.55 },
    { nombre: "ABROCHADORA DELI ESSENTIAL 10-15HJ E0238", precio: 183.60 },
    { nombre: "ABROCHADORA DELI MINI EXPLORA 10-15HJ E0220F", precio: 120.95 },
    { nombre: "ABROCHADORA DELI START CORTO 10-15HJ E0224", precio: 140.95 },
    { nombre: "ABROCHADORA DELI START LARGO 10-15HJ E0260", precio: 140.95 },
    { nombre: "ABROCHADORA DELI VIVID COMPAC 10-15HJ E0228", precio: 263.16 },
    { nombre: "ABROCHADORA DINAMIT  21 MEZA PINTADA STANDAR", precio: 2325.86 },
    { nombre: "ABROCHADORA DINAMIT  21 PINTADA PINZA", precio: 1365.70 },
    { nombre: "ACRILICO ACUAREL  60ML AD550 CAUDAL", precio: 55.15 },
    { nombre: "ACRILICO ACUAREL  60ML AD560 MAR DEL CARIBE", precio: 55.15 },
    { nombre: "ACRILICO ACUAREL  60ML AD570 ROJO TEJA", precio: 55.15 },
    { nombre: "ACRILICO ACUAREL  60ML AD60 CORAL", precio: 55.15 },
    { nombre: "ACRILICO ACUAREL  60ML AD690 MARRON AFRICANO", precio: 55.15 },
    { nombre: "ACRILICO ACUAREL  60ML AD90 ROJO FUEGO", precio: 55.15 },
    { nombre: "ACRILICO ACUAREL  60ML AD900 AMARILLO", precio: 55.15 },

]


datosTabla.forEach(function (articulos) {
    //creacion del div "elementos"
    const divArticulo = document.createElement("div");
    divArticulo.classList.add("elemento");

    //creacion de los elementos del div
    const imgArticulo = document.createElement("img");
    imgArticulo.src = "./img/8.jpg";
    imgArticulo.classList.add("img-fluid");

    const descrArticulo = document.createElement("p");
    descrArticulo.classList.add("texto_articulos");
    descrArticulo.textContent = articulos.nombre;
    const precioArticulo = document.createElement("p");
    precioArticulo.classList.add("texto_articulos");
    precioArticulo.textContent = articulos.precio;

    const botonArticulo = document.createElement("button");
    botonArticulo.classList.add("btn", "btn-primary");

    //asignacion de los elementos al divArticulo
    divArticulo.appendChild(imgArticulo);
    divArticulo.appendChild(descrArticulo);
    divArticulo.appendChild(precioArticulo);
    divArticulo.appendChild(botonArticulo);

    console.log(divArticulo);

    const articulo = document.querySelector(".grilla");
    articulo.appendChild(divArticulo);
})