import { useState } from "react";

const COLORS_COLCHONETAS = ["roja", "negra", "azul", "rosa"];
const COLORS_TOBIPESAS = ["violeta", "verde"];

const NewTerminada = (props) => {
  const [isColchoneta, setIsColchoneta] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSave(createItem(event.target));
    document.getElementById("quantity").value = 1;
  };

  const itemHandler = (event) => {
    setIsColchoneta(event.target.value === "colchoneta");
  };

  const createItem = (data) => {
    return {
      type: data[0].value,
      amount: +data[1].value,
      color: data[2].value,
      size: (isColchoneta) ? data[3].value : null,
    };
  };

  const colors = isColchoneta ? COLORS_COLCHONETAS : COLORS_TOBIPESAS;

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="type">Tipo</label>
      <select id="type" name="type" onChange={itemHandler}>
        <option value="colchoneta" defaultValue>
          Colchoneta
        </option>
        <option value="tobipesa">Tobipesa</option>
      </select>
      <label htmlFor="quantity">Cantidad</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="1000"
        defaultValue="1"
        required
      ></input>
      <label htmlFor="color">Color</label>
      <select id="color" name="color">
        {colors.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <label htmlFor="size">Tamaño</label>
      <select id="size" name="size" disabled={!isColchoneta}>
        <option value="grande" defaultValue>
          Grande
        </option>
        <option value="chica">Chica</option>
      </select>
      <input type="submit" value="Grabar"></input>
    </form>
  );
};

export default NewTerminada;
