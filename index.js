//1
import fs from "fs";

let contenido = fs.readFileSync("productos.json", "utf-8");
let productos = JSON.parse(contenido);

console.log(productos);

//2
import fs from "fs";

function agregarProducto(nombre, precio) {
  let contenido = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(contenido);

  let nuevoProducto = { nombre: nombre, precio: precio };
  productos.push(nuevoProducto);

  let nuevoJSON = JSON.stringify(productos, null, 2);
  fs.writeFileSync("productos.json", nuevoJSON);
}

//3
import dayjs from "dayjs";

function mostrarFechaHora() {
  let fecha = dayjs().format("DD/MM/YYYY");
  let hora = dayjs().format("HH:mm");

  console.log("Fecha actual:", fecha);
  console.log("Hora actual:", hora);
}

//4
import axios from "axios";

async function obtenerPais(nombrePais) {
  try {
    const url = "https://restcountries.com/v3.1/name/" + nombrePais;
    const response = await axios.get(url);

    const data = response.data[0];

    console.log("País:", data.name.common);
    console.log("Capital:", data.capital[0]);
    console.log("Región:", data.region);
    console.log("Población:", data.population);

  } catch (error) {
    console.log("Error al obtener el país");
  }
}

//5
import fs from "fs";

function buscarProducto(nombre) {
  let contenido = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(contenido);

  let producto = productos.find(function(p) {
    return p.nombre === nombre;
  });

  if (producto) {
    console.log("Producto encontrado");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
  } else {
    console.log("Producto no encontrado");
  }
}

//6
import fs from "fs";

function generarCSV() {
  let contenido = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(contenido);

  let csv = "nombre,precio\n";

  for (let i = 0; i < productos.length; i++) {
    csv += productos[i].nombre + "," + productos[i].precio + "\n";
  }

  fs.writeFileSync("productos.csv", csv);
}

//7
function contador() {
  let i = 1;

  let intervalo = setInterval(function () {
    console.log(i);
    i++;

    if (i > 10) {
      clearInterval(intervalo);
      console.log("Fin del contador");
    }
  }, 1000);
}

//8
function analizarTexto(texto) {
  let caracteres = texto.length;

  let palabras = texto.split(" ").length;

  let vocales = 0;
  let consonantes = 0;

  let textoLower = texto.toLowerCase();

  for (let i = 0; i < textoLower.length; i++) {
    let letra = textoLower[i];

    if ("aeiou".includes(letra)) {
      vocales++;
    } else if (letra >= "a" && letra <= "z") {
      consonantes++;
    }
  }

  return {
    caracteres: caracteres,
    palabras: palabras,
    vocales: vocales,
    consonantes: consonantes
  };
}

//9
function validarPassword(password) {
  let tieneMinimo = password.length >= 8;
  let tieneNumero = false;
  let tieneMayuscula = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= "0" && char <= "9") {
      tieneNumero = true;
    }

    if (char >= "A" && char <= "Z") {
      tieneMayuscula = true;
    }
  }

  if (tieneMinimo && tieneNumero && tieneMayuscula) {
    console.log("Password válida");
  } else {
    console.log("Password inválida");
  }
}