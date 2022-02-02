import React from "react";
import { useState } from "react";

const COLORS_COLCHONETAS = ["roja", "negra", "azul", "rosa"];
const COLORS_TOBIPESAS = ["violeta", "verde"];

const NewSell = (props) => {
  const [isColchoneta, setIsColchoneta] = useState(true);

  const typeHandler = (event) => {
    setIsColchoneta(event.target.value === "colchoneta" ? true : false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSave(createItem(event.target));
  };

  const createItem = (data) => {
    return {
      type: data[0].value,
      size: data[0].value === "colchoneta" ? data[2].value : null,
      color: data[3].value,
      amount: data[1].value,
      place: data[4].value,
      date: data[5].value,
      who: data[6].value,
    };
  };

  const colors = isColchoneta ? COLORS_COLCHONETAS : COLORS_TOBIPESAS;
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="type">Tipo</label>
      <select id="type" name="type" onChange={typeHandler}>
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
        required
      ></input>
      <label htmlFor="size">Tamaño</label>
      <select id="size" name="size" disabled={!isColchoneta}>
        <option value="big">Grande</option>
        <option value="small">Chica</option>
      </select>
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
      <label htmlFor="place">Lugar</label>
      <select id="place" name="place">
        <option value="ml">Mercadolibre</option>
        <option value="fb">Marketplace</option>
      </select>
      <label htmlFor="date">Fecha</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        defaultValue={new Date().toISOString()}
        required
      ></input>
      <label htmlFor="who">Quien</label>
      <select id="who" name="who">
        <option value="ale">Ale</option>
        <option value="sergio">Pocha</option>
        <option value="sabri">Sabri</option>
        <option value="leo">Leo</option>
      </select>
      <input type="submit" value="Grabar"></input>
    </form>
  );
};

export default NewSell;
