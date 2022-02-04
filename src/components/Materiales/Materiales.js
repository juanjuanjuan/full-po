import { useState } from "react";

import NewMaterial from "./NewMaterial";
import MaterialesList from "./MaterialesList";

const Materiales = () => {
  const [materialesList, setMaterialesList] = useState([]);

  const saveMaterialHandler = (material) => {
    const materialIndex = materialesList.findIndex(
      (item) => item.item === material.item && item.color === material.color
    );
    const existingMaterialItem = materialesList[materialIndex];
    if (existingMaterialItem) {
      const updatedItem = {
        ...existingMaterialItem,
        amount: existingMaterialItem.amount + material.amount,
      };
      const updatedItems = [...materialesList];
      updatedItems[materialIndex] = updatedItem;
      setMaterialesList(updatedItems);
    } else {
      const materialesAux = [...materialesList];
      materialesAux.push(material);
      setMaterialesList(materialesAux);
    }
  };

  return (
    <div>
      <NewMaterial onSave={saveMaterialHandler} />
      <MaterialesList materialesList={materialesList} />
    </div>
  );
};

export default Materiales;
