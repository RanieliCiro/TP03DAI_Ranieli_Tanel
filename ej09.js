function validarPassword(password) {
  let tieneMinimo = password.length >= 8;
  let tieneNumero = false;
  let tieneMayuscula = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= "0" && char <= "9") {
      tieneNumero = true;
    }

    if (char >= "A" && char <= "Z") {
      tieneMayuscula = true;
    }
  }

  if (tieneMinimo && tieneNumero && tieneMayuscula) {
    console.log("Password válida");
  } else {
    console.log("Password inválida");
  }
}