import Rotas from "./src/rotas";

import { InfoProvider } from "./src/contexts/GlobalContext";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutenticacaoProvider } from "./src/contexts/AutenticacaoContext";

export default function App() {
  return (
    <InfoProvider>
      <TemaProvider>
        <AutenticacaoProvider>
          <Rotas />
        </AutenticacaoProvider>
      </TemaProvider>
    </InfoProvider>
  );
}