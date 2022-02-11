const MaterialesList = (props) => {
  const materiales = props.materialesList;

  materiales.sort((a, b) => {
    return a.item + a.color < b.item + b.color ? -1 : 1;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Color</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {materiales.map((material) => {
          return (
            <tr key={material.id}>
              <td>{material.item}</td>
              <td>
                {material.color === undefined ||
                material.color === null ||
                material.color === ""
                  ? "-"
                  : material.color}
              </td>
              <td>{material.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MaterialesList;
