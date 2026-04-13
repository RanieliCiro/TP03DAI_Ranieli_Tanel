import dayjs from "dayjs";

function mostrarFechaHora() {
  let fecha = dayjs().format("DD/MM/YYYY");
  let hora = dayjs().format("HH:mm");

  console.log("Fecha actual:", fecha);
  console.log("Hora actual:", hora);
}