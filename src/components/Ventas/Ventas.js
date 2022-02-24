import { useState, useEffect, useContext } from "react";
import SellTable from "./SellTable";
import NewSell from "./NewSell";
import ErrorModal from "../../UI/ErrorModal";
import TerminadosContext from "../../store/terminados-context";

const Ventas = () => {
  const [sellList, setSellList] = useState([]);
  const [error, setError] = useState();
  const terminadosCtx = useContext(TerminadosContext);
  // Esto deberia tener:
  // Parte de Carga nueva (ir agregando)
  //    - Boton + para agregar detalle? Q se agregue solo? Boton para borrar detalle en cada uno? Usamos ID por carga o x linea?
  //    - Colchoneta: tamaño, color, cantidad, ml/fb, fecha default
  //    - Tobipesa: color, cantidad, ml/fb, fecha default
  //    - Boton GRABAR
  // Tabla con lo cargado
  //    - Q traiga de la DB loya cargado, order by fecha, con nombre del q cargo?
  //    Permitir borrar una entrada??

  useEffect(async () => {
    const response = await fetch(
      "https://fullpo-4a81e-default-rtdb.firebaseio.com/sells.json"
    );
    if (!response.ok) {
      setError({
        title: "Error en GET de Sells",
        message: "Error: " + response.status + ", " + response.statusText,
      });
      return;
    }
    const data = await response.json();

    const dataArray = [];
    for (const key in data) {
      dataArray.push({
        id: key,
        type: data[key].type,
        amount: data[key].amount,
        color: data[key].color,
        size: data[key].size,
        place: data[key].place,
        date: data[key].date,
        who: data[key].who,
      });
    }

    setSellList(dataArray);
  }, []);

  const saveSellHandler = async (sell) => {
    try {
      const response = await fetch(
        "https://fullpo-4a81e-default-rtdb.firebaseio.com/sells.json",
        {
          method: "POST",
          body: JSON.stringify(sell),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        setError({
          title: "Error en POST de Sells",
          message: "Error: " + response.status + ", " + response.statusText,
        });
        return;
      }

      const data = await response.json();

      const newSell = {
        ...sell,
        id: data.name,
      };
      setSellList((prevState) => [...prevState, newSell]);
      terminadosCtx.removeItems(sell);
    } catch (error) {
      setError({
        title: "CATCH en POST de Sells",
        message: "Error: " + error,
      });
      return;
    }
  };

  const deleteSellHandler = async (id) => {
    if (!window.confirm("Borrarlo?")) return;
    try {
      const response = await fetch(
        "https://fullpo-4a81e-default-rtdb.firebaseio.com/sells/" +
          id +
          ".json",
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        setError({
          title: "Error en DELETE de Sells",
          message: "Error: " + response.status + ", " + response.statusText,
        });
        return;
      }

      setSellList(
        sellList.filter((x) => {
          return x.id != id;
        })
      );
    } catch (error) {
      setError({
        title: "CATCH en DELETE de Sells",
        message: "Error: " + error,
      });
      return;
    }
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
      <NewSell onSave={saveSellHandler} />
      <SellTable sellList={sellList} onDelete={deleteSellHandler} />
    </div>
  );
};

export default Ventas;
