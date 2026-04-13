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