import fs from "fs";

function agregarProducto(nombre, precio) {
  let contenido = fs.readFileSync("productos.json", "utf-8");
  let productos = JSON.parse(contenido);

  let nuevoProducto = { nombre: nombre, precio: precio };
  productos.push(nuevoProducto);

  let nuevoJSON = JSON.stringify(productos, null, 2);
  fs.writeFileSync("productos.json", nuevoJSON);
}