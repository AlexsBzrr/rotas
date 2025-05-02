import imgLog from "../assets/logo.png"; // import {default as imgLog} from "../assets/logo.png"
const HomePage = () => {
  return (
    <div className="flex flex-col items-center pb-4">
      <div className="max-w-3xl mx-auto p-6 bg-red-50 shadow-md ">
        <img className="w-20" src={imgLog} alt="" />
        <h1 className="text-xl font-bold text-blue-700 mb-2">
          Resumo - Geração Tech 2.0 (IEL - CE)
        </h1>

        <p className="mb-2">
          A segunda edição do <strong>Geração Tech</strong>, denominada{" "}
          <strong>Geração Tech 2.0</strong>, é uma iniciativa do
          <strong>Instituto Euvaldo Lodi (IEL Ceará)</strong> em parceria com o{" "}
          <strong>Governo do Estado do Ceará</strong> por meio da{" "}
          <strong>ADECE</strong>. O objetivo é capacitar jovens e adultos
          cearenses em <strong>Desenvolvimento Web Full Stack</strong>, de forma
          totalmente gratuita.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-2">
          <li>
            <strong>Vagas:</strong> 1.700 no total — 1.200 online e 500
            presenciais (Pici, Aldeota e Edson Queiroz - Fortaleza)
          </li>
          <li>
            <strong>Público-alvo:</strong> A partir de 17 anos, residentes no
            Ceará, com prioridade para alunos/ex-alunos de escolas públicas
          </li>
          <li>
            <strong>Modalidades:</strong>
            <ul className="list-disc pl-6">
              <li>
                <strong>Presencial:</strong> Segunda a sexta, manhã e tarde
              </li>
              <li>
                <strong>Online:</strong> Aulas gravadas (terça a sexta) e aulões
                ao vivo às segundas
              </li>
            </ul>
          </li>
          <li>
            <strong>Carga horária:</strong> 192h ao longo de 3 meses
          </li>
          <li>
            <strong>Objetivo:</strong> Reduzir o déficit de profissionais de
            tecnologia e transformar o Ceará em referência no setor
          </li>
          <li>
            <strong>Inscrições:</strong> Gratuitas via{" "}
            <a
              href="https://geracaotech.iel-ce.org.br"
              className="text-blue-600 underline"
              target="_blank"
            >
              geracaotech.iel-ce.org.br
            </a>
          </li>
        </ul>

        <p className="italic text-gray-700">
          O Geração Tech 2.0 busca promover inclusão digital, oportunidades de
          carreira e impulsionar o ecossistema tecnológico cearense.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
