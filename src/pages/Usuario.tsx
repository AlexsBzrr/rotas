import { Link, useParams } from "react-router-dom";

const Usuario = () => {
  const { id, nome } = useParams();
  return (
    <div className="mt-10">
      <button className="bg-primary text-white px-4 py-2 rounded-lg absolute top-20 left-4">
        <Link to="/usuarios">Volta</Link>
      </button>
      <h1 className="text-center text-4xl font-bold pt-4">
        Usuário Selecionado
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto p-6 bg-red-50 shadow-md rounded-lg mt-12 text-2xl">
        <h2>
          Usuário selecionado = com id #{id} é o: {nome}
        </h2>
      </div>
    </div>
  );
};

export default Usuario;
