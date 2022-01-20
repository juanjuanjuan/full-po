import React from "react";
import { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material/";
import { LocalizationProvider, DateTimePicker } from "@mui/lab/";
import DateAdapter from "@mui/lab/AdapterDateFns";

const COLORS_COLCHONETAS = ["roja", "negra", "azul", "rosa"];
const COLORS_TOBIPESAS = ["violeta", "verde"];

const NewSell = () => {
  const [switchTipo, setSwitchTipo] = useState(true);
  const [date, setDate] = useState(new Date());

  //   let tipo = "colchoneta";
  return (
    <Grid style={{ border: "1px solid" }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={switchTipo}
              onChange={(event) => {
                setSwitchTipo(event.target.checked);
              }}
            //   inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={switchTipo ? "Colchonetas" : "Tobipesas"}
          labelPlacement="top"
        />
      </FormGroup>
      <TextField
        //   required
        id="cantidad"
        label="Cantidad"
        type="number"
        variant="standard"
        defaultValue="1"
      />

      {switchTipo && (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="size-label">Tamaño</InputLabel>
          <Select
            labelId="size-label"
            id="size-select"
            //   value={size}
            //   onChange={handleSizeChange}
            label="Tamaño"
            // required={true}
          >
            <MenuItem value={"grande"}>Grande</MenuItem>
            <MenuItem value={"chica"}>Chica</MenuItem>
          </Select>
        </FormControl>
      )}

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="color-label">Color</InputLabel>
        <Select
          labelId="color-label"
          id="color-select"
          //   value={color}
          //   onChange={handleColorChange}
          label="Color"
          // required={true}
        >
          {switchTipo &&
            COLORS_COLCHONETAS.map((color) => {
              return <MenuItem value={color}>{color}</MenuItem>;
            })}
          {!switchTipo &&
            COLORS_TOBIPESAS.map((color) => {
              return <MenuItem value={color}>{color}</MenuItem>;
            })}
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="where-label">Donde</InputLabel>
        <Select
          labelId="where-label"
          id="where-select"
          //   value={color}
          //   onChange={handleColorChange}
          label="Donde"
          // required={true}
        >
          <MenuItem value={"ml"}>MercadoLibre</MenuItem>
          <MenuItem value={"fb"}>Marketplace</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={DateAdapter}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Fecha"
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
          }}
        />
      </LocalizationProvider>
    </Grid>
    // {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
  );
};

export default NewSell;
