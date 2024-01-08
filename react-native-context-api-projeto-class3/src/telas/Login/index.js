import { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { estilos } from './estilos';
import { GlobalContext } from '../../contexts/GlobalContext';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { valor, nome, setNome } = useContext(GlobalContext);
  const { login } = useContext(AutenticacaoContext);

  const { temaEscolhido } = useContext(TemaContext);

  const estilo = estilos(temaEscolhido);

  function logandoNoSistema() {

    const resultado = login(email, senha);
    console.log(resultado);
    if (resultado == 'ok') {
      navigation.navigate('Principal');
    } else {
      Alert.alert(resultado);
    }
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login = {valor}</Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => logandoNoSistema()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

