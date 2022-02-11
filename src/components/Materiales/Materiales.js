import { useState, useEffect } from "react";

import NewMaterial from "./NewMaterial";
import MaterialesList from "./MaterialesList";
import ErrorModal from "../../UI/ErrorModal";

const Materiales = () => {
  const [materialesList, setMaterialesList] = useState([]);
  const [error, setError] = useState();

  useEffect(async () => {
    const response = await fetch(
      "https://fullpo-4a81e-default-rtdb.firebaseio.com/materials.json"
    );
    if (!response.ok) {
      setError({
        title: "Error en GET de Materials",
        message: "Error: " + response.status + ", " + response.statusText,
      });
      return;
    }
    const data = await response.json();

    const dataArray = [];
    for (const key in data) {
      dataArray.push({
        id: key,
        item: data[key].item,
        amount: data[key].amount,
        color: data[key].color,
      });
    }

    setMaterialesList(dataArray);
  }, []);

  const saveMaterialHandler = async (material) => {
    const materialIndex = materialesList.findIndex(
      (item) => item.item === material.item && item.color === material.color
    );
    const existingMaterialItem = materialesList[materialIndex];
    if (existingMaterialItem) {
      // Material exist.
      const updatedItem = {
        ...existingMaterialItem,
        amount: existingMaterialItem.amount + material.amount,
      };

      try {
        const response = await fetch(
          "https://fullpo-4a81e-default-rtdb.firebaseio.com/materials/" +
            updatedItem.id +
            ".json",
          {
            method: "PATCH",
            body: JSON.stringify({
              item: updatedItem.item,
              color: updatedItem.color,
              amount: updatedItem.amount,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          setError({
            title: "Error en PUT de Material",
            message: "Error: " + response.status + ", " + response.statusText,
          });
          return;
        }

        const updatedItems = [...materialesList];
        updatedItems[materialIndex] = updatedItem;
        setMaterialesList(updatedItems);
      } catch (error) {
        setError({
          title: "CATCH en PUT de Material",
          message: "Error: " + error,
        });
        return;
      }
    } else {
      // Material don't exist.
      try {
        const response = await fetch(
          "https://fullpo-4a81e-default-rtdb.firebaseio.com/materials.json",
          {
            method: "POST",
            body: JSON.stringify(material),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          setError({
            title: "Error en POST de Material",
            message: "Error: " + response.status + ", " + response.statusText,
          });
          return;
        }

        const data = await response.json();
        const newMaterial = {
          ...material,
          id: data.name,
        };
        // const materialesAux = [...materialesList];
        // materialesAux.push(material);
        // setMaterialesList(materialesAux);
        setMaterialesList((prevState) => [...prevState, newMaterial]);
      } catch (error) {
        setError({
          title: "CATCH en POST de Material",
          message: "Error: " + error,
        });
        return;
      }
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
      <NewMaterial onSave={saveMaterialHandler} />
      <MaterialesList materialesList={materialesList} />
    </div>
  );
};

export default Materiales;
