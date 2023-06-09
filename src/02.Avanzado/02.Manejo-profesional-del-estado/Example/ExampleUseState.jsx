import React, { useEffect, useState } from "react";
import { log } from "xstate/lib/actionTypes";

const ExampleUseState = ({ nameprops }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("start");

    if (!!loading) {
      setTimeout(() => {
        console.log("codigo 1 ");
        setLoading(false);

        console.log("codigo 2 ");
      }, 3000);
    }

    console.log("end");
    return () => {};
  }, [loading]);

  console.log("=================");
  console.log(" render :");

  return (
    <div>
      <h2>Eliminar {nameprops}</h2>
      <p>por favor escribie el codigo de seguridad</p>
      {error && <p> Error : codigo incorrecto</p>}
      {loading && <p>Cargando ...</p>}
      <input type="text" placeholder="codigo de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
};

export default ExampleUseState;
