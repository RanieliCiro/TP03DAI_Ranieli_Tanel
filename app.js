import fs from "fs";

let contenido = fs.readFileSync("productos.json", "utf-8");
let productos = JSON.parse(contenido);

console.log(productos);

function agregarProducto(nombre, precio) {
  let productos = JSON.parse(contenido);
  let nuevoProducto = { nombre: nombre, precio: precio };
  productos.push(nuevoProducto);
  let nuevoJSON = JSON.stringify(productos, null, 2);
  fs.writeFileSync("productos.json", nuevoJSON);
}

import dayjs from "dayjs";

function mostrarFechaHora() {
  let fecha = dayjs().format("DD/MM/YYYY");
  let hora = dayjs().format("HH:mm");

  console.log("Fecha actual:", fecha);
  console.log("Hora actual:", hora);
}

