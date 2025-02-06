import { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, Pressable, Modal, ImageBackground } from 'react-native';
import Estilos from '../assets/Estilos/Estilos';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({ route, navigation }) => {
  const [dadosSalvos, setDadosSalvos] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [preco, setPreco] = useState(0);
  const { list, valores } = route.params;

  useEffect(() => {
    const limparLista = () => {
      valores.length = 0;
    };
    limparLista();
  }, [valores]);

  useEffect(() => {
    const getDadosSalvos = async () => {
      try {
        const dados = await AsyncStorage.getItem(route.params.dados.id);
        if (dados) {
          setDadosSalvos(JSON.parse(dados));
        }
      } catch (error) {
        alert('Dados não cadastrados');
      }
    };

    getDadosSalvos();
  }, [route.params.dados.id]);

  const PressableButton = ({ onPress, title, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={Estilos.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  const renderSecondItem = ({ item }) => {
    return (
      <View style={Estilos.secondItem} key={item.id}>
        <Image style={Estilos.secondImage} source={item.image} />
        <Text style={Estilos.titleP}>{item.title}</Text>
        <View>
          <Text style={Estilos.modalText}>
            Quantidade: {item.quantidade}
          </Text>
          <PressableButton
            title="Situação"
            style={Estilos.buttonP}
            onPress={() => {
              setPreco(`${item?.price.toFixed(2)}`);
              setModalVisible(true);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={Estilos.containerPedido}>
      <View style={Estilos.listContainer}>
        <View>
          <Text></Text>
        </View>
        {dadosSalvos && (
          <View>
            <Text style={Estilos.modalTextTitle}>Detalhes da compra:</Text>
            <Text style={Estilos.modalTextTitle}>
              Valor total: R$ {dadosSalvos.discountedAmount.toFixed(2)}
              {'\n'}
              {dadosSalvos.discountedAmount != dadosSalvos.valortotalcompra
                ? `Valor com desconto: R$ ${dadosSalvos.valortotalcompra.toFixed(2)}\n` +
                  `Cupom aplicado: ${dadosSalvos.couponCode}\n` +
                  `Desconto de: ${dadosSalvos.discount}%`
                : 'Nenhum desconto aplicado'}
            </Text>
          </View>
        )}
        <View>
        <PressableButton
          title="Início"
          style={Estilos.buttonP}
          onPress={() => navigation.navigate('Produtos')}
        />
      </View>
      <View>
        <Text></Text>
      </View>
        <FlatList
          data={list}
          renderItem={renderSecondItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ImageBackground
          source={require('../assets/imagens/brilho.gif')}
          resizeMode="cover"
          style={Estilos.appImage}>
          <View style={Estilos.centeredView}>
            <View style={Estilos.modalView}>
              <Image
                style={Estilos.logo}
                source={require('../assets/imagens/dog.png')}
              />
              <View>
                <Text></Text>
              </View>
              <Text style={Estilos.modalTextTitle}>Detalhes da compra</Text>
              {valores.map((item, index) => (
                <View key={index}>
                  <Text style={Estilos.tituloanuncio}>
                    Quantidade total de produtos: {item.itens}
                  </Text>
                  <Text style={Estilos.tituloanuncio}>
                    Valor dos produtos: R$ {item.total}
                  </Text>
                </View>
              ))}
              <Text style={Estilos.modalText}>
                {`Valor da compra: R$ ${preco}\nPagamento: Aprovado\nObservação: Produto já está a caminho do endereço`}
              </Text>
              {dadosSalvos && (
                <View>
                  <Text style={Estilos.modalTextTitle}>Dados do cartão:</Text>
                  <Text style={Estilos.modalText}>
                    {`Tipo: ${dadosSalvos.tipo}\nNúmero: ${dadosSalvos.numero}\nValidade: ${dadosSalvos.validade}\nNome: ${dadosSalvos.nome}\nCódigo: ${dadosSalvos.codigo}`}
                  </Text>
                </View>
              )}
              <View>
                <Text></Text>
              </View>
              <PressableButton
                title="Fechar"
                style={Estilos.buttonP}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </ImageBackground>
      </Modal>
    </SafeAreaView>
  );
};

export default App;
