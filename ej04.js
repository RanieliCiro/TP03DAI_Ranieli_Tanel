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