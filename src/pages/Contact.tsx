const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-red-50 shadow-md rounded-lg mt-24">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Contatos - Geração Tech 2.0 (IEL - CE)
      </h2>

      <p className="mb-4">
        Em caso de dúvidas ou para mais informações sobre o programa{" "}
        <strong>Geração Tech 2.0</strong>, entre em contato com o IEL Ceará:
      </p>

      <ul className="space-y-2">
        <li>
          <strong>Instituto Euvaldo Lodi - IEL/CE</strong>
        </li>
        <li>
          <strong>Telefone:</strong> (85) 4009-6300
        </li>
        <li>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:iel@sfiec.org.br" className="text-blue-600 underline">
            iel@sfiec.org.br
          </a>
        </li>
        <li>
          <strong>Site:</strong>{" "}
          <a
            href="https://geracaotech.iel-ce.org.br"
            className="text-blue-600 underline"
            target="_blank"
          >
            geracaotech.iel-ce.org.br
          </a>
        </li>
        <li>
          <strong>Endereço:</strong> Av. Barão de Studart, 1980 – Aldeota,
          Fortaleza – CE
        </li>
      </ul>
    </div>
  );
};

export default Contact;
