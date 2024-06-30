import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Estilos from '../assets/Estilos/Estilos';

const App = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [erros, setErros] = useState({
    nome: '',
    cep: '',
    phone: '',
    cnpj: '',
    email: '',
    endereco: '',
  });

  const PressableButton = ({ onPress, title, style }) => (
    <Pressable style={style} onPress={onPress}>
      <Text style={Estilos.buttonText}>{title}</Text>
    </Pressable>
  );

  const handleCep = (value) =>
    setCep(value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2'));
  const handlePhone = (value) =>
    setPhone(
      value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2')
    );
  const handleCnpj = (value) =>
    setCnpj(
      value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
    );

  const validarCampos = () => {
    const errosTemp = {};
    if (!nome) errosTemp.nome = 'Digite o nome da empresa';
    if (!cep) errosTemp.cep = 'Digite o CEP';
    if (!phone) errosTemp.phone = 'Digite o telefone';
    if (!email) errosTemp.email = 'Digite o email';
    if (!cnpj) errosTemp.cnpj = 'Digite o CNPJ';
    if (!endereco) errosTemp.endereco = 'Digite o endereço';
    setErros(errosTemp);
    return Object.keys(errosTemp).length === 0;
  };

  const handleSalvar = async () => {
    const dados = { id: '0', nome, cep, phone, email, cnpj, endereco };
    if (validarCampos()) {
      try {
        dados.id = String(Math.floor(Math.random() * 10000));
        await AsyncStorage.setItem(dados.id, JSON.stringify(dados));
        alert('Dados cadastrados');
        navigation.navigate('Dados', { dados });
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
        alert('Dados não cadastrados');
      }
    } else {
      alert('Dados não cadastrados');
    }
  };

  const renderErro = (campo) =>
    erros[campo] ? <Text style={Estilos.erro}>{erros[campo]}</Text> : null;

  return (
    <SafeAreaView style={Estilos.formContainer}>
      <ScrollView>
        <View style={Estilos.container}>
          <Text style={Estilos.sobreText}>Cadastro da clínica</Text>
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Nome da empresa:</Text>
          <TextInput
            style={Estilos.textInput}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome"
            maxLength={100}
          />
          {renderErro('nome')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Telefone:</Text>
          <TextInput
            value={phone}
            onChangeText={handlePhone}
            placeholder="Digite o telefone"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={15}
          />
          {renderErro('phone')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>E-mail:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={Estilos.textInput}
          />
          {renderErro('email')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>CNPJ:</Text>
          <TextInput
            value={cnpj}
            onChangeText={handleCnpj}
            placeholder="Digite o CNPJ"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={18}
          />
          {renderErro('cnpj')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>CEP:</Text>
          <TextInput
            value={cep}
            onChangeText={handleCep}
            placeholder="Digite o CEP"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={9}
          />
          {renderErro('cep')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Endereço:</Text>
          <TextInput
            numberOfLines={4}
            style={Estilos.textInput2}
            value={endereco}
            onChangeText={setEndereco}
            placeholder="Digite o endereço"
            maxLength={100}
            editable
            multiline
          />
          {renderErro('endereco')}
          <View>
            <Text></Text>
          </View>
          <PressableButton
            title="Cadastrar"
            style={Estilos.buttonP}
            onPress={handleSalvar}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
