//1
import fs from "fs";

let contenido = fs.readFileSync("productos.json", "utf-8");
let productos = JSON.parse(contenido);

console.log(productos);

//2
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

// 4
import axios from "axios";

const obtenerPais = async (nombrePais) => {
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;
    const response = await axios.get(url);

    const data = response.data[0];

    console.log("País:", data.name.common);
    console.log("Capital:", data.capital[0]);
    console.log("Región:", data.region);
    console.log("Población:", data.population);
};

//5
import fs from "fs";

function buscarProducto(nombre) {
  let contenido = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(contenido);

  let producto = productos.find(function(p) {return p.nombre === nombre;});

  if (producto) {
    console.log("Producto encontrado");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
  } else {
    console.log("Producto no encontrado");
  }
}

// 6
const generarCSV = () => {
  const data = fs.readFileSync("productos.json", "utf-8");
  const productos = JSON.parse(data);

  let csv = "nombre,precio\n";

  productos.forEach(p => {
    csv += `${p.nombre},${p.precio}\n`;
  });

  fs.writeFileSync("productos.csv", csv);

  console.log("Archivo productos.csv generado");
};