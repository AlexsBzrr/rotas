import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 bg-secondary px-8 flex items-center">
      <h1>
        <ul className="flex gap-4">
          <li className="text-white">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                  : ""
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                  : ""
              }
              to="/contato"
            >
              Contato
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                  : ""
              }
              to="/usuarios"
            >
              Usuários
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-0.5 font-bold"
                  : ""
              }
              to="/sobre"
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </h1>
    </div>
  );
};

export default Header;
