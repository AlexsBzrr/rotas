import { Link } from "react-router-dom";

const Usuarios = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold pt-4">Usuários</h1>
      <ul className="flex flex-col gap-4 justify-center items-center max-w-xl mx-auto p-6 bg-red-50 shadow-md rounded-lg mt-12 text-2xl">
        <li>
          <Link to={"/usuario/1/Alex Bezerra"}>Alex Bezerra</Link>
        </li>
        <li>
          <Link to={"/usuario/2/Lucas Bezerra"}>Lucas Bezerra</Link>
        </li>
        <li>
          <Link to={"/usuario/3/Gleina Bezerra"}>Gleina Bezerra</Link>
        </li>
        <li>
          <Link to={"/usuario/4/Totó Prado"}>Totó Prado</Link>
        </li>
        <li>
          <Link to={"/usuario/4/Glaydon Prado"}>Galydon Prado</Link>
        </li>
      </ul>
    </div>
  );
};

export default Usuarios;
