import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Estilos from '../assets/Estilos/Estilos';

const PressableButton = ({ onPress, title, style }) => (
  <Pressable style={style} onPress={onPress}>
    <Text style={Estilos.buttonText}>{title}</Text>
  </Pressable>
);

const ProdutoDetalhes = ({ route, navigation }) => {
  const [dadosSalvos, setDadosSalvos] = useState(null);

  useEffect(() => {
    const getDadosSalvos = async () => {
      try {
        const dados = await AsyncStorage.getItem(route.params.dados.id);
        if (dados) {
          setDadosSalvos(JSON.parse(dados));
        }
      } catch (error) {
        console.error('Erro ao obter os dados salvos:', error);
      }
    };
    getDadosSalvos();
  }, [route.params.dados.id]);

  return (
    <SafeAreaView style={Estilos.safeAreaViewA}>
      <ScrollView>
        {dadosSalvos && (
          <>
            <Text style={Estilos.tituloanuncio}>{dadosSalvos.titulo}</Text>
            <Image style={Estilos.anuncio} source={dadosSalvos.imagem} />
            <Text style={Estilos.subtituloanuncio}>
              R$ {dadosSalvos.preco}
            </Text>
            <View style={Estilos.alignVertical}>
              <Text style={Estilos.avaliacao}>
                Avaliação de 5 estrelas{' '}
                <Image
                  style={Estilos.estrelas2}
                  source={require('../assets/imagens/estrelas.png')}
                />
              </Text>
            </View>
            <View>
              <Text>
              </Text>
            </View>
            <PressableButton
              title="Voltar"
              style={Estilos.buttonP}
              onPress={() => {
                navigation.navigate('Produtos');
              }}
            />
            <View>
              <Text>
              </Text>
            </View>
            <View style={Estilos.linha} />
            <Text style={Estilos.subtitulo}>Resumo: </Text>
            <Text style={Estilos.descricao}>{dadosSalvos.resumo}</Text>
            <View style={Estilos.linha} />
            <Text style={Estilos.subtitulo}>Observação: </Text>
            <Text style={Estilos.descricao}>{dadosSalvos.observacao}</Text>
            <View style={Estilos.linha} />
            <Text style={Estilos.subtitulo}>Código do produto: </Text>
            <Text style={Estilos.descricao}>{dadosSalvos.codigo}</Text>
            <View style={Estilos.linha} />
            <Text style={Estilos.subtitulo}>Descrição: </Text>
            <Text style={Estilos.descricao}>{dadosSalvos.descricao}</Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProdutoDetalhes;
