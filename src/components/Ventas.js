import SellTable from "./SellTable";
import NewSell from "./NewSell";

const Ventas = () => {
  // Esto deberia tener:
  // Parte de Carga nueva (ir agregando)
  //    - Boton + para agregar detalle? Q se agregue solo? Boton para borrar detalle en cada uno? Usamos ID por carga o x linea?
  //    - Colchoneta: tamaño, color, cantidad, ml/fb, fecha default
  //    - Tobipesa: color, cantidad, ml/fb, fecha default
  //    - Boton GRABAR
  // Tabla con lo cargado
  //    - Q traiga de la DB loya cargado, order by fecha, con nombre del q cargo?
  //    Permitir borrar una entrada??
  return (
    <div>
      <NewSell />
      <SellTable />
    </div>
  );
};

export default Ventas;
