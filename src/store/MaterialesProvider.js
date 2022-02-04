import { useReducer } from "react";
import MaterialesContext from "./materiales-context";

const defaultMaterialesState = {
  items: [
    {
      name: "bagun",
      amount: 0,
    },
    {
      name: "polex",
      amount: 0,
    },
    {
      name: "cordura",
      amount: 0,
    },
  ],
};

const materialesReducer = (state, action) => {
  if (action.type === "CHANGE") {
    const existingMaterialIndex = state.items.findIndex(
      (item) => item.name === action.item.name
    );
    const existingMaterialItem = state.items[existingMaterialIndex];
    let updatedItems;

    if (existingMaterialItem) {
      const updatedItem = {
        ...existingMaterialItem,
        amount: existingMaterialItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingMaterialIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
    };
  }

  return defaultMaterialesState;
};

const MaterialesProvider = (props) => {
  const [materialesState, dispatchMaterialesAction] = useReducer(
    materialesReducer,
    defaultMaterialesState
  );

  const changeAmountMaterialesHandler = (item, amount) => {
    dispatchCartAction({ type: "CHANGE", item: item, amount: amount });
  };

  const materialesContext = {
    items: materialesState.items,
    changeAmount: changeAmountMaterialesHandler,
  };

  return (
    <MaterialesContext.Provider value={materialesContext}>
      {props.children}
    </MaterialesContext.Provider>
  );
};

export default MaterialesProvider;
