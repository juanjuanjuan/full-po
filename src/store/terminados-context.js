import React, { useState, useEffect } from "react";

const TerminadosContext = React.createContext({
  items: [],
  addItem: (item) => {},
  addAllItems: (items) => {},
});

const defaultTerminadosState = {
  items: [],
};

export const TerminadosContextProvider = (props) => {
  const [terminadasList, setTerminadasList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas.json"
      );
      if (!response.ok) {
        // setError({
        //   title: "Error en GET de Terminadas",
        //   message: "Error: " + response.status + ", " + response.statusText,
        // });
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
        });
      }
      setTerminadasList(dataArray);
    };
    fetchData();
  }, []);

  const addItemHandler = async (itemTerminado) => {
    // Check item existance
    const itemIndex = terminadasList.findIndex(
      (item) =>
        item.type === itemTerminado.type &&
        item.color === itemTerminado.color &&
        (itemTerminado.type === "colchoneta"
          ? item.size === itemTerminado.size
          : true)
    );
    const existingItem = terminadasList[itemIndex];

    if (!existingItem) {
      // If item is new
      const response = await fetch(
        "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas.json",
        {
          method: "POST",
          body: JSON.stringify(itemTerminado),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        // setError({
        //   title: "Error en POST de Terminadas",
        //   message: "Error: " + response.status + ", " + response.statusText,
        // });
        return;
      }
      const data = await response.json();
      const newItem = {
        ...itemTerminado,
        id: data.name,
      };
      setTerminadasList((prevState) => [...prevState, newItem]);
    } else {
      // If item exist
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + itemTerminado.amount,
      };
      const response = await fetch(
        "https://fullpo-4a81e-default-rtdb.firebaseio.com/terminadas/" +
          updatedItem.id +
          ".json",
        {
          method: "PATCH",
          body: JSON.stringify({
            type: updatedItem.type,
            color: updatedItem.color,
            amount: updatedItem.amount,
            size: updatedItem.size,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        // setError({
        //   title: "Error en PUT de Terminadas",
        //   message: "Error: " + response.status + ", " + response.statusText,
        // });
        return;
      }

      const updatedItems = [...terminadasList];
      updatedItems[itemIndex] = updatedItem;
      setTerminadasList(updatedItems);
    }
  };

  return (
    <TerminadosContext.Provider
      value={{
        items: terminadasList,
        addItem: addItemHandler,
      }}
    >
      {props.children}
    </TerminadosContext.Provider>
  );
};

export default TerminadosContext;
