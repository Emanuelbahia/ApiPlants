import { useState, useEffect } from "react";

//creo una funcion para exportar y que me devuelva el ancho de la pantalla. Si quiero puedo agregar el alto tambien.
const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    //para que el listener no siga actualizando los valores en todo momento y consuma mucha memoria de la computadora,
    //quitamos el listener una vez que dejamos de usar el hook y no tenerlo siempre activo.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //el valor del ancho de la pantalla se actualiza cada vez que agrandamos la misma.
  //y usamos el useEffect para cambiar el estado y actualizar el ancho.
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return { width };
};

export default useScreenSize;
