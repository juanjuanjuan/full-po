import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <h1>FullPo</h1>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Materiales">Materias Primas</NavLink>
        </li>
        <li>
          <NavLink to="/EnProceso">En proceso</NavLink>
        </li>
        <li>
          <NavLink to="/Terminados">Terminados</NavLink>
        </li>
        <li>
          <NavLink to="/Ventas">Ventas</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default MainHeader;
