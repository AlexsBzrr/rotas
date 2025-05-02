import { Suspense } from "react";
import PathsRoutes from "./../routes/PathsRoutes";

function App() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <section>
          <main className=" bg-red-50">
            <PathsRoutes />
          </main>
        </section>
      </Suspense>
    </>
  );
}

export default App;
