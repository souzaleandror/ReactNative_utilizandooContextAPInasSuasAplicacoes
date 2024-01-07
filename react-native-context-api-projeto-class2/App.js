import Rotas from "./src/rotas";

import { InfoProvider } from "./src/contexts/GlobalContext";
import { TemaProvider } from "./src/contexts/TemaContext";

export default function App() {
  return (
    <InfoProvider>
      <TemaProvider>
        <Rotas />
      </TemaProvider>
    </InfoProvider>
  );
}