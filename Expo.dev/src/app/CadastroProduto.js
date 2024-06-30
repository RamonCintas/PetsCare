import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Estilos from '../assets/Estilos/Estilos';
import * as ImagePicker from 'expo-image-picker';

const App = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [validade, setValidade] = useState('');
  const [image, setImage] = useState('');
  const [preco, setPreco] = useState('');
  const [erros, setErros] = useState({
    nome: '',
    descricao: '',
    validade: '',
    preco: '',
    image: '',
  });

  const PressableButton = ({ onPress, title, style }) => (
    <Pressable style={style} onPress={onPress}>
      <Text style={Estilos.buttonText}>{title}</Text>
    </Pressable>
  );

  const handleValidade = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    setValidade(value);
  };

  const handlePreco = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
    setPreco(value);
  };

  const validarCampos = () => {
    const errosTemp = {};
    if (!nome) errosTemp.nome = 'Digite o nome do produto';
    if (!descricao) errosTemp.descricao = 'Digite a descrição';
    if (!validade) errosTemp.validade = 'Digite a data de validade';
    if (!preco) errosTemp.preco = 'Digite o preço';
    if (!image) errosTemp.image = 'Faça o upload de uma imagem';
    setErros(errosTemp);
    return Object.keys(errosTemp).length === 0;
  };

  const handleSalvar = async () => {
    const dados = { id: '0', nome, descricao, validade, preco, image };
    if (validarCampos()) {
      try {
        dados.id = String(Math.floor(Math.random() * 10000));
        await AsyncStorage.setItem(dados.id, JSON.stringify(dados));
        alert('Dados cadastrados com sucesso');
        navigation.navigate('Dados', { dados });
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
        alert('Dados não cadastrados');
      }
    } else {
      alert('Dados não cadastrados');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) setImage(result.assets[0].uri);
  };

  const renderErro = (campo) =>
    erros[campo] ? <Text style={Estilos.erro}>{erros[campo]}</Text> : null;

  return (
    <SafeAreaView style={Estilos.formContainer}>
      <ScrollView>
        <View style={Estilos.container}>
          <Text style={Estilos.sobreText}>Cadastro do produto</Text>
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Nome do produto:</Text>
          <TextInput
            numberOfLines={4}
            style={Estilos.textInput2}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome do produto"
            maxLength={100}
            editable
            multiline
          />
          {renderErro('nome')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Descrição:</Text>
          <TextInput
            numberOfLines={4}
            style={Estilos.textInput2}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Digite a descrição do produto"
            maxLength={100}
            editable
            multiline
          />
          {renderErro('descricao')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Validade:</Text>
          <TextInput
            style={Estilos.textInput}
            value={validade}
            onChangeText={handleValidade}
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            maxLength={10}
          />
          {renderErro('validade')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Valor do produto:</Text>
          <TextInput
            value={preco}
            onChangeText={handlePreco}
            placeholder="Digite o valor"
            keyboardType="numeric"
            style={Estilos.textInput}
          />
          {renderErro('preco')}
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Imagem do produto:</Text>
          <PressableButton
            title="Selecionar"
            style={Estilos.buttonP}
            onPress={pickImage}
          />
          <View>
            <Text></Text>
          </View>
          {image && <Image source={{ uri: image }} style={Estilos.image} />}
          {renderErro('image')}
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
