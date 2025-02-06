import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Estilos from '../assets/Estilos/Estilos';

const App = ({ route, navigation }) => {
  const [dadosSalvos, setDadosSalvos] = useState(null);

  const PressableButton = ({ onPress, title, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={Estilos.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  useEffect(() => {
    const getDadosSalvos = async () => {
      try {
        const dados = await AsyncStorage.getItem(route.params.dados.id);
        if (dados) {
          setDadosSalvos(JSON.parse(dados));
        }
      } catch (error) {
        console.error('Erro ao obter dados salvos:', error);
        alert('Dados não cadastrados');
      }
    };
    getDadosSalvos();
  }, [route.params.dados.id]);

  if (!dadosSalvos) return null;

  const renderDados = (label, value) => (
    <View>
      <Text style={Estilos.title}>{label}:</Text>
      <Text style={Estilos.text}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={Estilos.formContainer}>
      <ScrollView style={Estilos.container}>
          <View style={{ alignSelf: 'center' }}>
            <Text style={Estilos.title}>Dados do Cadastro</Text>
          </View>
            {dadosSalvos.id && renderDados('ID', dadosSalvos.id)}
            {dadosSalvos.nome && renderDados('Nome', dadosSalvos.nome)}
            {dadosSalvos.phone && renderDados('Telefone', dadosSalvos.phone)}
            {dadosSalvos.date && renderDados('Date', dadosSalvos.date)}
            {dadosSalvos.email && renderDados('Email', dadosSalvos.email)}
            {dadosSalvos.cnpj && renderDados('CNPJ', dadosSalvos.cnpj)}
            {dadosSalvos.endereco && renderDados('Endereço', dadosSalvos.endereco)}
            {dadosSalvos.descricao && renderDados('Descrição', dadosSalvos.descricao)}
            {dadosSalvos.validade && renderDados('Validade', dadosSalvos.validade)}
            {dadosSalvos.preco && renderDados('Preço', dadosSalvos.preco)}
            {dadosSalvos.cpf && renderDados('CPF', dadosSalvos.cpf)}
            {dadosSalvos.image && (
              <View>
                <Text style={Estilos.title}>Imagem:</Text>
                <Image style={Estilos.anuncio} source={{ uri: dadosSalvos.image }} />
              </View>
            )}
          <View>
            <Text></Text>
          </View>
          <PressableButton
            title="Início"
            style={Estilos.buttonP}
            onPress={() => navigation.navigate('Produtos')}
          />
          <View>
            <Text></Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
