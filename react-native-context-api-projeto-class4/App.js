import Rotas from "./src/rotas";

import { InfoProvider } from "./src/contexts/GlobalContext";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";
import { ProdutosProvider } from "./src/contexts/ProdutosContext";

export default function App() {
  return (
    <InfoProvider>
      <TemaProvider>
        <AutenticacaoProvider>
          <ProdutosProvider>
            <Rotas />
          </ProdutosProvider>
        </AutenticacaoProvider>
      </TemaProvider>
    </InfoProvider>
  );
}