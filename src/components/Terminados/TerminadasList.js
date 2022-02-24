const TerminadasList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Cantidad</th>
          <th>Color</th>
          <th>Tamaño</th>
        </tr>
      </thead>
      <tbody>
        {props.terminadasList.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.color}</td>
              <td>{item.size === "" ? "-" : item.size}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TerminadasList;
