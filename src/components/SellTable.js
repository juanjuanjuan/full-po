import {
  TableContainer,
  Table,
  // Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material/";

const DUMMY_INFO = [
  {
    id: 1,
    size: "grande",
    color: "roja",
    amount: 3,
    place: "ml",
    date: new Date().toISOString(),
    who: "pepe",
  },
  {
    id: 2,
    size: "grande",
    color: "negra",
    amount: 1,
    place: "ml",
    date: new Date().toISOString(),
    who: "Joerge",
  },
  {
    id: 3,
    size: "chica",
    color: "azul",
    amount: 2,
    place: "fb",
    date: new Date().toISOString(),
    who: "CHano",
  },
];

const SellTable = () => {
  const sells = DUMMY_INFO;

  return (
    <TableContainer>
      <Table
        // sx={{ minWidth: 650 }}
        size="small"
        // aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">Tamaño</TableCell>
            <TableCell align="center">Color</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Lugar</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Subido por</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sells.map((item) => {
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            ></TableRow>;
            return (
              <tr key={item.id}>
                <TableCell align="center">{item.size}</TableCell>
                <TableCell align="center">{item.color}</TableCell>
                <TableCell align="center">{item.amount}</TableCell>
                <TableCell align="center">
                  {item.place === "ml" ? "Mercadolibre" : "Marketplace"}
                </TableCell>
                <TableCell align="center">{item.date}</TableCell>
                <TableCell align="center">{item.who}</TableCell>
              </tr>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SellTable;
