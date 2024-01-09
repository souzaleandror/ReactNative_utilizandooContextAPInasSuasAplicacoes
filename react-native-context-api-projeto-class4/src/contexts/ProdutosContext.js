import { createContext, useState } from 'react';

export const ProdutoContext = createContext({});

export function ProdutosProvider({ children }) {
  const [quantidade, setQuantidade] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [ultimosVistos, setUltimosVistos] = useState([]);

  function viuProduto(produto) {
    setQuantidade(quantidade + 1);
    let novoCarrinho = carrinho;
    novoCarrinho.push(produto);
    setCarrinho(novoCarrinho);

    let novoUltimosVistos = new Set(ultimosVistos);
    novoUltimosVistos.add(produto);
    setUltimosVistos([...novoUltimosVistos])
  }

  return (
    <ProdutoContext.Provider value={{
      quantidade,
      carrinho,
      ultimosVistos,
      viuProduto
    }}>
      {children}
    </ProdutoContext.Provider>
  );
}