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
  const [cep, setCep] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [erros, setErros] = useState({
    nome: '',
    cep: '',
    phone: '',
    date: '',
    email: '',
    cpf: '',
  });

  const handleCep = (value) =>
    setCep(value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2'));
  const handlePhone = (value) =>
    setPhone(
      value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2')
    );
  const handleDate = (value) =>
    setDate(
      value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
    );
  const handleCpf = (value) =>
    setCpf(
      value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    );

  const validarCampos = () => {
    const errosTemp = {};
    if (!nome) errosTemp.nome = 'Digite seu nome';
    if (!cep) errosTemp.cep = 'Digite o CEP';
    if (!phone) errosTemp.phone = 'Digite o telefone';
    if (!date) errosTemp.date = 'Digite a data de nascimento';
    if (!email) errosTemp.email = 'Digite o email';
    if (!cpf) errosTemp.cpf = 'Digite o CPF';
    setErros(errosTemp);
    return Object.keys(errosTemp).length === 0;
  };

  const handleSalvar = async () => {
    const dados = { id: '0', nome, cep, phone, date, email, cpf };
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
          <Text style={Estilos.sobreText}>Cadastro do cliente</Text>
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Nome completo:</Text>
          <TextInput
            style={Estilos.textInput}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
            maxLength={100}
          />
          {renderErro('nome')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Data de Nascimento:</Text>
          <TextInput
            value={date}
            onChangeText={handleDate}
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={10}
          />
          {renderErro('date')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Telefone celular:</Text>
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
          <Text style={Estilos.loginLabel}>CPF:</Text>
          <TextInput
            value={cpf}
            onChangeText={handleCpf}
            placeholder="Digite o CPF"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={14}
          />
          {renderErro('cpf')}
          <View>
            <Text></Text>
          </View>
          <Pressable
            title="Cadastrar"
            style={Estilos.buttonP}
            onPress={handleSalvar}>
            <Text style={Estilos.buttonText}>Cadastrar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
