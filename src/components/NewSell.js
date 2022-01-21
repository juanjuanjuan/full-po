import React from "react";
import { useState } from "react";

const COLORS_COLCHONETAS = ["roja", "negra", "azul", "rosa"];
const COLORS_TOBIPESAS = ["violeta", "verde"];

const NewSell = () => {
  const [isColchoneta, setIsColchoneta] = useState(true);
  const [date, setDate] = useState(new Date());

  const typeHandler = (event) => {
    setIsColchoneta(event.target.value === "colchoneta" ? true : false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("asdasd");
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
      <input type="datetime-local" id="date" name="date" defaultValue={new Date().toISOString()}></input>
      {/* value="2018-06-12T19:30" */}
      <input type="submit" value="Grabar"></input>
    </form>
  );
};

export default NewSell;
