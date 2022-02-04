import React from "react";

const MaterialesProvider = React.createContext({
  items: [],
  changeAmount: (item, amount) => {},
});

export default MaterialesProvider;
