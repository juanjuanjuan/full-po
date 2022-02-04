import "./App.css";
import Ventas from "./components/Ventas/Ventas";
import Materiales from "./components/Materiales/Materiales";
import EnProceso from "./components/EnProceso/EnProceso";
import Terminados from "./components/Terminados/Terminados";
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
        <Route path="materiales" element={<Materiales />} />
        <Route path="enproceso" element={<EnProceso />} />
        <Route path="terminados" element={<Terminados />} />
        <Route path="ventas" element={<Ventas />} />
      </Routes>
    </div>
  );
}

export default App;
