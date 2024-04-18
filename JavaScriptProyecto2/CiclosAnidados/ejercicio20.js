

//cremaos la funcion flecha rush 
const rush = (x, y) => {

      // salvedad : (x) y (y) no pueden ser <= 1

      //decimos que (x) y (y) se numeros enteros y mayores a 1 
    if (Number.isInteger(x) && x > 1 && Number.isInteger(y) && y > 1) {

        // creamos las funciones y le damos un valor inicial 
      let borde = "/";
      let bordeBajo = "\\";

      //le aumentamos valores alas funciones de *
      for (let i = 2; i < x; i++) {
        borde += "*";
        bordeBajo += "*";
      }
    
      //le damos un valor a borde final 
      borde += "\\";

      console.log(`(rush ${x},${y})`)

      console.log(borde);

      //creamos los espacios entre cada borde 
      for (let i = 0; i < y - 2; i++) {
        console.log("* " + " ".repeat(x - 2) + "*");
      }
      bordeBajo += "/";
      console.log(bordeBajo);

      //mandamos un mensaje de error si el if es falso 
    } else {
      console.error("error ingrese numeros positivos y mayores que uno : ");
    }
  };
  
  //pedimos al usuario los valores 
 
  let x = 5;
  let y = 4;
  
  //llamamos la funcion
  rush(x, y);
  