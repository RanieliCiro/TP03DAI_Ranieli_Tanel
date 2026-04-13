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