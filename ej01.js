import fs from "fs";

let contenido = fs.readFileSync("productos.json", "utf-8");
let productos = JSON.parse(contenido);

console.log(productos);