import React, { useState, useEffect } from "react";

function LoadingComponent() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData("✅ Componente carregado com sucesso!");
    }, 2000);
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }
  return <div>{data}</div>;
}
export default LoadingComponent;
