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