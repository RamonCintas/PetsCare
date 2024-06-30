import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  Modal,
  Alert,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Estilos from '../assets/Estilos/Estilos';

const App = ({ route, navigation }) => {
  const { list } = route.params;

  const { valores } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [dadosSalvos, setDadosSalvos] = useState(null);

  const [tipo, setTipo] = useState('');
  const [numero, setNumero] = useState('');
  const [validade, setValidade] = useState('');
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [erros, setErros] = useState({
    tipo: '',
    numero: '',
    validade: '',
    nome: '',
    codigo: '',
    title: '',
    price: '',
    image: '',
  });

  const PressableButton = ({ onPress, title, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={Estilos.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  const handlevalidade = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    setValidade(value);
  };

  const handlenumero = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1.');
    value = value.replace(/\.$/, '');
    value = value.substring(0, 19);
    setNumero(value);
  };

  const validarCampos = () => {
    let errosTemp = {};

    if (!tipo) {
      errosTemp.tipo = 'Digite o tipo';
    }

    if (!numero) {
      errosTemp.numero = 'Digite o número';
    }

    if (!validade) {
      errosTemp.validade = 'Digite a data de validade';
    }

    if (!nome) {
      errosTemp.nome = 'Digite o nome';
    }

    if (!codigo) {
      errosTemp.codigo = 'Digite o código';
    }
    if (!title) {
      errosTemp.titulo = 'erro titulo';
    }
    if (!price) {
      errosTemp.preco = 'erro preco';
    }
    if (!image) {
      errosTemp.preco = 'erro imagem';
    }

    setErros(errosTemp);

    if (
      tipo != '' &&
      numero != '' &&
      validade != '' &&
      nome != '' &&
      codigo != '' &&
      title != '' &&
      price != '' &&
      image != ''
    ) {
      alert('Dados cadastrados com sucesso');
    } else {
      alert('Dados não cadastrados');
      setModalVisible(false);
    }

    return Object.keys(errosTemp).length === 0;
  };

  const comprar = async () => {
    const dados = {
      id: '0',
      tipo,
      numero,
      validade,
      nome,
      codigo,
      title,
      price,
      image,
      discountedAmount,
      couponCode,
      discount,
      valortotalcompra,
    };

    if (validarCampos()) {
      try {
        dados.id = Math.floor(Math.random() * 10000) + '';
        await AsyncStorage.setItem(dados.id, JSON.stringify(dados), () => {
          alert('Compra efetuada com sucesso');
          navigation.navigate('SituacaoPedido', { dados, valores, list });
        });
      } catch (error) {
        alert('Compra não efetuada');
        navigation.navigate('Produtos');
      }
    }
  };


  const cancelar = () => {
    alert('Compra cancelada com sucesso'), navigation.navigate('Produtos');
  };

  const calcularSoma = () => {
    let total = 0;
    list.forEach((item) => {
      total += item.price;
    });
    return total + 10.0;
  };

  const [discount, setDiscount] = useState(0);  

  const [discountedAmount, setDiscountedAmount] = useState(calcularSoma());

  const [valortotalcompra, setValortotalcompra] = useState(calcularSoma());

const [couponCode, setCouponCode] = useState(''); 

  const applyCoupon = () => {
  const couponCodes = {
    'petscare': 50, 
    'findpets': 60,
  };

  
  const trimmedCouponCode = couponCode.trim().toLowerCase();

  if (couponCodes[trimmedCouponCode]) {
    const discountPercentage = couponCodes[trimmedCouponCode];
    setDiscount(discountPercentage);
    
    const total = calcularSoma();
    const discountedTotal = total - (total * discountPercentage / 100);
    setValortotalcompra(discountedTotal); 
    Alert.alert('Cupom aplicado com sucesso!');
  } else {
    setDiscount(0);
    setValortotalcompra(calcularSoma());
    Alert.alert('Cupom inválido');
  }
};




  return (
    <SafeAreaView style={Estilos.formContainer}>
      <ScrollView>
        <View style={Estilos.container}>
          <View style={Estilos.container}>
            <Text style={Estilos.modalTextTitle}>Detalhes da transação:</Text>
            {list.map((item) => (
              <>
                <Text style={Estilos.modalTextTitle}>
                  Produto: {item.title}
                </Text>
                <Image style={Estilos.anuncio} source={item.image} />
                <Text style={Estilos.modalTextTitle}>
                  Preço da unidade: R$ {item.preco1}
                </Text>
                <Text style={Estilos.modalTextTitle}>
                  Quantidade: {item.quantidade} Preço: R$ {item.price.toFixed(2)}
                </Text>
              </>
            ))}

            {valores.map((item) => (
              <>
                <Text style={Estilos.tituloanuncio}>
                  Quantidade total de produtos: {item.itens}
                </Text>
                <Text style={Estilos.tituloanuncio}>
                  Valor dos produtos: R$ {item.total}
                </Text>
                <Text style={Estilos.tituloanuncio}>
                  Frete para todo o Brasil: R$ 10.00
                </Text>
                <Text style={Estilos.tituloanuncio}>
                  Valor total: R$ {calcularSoma().toFixed(2)}
                </Text>
                <TextInput
                  style={Estilos.textInput}
                  placeholder="Insira o código do cupom"
                  value={couponCode}
                  onChangeText={text => setCouponCode(text)}
                />
                <View>
                  <Text></Text>
                </View>
                <PressableButton
                  title="Aplicar Cupom"
                  style={Estilos.buttonP}
                  onPress={applyCoupon}
                />
                <View>
                  <Text></Text>
                </View>
                <Text style={{ alignItems: 'center' }}>
                  {discount > 0 ? `Desconto aplicado: ${discount}%\nValor total com desconto: R$ ${valortotalcompra.toFixed(2)}` : 'Nenhum desconto aplicado'}
                </Text>
                
              </>
            ))}
            <View>
              <Text></Text>
            </View>
            <PressableButton
              title="Cancelar"
              style={Estilos.buttonP}
              onPress={cancelar}
            />
          </View>
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.loginLabel}>Tipo da bandeira do cartão:</Text>
          <TextInput
            style={Estilos.textInput}
            value={tipo}
            onChangeText={setTipo}
            placeholder="Digite o tipo"
            maxLength={100}
          />
          {erros.tipo !== '' ? (
            <Text style={Estilos.erro}>{erros.tipo}</Text>
          ) : (
            <Text></Text>
          )}
          <Text style={Estilos.loginLabel}>Data de validade:</Text>
          <TextInput
            value={validade}
            onChangeText={handlevalidade}
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={10}
          />
          {erros.validade !== '' ? (
            <Text style={Estilos.erro}>{erros.validade}</Text>
          ) : (
            <Text></Text>
          )}
          <Text style={Estilos.loginLabel}>Número do cartão:</Text>
          <TextInput
            value={numero}
            onChangeText={handlenumero}
            placeholder="Digite o número"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={19}
          />
          {erros.numero !== '' ? (
            <Text style={Estilos.erro}>{erros.numero}</Text>
          ) : (
            <Text></Text>
          )}

          <Text style={Estilos.loginLabel}>Nome no cartão:</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome"
            style={Estilos.textInput}
          />
          {erros.nome !== '' ? (
            <Text style={Estilos.erro}>{erros.nome}</Text>
          ) : (
            <Text></Text>
          )}
          <Text style={Estilos.loginLabel}>Codigo de segurança (CVV):</Text>
          <TextInput
            value={codigo}
            onChangeText={setCodigo}
            placeholder="Digite o codigo"
            keyboardType="numeric"
            style={Estilos.textInput}
            maxLength={3}
          />
          {erros.codigo !== '' ? (
            <Text style={Estilos.erro}>{erros.codigo}</Text>
          ) : (
            <Text></Text>
          )}
          <View>
            <Text></Text>
          </View>
          <PressableButton
            title="Continuar"
            style={Estilos.buttonP}
            onPress={() => {
              setTitle(`${dadosSalvos?.title}`);
              setPrice(`${dadosSalvos?.price}`);
              setImage(`${dadosSalvos?.image}`);
              setModalVisible(true);
            }}
          />
          <View>
            <Text></Text>
          </View>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ImageBackground
            source={require('../assets/imagens/brilho.gif')}
            resizeMode="cover"
            style={Estilos.appImage}>
            <View style={Estilos.centeredView}>
              <View style={Estilos.modalView}>
                <Text style={Estilos.modalTextTitle}>
                  Confirmação de pagamento
                </Text>
                <View style={Estilos.alignVertical}>
                  <PressableButton
                    title="Confirmar"
                    style={Estilos.buttonP}
                    onPress={comprar}
                  />
                  <View style={Estilos.f1} />
                  <PressableButton
                    title="Cancelar"
                    style={Estilos.buttonP}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
