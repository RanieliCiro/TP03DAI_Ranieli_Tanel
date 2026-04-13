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