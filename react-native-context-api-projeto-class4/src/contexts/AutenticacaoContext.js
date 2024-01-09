import { createContext, useState } from 'react';

export const AutenticacaoContext = createContext({});

export function AutenticacaoProvider({ children }) {
  const [usuario, setUsuario] = useState('');

  function login(email, senha) {
    if (email == 'a@gmail.com' && senha === '123') {
      setUsuario({
        nome: 'Andre',
        email: 'a@gmail.com',
        endereco: 'Av. Paulista',
        telefone: '(11) 99999-9999'
      });
      return 'ok';
    } else {
      return 'Email ou senha incorreta'
    }
  }

  return (
    <AutenticacaoContext.Provider value={{
      usuario,
      login
    }}>
      {children}
    </AutenticacaoContext.Provider>
  );
}