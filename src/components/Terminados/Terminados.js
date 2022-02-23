import { useState, useEffect, useContext } from "react";

import NewTerminada from "./NewTerminada";
import TerminadasList from "./TerminadasList";
import ErrorModal from "../../UI/ErrorModal";
import TerminadosContext from "../../store/terminados-context";

// const DUMMY_TERMINADAS = [
//   {
//     id: Math.random(),
//     type: "colchoneta",
//     amount: 2,
//     color: "roja",
//     size: "grande",
//   },
//   {
//     id: Math.random(),
//     type: "colchoneta",
//     amount: 4,
//     color: "roja",
//     size: "chicas",
//   },
//   {
//     id: Math.random(),
//     type: "colchoneta",
//     amount: 5,
//     color: "verdes",
//     size: "chicas",
//   },
//   {
//     id: Math.random(),
//     type: "tobipesa",
//     amount: 1,
//     color: "negra",
//     size: "",
//   },
// ];

const Terminados = () => {
  // const [terminadasList, setTerminadasList] = useState([]);
  const [error, setError] = useState();

  const terminadosCtx = useContext(TerminadosContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas.json"
  //     );
  //     if (!response.ok) {
  //       setError({
  //         title: "Error en GET de Terminadas",
  //         message: "Error: " + response.status + ", " + response.statusText,
  //       });
  //       return;
  //     }
  //     const data = await response.json();

  //     const dataArray = [];
  //     for (const key in data) {
  //       dataArray.push({
  //         id: key,
  //         type: data[key].type,
  //         amount: data[key].amount,
  //         color: data[key].color,
  //         size: data[key].size,
  //       });
  //     }
  //     terminadosCtx.addAllItems(dataArray);
  //   };
  //   fetchData();
  // }, [terminadosCtx]);

  const saveTerminadaHandler = (itemTerminado) => {
    terminadosCtx.addItem(itemTerminado);
    // const itemIndex = terminadosCtx.items.findIndex(
    //   (item) =>
    //     item.type === itemTerminado.type &&
    //     item.color === itemTerminado.color &&
    //     (itemTerminado.type === "colchoneta"
    //       ? item.size === itemTerminado.size
    //       : true)
    // );

    // const existingItem = terminadosCtx.items[itemIndex];
    // if (!existingItem) {
    //   try {
    //     const response = await fetch(
    //       "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas.json",
    //       {
    //         method: "POST",
    //         body: JSON.stringify(itemTerminado),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (!response.ok) {
    //       setError({
    //         title: "Error en POST de Terminadas",
    //         message: "Error: " + response.status + ", " + response.statusText,
    //       });
    //       return;
    //     }

    //     const data = await response.json();
    //     const newItem = {
    //       ...itemTerminado,
    //       id: data.name,
    //     };
    //     terminadosCtx.addItem(newItem);
    //   } catch (error) {
    //     setError({
    //       title: "CATCH en POST de Terminadas",
    //       message: "Error: " + error,
    //     });
    //     return;
    //   }
    // } else {
    //   const updatedItem = {
    //     ...existingItem,
    //     amount: existingItem.amount + itemTerminado.amount,
    //   };

    //   try {
    //     const response = await fetch(
    //       "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas/" +
    //         updatedItem.id +
    //         ".json",
    //       {
    //         method: "PATCH",
    //         body: JSON.stringify({
    //           type: updatedItem.type,
    //           color: updatedItem.color,
    //           amount: updatedItem.amount,
    //           size: updatedItem.size,
    //         }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (!response.ok) {
    //       setError({
    //         title: "Error en PUT de Terminadas",
    //         message: "Error: " + response.status + ", " + response.statusText,
    //       });
    //       return;
    //     }

    //     const updatedItems = [...terminadosCtx.items];
    //     updatedItems[itemIndex] = updatedItem;
    //     terminadosCtx.addAllItems(updatedItems);
    //   } catch (error) {
    //     setError({
    //       title: "CATCH en PUT de Terminadas",
    //       message: "Error: " + error,
    //     });
    //     return;
    //   }
    // }
  };

  // const saveTerminadaHandler = async (itemTerminado) => {
  //   const itemIndex = terminadasList.findIndex(
  //     (item) =>
  //       item.type === itemTerminado.type &&
  //       item.color === itemTerminado.color &&
  //       (itemTerminado.type === "colchoneta"
  //         ? item.size === itemTerminado.size
  //         : true)
  //   );
  //   const existingItem = terminadasList[itemIndex];
  //   if (existingItem) {
  //     // Terminadas exist.
  //     const updatedItem = {
  //       ...existingItem,
  //       amount: existingItem.amount + itemTerminado.amount,
  //     };

  //     try {
  //       const response = await fetch(
  //         "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas/" +
  //           updatedItem.id +
  //           ".json",
  //         {
  //           method: "PATCH",
  //           body: JSON.stringify({
  //             type: updatedItem.type,
  //             color: updatedItem.color,
  //             amount: updatedItem.amount,
  //             size: updatedItem.size,
  //           }),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         setError({
  //           title: "Error en PUT de Terminadas",
  //           message: "Error: " + response.status + ", " + response.statusText,
  //         });
  //         return;
  //       }

  //       const updatedItems = [...terminadasList];
  //       updatedItems[itemIndex] = updatedItem;
  //       setTerminadasList(updatedItems);
  //     } catch (error) {
  //       setError({
  //         title: "CATCH en PUT de Terminadas",
  //         message: "Error: " + error,
  //       });
  //       return;
  //     }
  //   } else {
  //     // Terminadas don't exist.
  //     try {
  //       const response = await fetch(
  //         "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas.json",
  //         {
  //           method: "POST",
  //           body: JSON.stringify(itemTerminado),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         setError({
  //           title: "Error en POST de Terminadas",
  //           message: "Error: " + response.status + ", " + response.statusText,
  //         });
  //         return;
  //       }

  //       const data = await response.json();
  //       const newItem = {
  //         ...itemTerminado,
  //         id: data.name,
  //       };
  //       setTerminadasList((prevState) => [...prevState, newItem]);
  //     } catch (error) {
  //       setError({
  //         title: "CATCH en POST de Terminadas",
  //         message: "Error: " + error,
  //       });
  //       return;
  //     }
  //   }
  // };

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
