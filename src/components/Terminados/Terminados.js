import { useState, useEffect, useContext } from "react";

import NewTerminada from "./NewTerminada";
import TerminadasList from "./TerminadasList";
import ErrorModal from "../../UI/ErrorModal";
import TerminadosContext from "../../store/terminados-context";

const Terminados = () => {
  const [error, setError] = useState();

  const terminadosCtx = useContext(TerminadosContext);

  const saveTerminadaHandler = (itemTerminado) => {
    terminadosCtx.addItem(itemTerminado);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewTerminada onSave={saveTerminadaHandler} />
      <TerminadasList terminadasList={terminadosCtx.items} />
    </div>
  );
};

export default Terminados;
