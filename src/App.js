import "./App.css";
import Ventas from "./components/Ventas";
import Materiales from "./components/Materiales";
import MainHeader from "./UI/MainHeader";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* NavBar
        - Nombre
        - Materia Prima
        - Stock
        - Ventas
      Web MateriaPrima
      Web Ventas */}

      <MainHeader />
      <Routes>
        <Route path="ventas" element={<Ventas />} />
        <Route path="materiales" element={<Materiales />} />
      </Routes>
    </div>
  );
}

export default App;
