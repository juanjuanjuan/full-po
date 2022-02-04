const SellTable = (props) => {
  const sells = props.sellList;

  const deleteHandle = (id) => {
    props.onDelete(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Borrar</th>
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
        {sells.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <button onClick={() => deleteHandle(item.id)}>
                  <i className="fa fa-close" />
                </button>
              </td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>
                {item.size === undefined || item.size === null
                  ? "-"
                  : item.size}
              </td>
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
