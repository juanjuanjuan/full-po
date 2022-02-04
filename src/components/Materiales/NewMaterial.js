import { useState } from "react";

const COLORS_BAGUN = ["roja", "negra", "azul", "rosa"];
const COLORS_CORDURA = ["violeta", "verde"];

const NewMaterial = (props) => {
  const [item, setItem] = useState("bagun");

  const submitHandler = (event) => {
    event.preventDefault();
    document.getElementById("quantity").value = 1;
    props.onSave(createItem(event.target));
  };

  const itemHandler = (event) => {
    setItem(event.target.value);
  };

  const createItem = (data) => {
    return {
      item: data[0].value,
      amount: +data[1].value,
      color: data[2].value,
    };
  };

  const colors =
    item === "bagun"
      ? COLORS_BAGUN
      : item === "cordura"
      ? COLORS_CORDURA
      : null;

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="item">Cosa</label>
      <select id="item" name="item" onChange={itemHandler}>
        <option value="bagun" defaultValue>
          Bagun
        </option>
        <option value="polex">Polex</option>
        <option value="cordura">Cordura</option>
      </select>
      <label htmlFor="quantity">Cantidad</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="1000"
        required
      ></input>
      <label htmlFor="color">Color</label>
      <select id="color" name="color" disabled={colors === null}>
        {colors !== null &&
          colors.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
      </select>
      <input type="submit" value="Grabar"></input>
    </form>
  );
};

export default NewMaterial;
