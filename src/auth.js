export const usuarioAutenticado = (token) => {
    console.log(token)

  if (token !== null && token !== undefined) {
    console.log("Você tem um token");
    return true;
  } else {
    if (token === null && token === undefined) {
      console.log("vc nao tem um token");
      return false;
    }
  }
  console.log("Opa")
};
