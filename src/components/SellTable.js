const DUMMY_INFO = [
  {
    id: 1,
    size: "grande",
    color: "roja",
    amount: 3,
    place: "ml",
    date: new Date(),
    who: "pepe",
  },
  {
    id: 2,
    size: "grande",
    color: "negra",
    amount: 1,
    place: "ml",
    date: new Date(),
    who: "Joerge",
  },
  {
    id: 3,
    size: "chica",
    color: "azul",
    amount: 2,
    place: "fb",
    date: new Date(),
    who: "CHano",
  },
];

const SellTable = () => {
  const sells = DUMMY_INFO;

  return (
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Cantidad</th>
          <th>Tamaño</th>
          <th>Color</th>
          <th>Donde</th>
          <th>Cuando</th>
          <th>Quien</th>
        </tr>
      </thead>
      <tbody>
        {DUMMY_INFO.map((item) => {
          return (
            <tr key={item.id}>
              <td>Colchoneta</td>
              <td>{item.amount}</td>
              <td>{item.size}</td>
              <td>{item.color}</td>
              <td>{item.place === "ml" ? "Mercadolibre" : "Marketplace"}</td>
              <td>{item.date.toLocaleString()}</td>
              <td>{item.who}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SellTable;
