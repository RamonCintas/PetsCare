import { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, Image, FlatList, SafeAreaView, Pressable, Modal, ScrollView, ImageBackground, TouchableOpacity, Switch, Layout } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import Estilos from '../assets/Estilos/Estilos';
import { ProductContext } from './ProductContext';

const App = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [item, setItem] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [resumo, setResumo] = useState('');
  const [observacao, setObservacao] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [list, setList] = useState([]);
  const [valores, setValores] = useState([]);
  const { carouselEntries, listEntries } = useContext(ProductContext);
  const [filterDogs, setFilterDogs] = useState(false);
  const [filterCats, setFilterCats] = useState(false);
  const [filterBoth, setFilterBoth] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(carouselEntries);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = [...carouselEntries, ...listEntries];

      if (filterBoth) {
        filtered = filtered.filter((product) => product.tipo && (product.tipo.toLowerCase().includes('cão') || product.tipo.toLowerCase().includes('gato')));
      } else {
        if (filterDogs) {
          filtered = filtered.filter((product) => product.tipo && product.tipo.toLowerCase().includes('cão'));
        }

        if (filterCats) {
          filtered = filtered.filter((product) => product.tipo && product.tipo.toLowerCase().includes('gato'));
        }
      }

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [filterDogs, filterCats, filterBoth, carouselEntries, listEntries]);

  const FilterComponent = ({ filterDogs, setFilterDogs, filterCats, setFilterCats, filterBoth, setFilterBoth }) => {
    const handleBothChange = () => {
      setFilterBoth(!filterBoth);
      setFilterDogs(false);
      setFilterCats(false);
    };

    const handleDogsChange = () => {
      setFilterDogs(!filterDogs);
      setFilterBoth(false);
    };

    const handleCatsChange = () => {
      setFilterCats(!filterCats);
      setFilterBoth(false);
    };

    return (
      <View style={Estilos.filtroboxcontainer}>
        <View style={Estilos.filtrobox}>
          <Switch value={filterDogs} onValueChange={handleDogsChange} />
          <Image style={Estilos.filtroicone} source={require('../assets/imagens/shiba.png')} />
        </View>
        <View style={Estilos.filtrobox}>
          <Switch value={filterBoth} onValueChange={handleBothChange} />
          <View style={Estilos.alignVertical}>
            <Image style={Estilos.filtroicone} source={require('../assets/imagens/retriever-dourado.png')} />
            <Image style={Estilos.filtroicone} source={require('../assets/imagens/gato.png')} />
          </View>
        </View>
        <View style={Estilos.filtrobox}>
          <Switch value={filterCats} onValueChange={handleCatsChange} />
          <Image style={Estilos.filtroicone} source={require('../assets/imagens/cat.png')} />
        </View>
      </View>
    );
  };

  const calcularTotal = () => {
    return list.reduce((total, item) => total + item.price, 0);
  };

  const levardados = async () => {
    const dados = {
      id: Math.floor(Math.random() * 10000).toString(),
      titulo,
      preco,
      imagem,
      resumo,
      observacao,
      codigo,
      descricao,
    };

    try {
      await AsyncStorage.setItem(dados.id, JSON.stringify(dados));
      setModalVisible(!modalVisible);
      navigation.navigate('Anuncio', { dados });
    } catch (error) {
      alert('Erro ao buscar anúncio');
    }
  };

  const levarcarrinho = () => {
    const total = calcularTotal().toFixed(2);
    if (total > 0) {
      setModalVisible2(!modalVisible2);
      navigation.navigate('FormaPagamento', { list, valores: [{ itens: list.reduce((total, item) => total + (item.quantidade || 0), 0), total }] });
    } else {
      alert('Seu carrinho está vazio! Adicione itens antes de prosseguir.');
    }
  };

  const PressableButton2 = ({ onPress, title, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={Estilos.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  const Carrinhobotao = ({ onPress, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Image
          style={Estilos.carrinho}
          source={require('../assets/imagens/carrinho-de-compras.png')}
        />
      </Pressable>
    );
  };

  const Carrinhobotaobanner = ({ onPress, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Image
          style={Estilos.carrinhobanner}
          source={require('../assets/imagens/carrinho-de-compras.png')}
        />
      </Pressable>
    );
  };

  const Remover = ({ onPress, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Image
          style={Estilos.carrinhobotao}
          source={require('../assets/imagens/remover-carrinho.png')}
        />
      </Pressable>
    );
  };

  const Carousel = () => {
    const [activeBanner, setActiveBanner] = useState(0);

    const FlatListRef = useRef(null);

    const onViewableItemsChanged = ({ viewableItems }: any) => {
      if (viewableItems[0] !== undefined) {
        setActiveBanner(viewableItems[0]?.index);
      }
    };

    const viewabilityConfigCallbackPairs = useRef([
      {
        viewabilityConfig: {
          itemVisiblePercentThreshold: 80,
        },
        onViewableItemsChanged,
      },
    ]);

    const totalItemCount = carouselEntries.length;

    useEffect(() => {
      const safeIndex = (activeBanner + 1) % totalItemCount;

      const timeId = setTimeout(() => {
        setActiveBanner((old) => (old + 1) % totalItemCount);
        FlatListRef.current?.scrollToIndex({
          index: safeIndex,
          Animated: true,
        });
      }, 3000);

      return () => clearTimeout(timeId);
    }, [activeBanner, totalItemCount]);

    return (
      <View>
        <FlatList
          ref={FlatListRef}
          data={carouselEntries}
          renderItem={({ item, index }) => (
            <View style={Estilos.item}>
              <TouchableOpacity
                onPress={() => {
                  setItem(item);
                  setTitulo(`${item?.title}`);
                  setPreco(`${item?.price}`);
                  setImagem(`${item?.image}`);
                  setResumo(`${item?.resume}`);
                  setObservacao(`${item?.obs}`);
                  setCodigo(`${item?.cod}`);
                  setDescricao(`${item?.descricao}`);
                  setModalVisible(true);
                }}>
                <Image source={item.image2} style={Estilos.image2} />
              </TouchableOpacity>

              <View style={Estilos.alignVertical}>
                <TouchableOpacity
                  onPress={() => {
                    let safeIndex =
                      (activeBanner - 1 + totalItemCount) % totalItemCount;

                    setActiveBanner(safeIndex);
                    FlatListRef.current?.scrollToIndex({
                      index: safeIndex,
                      animated: true,
                    });
                  }}>
                  <Image
                    source={require('../assets/imagens/seta-esquerda.png')}
                    style={Estilos.seta}
                  />
                </TouchableOpacity>
                <View style={Estilos.f2} />
                <Carrinhobotaobanner
                  onPress={() => {
                    const existingItem = list.find(
                      (listItem) => listItem.id === item.id
                    );
                    if (existingItem) {
                      existingItem.price = existingItem.price + item?.price;
                      existingItem.quantidade =
                        (existingItem.quantidade || 0) + 1;
                    } else {
                      list.push({
                        id: item?.id,
                        title: `${item?.title}`,
                        price: item?.price,
                        preco1: item?.preco1,
                        image: `${item?.image}`,
                        resume: `${item?.resume}`,
                        obs: `${item?.obs}`,
                        cod: `${item?.cod}`,
                        descricao: `${item?.descricao}`,
                        quantidade: 1,
                      });
                    }
                    setList([...list]);
                    setModalVisible2(true);
                  }}
                />
                <View style={Estilos.f2} />
                <TouchableOpacity
                  onPress={() => {
                    let safeIndex =
                      (activeBanner + 1 + totalItemCount) % totalItemCount;

                    setActiveBanner(safeIndex);
                    FlatListRef.current?.scrollToIndex({
                      index: safeIndex,
                      animated: true,
                    });
                  }}>
                  <Image
                    source={require('../assets/imagens/seta-direita.png')}
                    style={Estilos.seta}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          pagingEnabled
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          horizontal
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
        />

        <FlatList
          data={carouselEntries}
          renderItem={({ item, index }) => (
            <Animated.View
              layout={Layout}
              entering={FadeInLeft}
              exiting={FadeOutRight}
              style={{
                width: activeBanner === index ? 20 : 10,
                height: 10,
                borderRadius: 4,
                marginBottom: 10,
                backgroundColor:
                  activeBanner === index ? '#F6C953' : '#f6c9536e',
                marginHorizontal: 2,
              }}
            />
          )}
          style={{
            alignSelf: 'center',
          }}
          scrollEnabled={false}
          horizontal
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    );
  };

  const DATA = [
    {
      image: require('../assets/imagens/b1.png'),
    },
    {
      image: require('../assets/imagens/b2.png'),
    },
  ];

  const Carousel2 = () => {
    const [activeBanner, setActiveBanner] = useState(0);
    const FlatListRef = useRef(null);
    const totalItemCount = DATA.length;

    useEffect(() => {
      const timeId = setInterval(() => {
        const nextIndex = (activeBanner + 1) % totalItemCount;
        setActiveBanner(nextIndex);
        FlatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }, 3000);

      return () => clearInterval(timeId);
    }, [activeBanner, totalItemCount]);

    return (
      <View>
        <FlatList
          ref={FlatListRef}
          data={DATA}
          renderItem={({ item }) => (
            <View style={Estilos.item}>
              <Image source={item.image} style={Estilos.image2} />
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          onMomentumScrollEnd={(event) => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            setActiveBanner(index);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          {DATA.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor:
                  activeBanner === index ? '#F6C953' : '#f6c9536e',
              }}
              onPress={() => {
                setActiveBanner(index);
                FlatListRef.current?.scrollToIndex({ index, animated: true });
              }}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderSecondItem = ({ item }) => {
    return (
      <View style={Estilos.boxcontainer}>
        <View style={Estilos.box}>
          <TouchableOpacity
            onPress={() => {
              setItem(item);
              setTitulo(`${item?.title}`);
              setPreco(`${item?.price}`);
              setImagem(`${item?.image}`);
              setResumo(`${item?.resume}`);
              setObservacao(`${item?.obs}`);
              setCodigo(`${item?.cod}`);
              setDescricao(`${item?.descricao}`);
              setModalVisible(true);
            }}>
            <Image source={item.image} style={Estilos.image} />
          </TouchableOpacity>
          <View>
            <Text></Text>
          </View>

          <View style={Estilos.alignVertical}>
            <View>
              <Image
                style={Estilos.estrelas3}
                source={require('../assets/imagens/estrelas.png')}
              />
              <Text style={Estilos.modalTextbanner}>R$ {item.price}</Text>
            </View>
            <View style={Estilos.f1} />

            <Carrinhobotao
              onPress={() => {
                const existingItem = list.find(
                  (listItem) => listItem.id === item.id
                );
                if (existingItem) {
                  existingItem.price = existingItem.price + item?.price;
                  existingItem.quantidade = (existingItem.quantidade || 0) + 1;
                } else {
                  list.push({
                    id: item?.id,
                    title: `${item?.title}`,
                    price: item?.price,
                    preco1: item?.preco1,
                    image: `${item?.image}`,
                    resume: `${item?.resume}`,
                    obs: `${item?.obs}`,
                    cod: `${item?.cod}`,
                    descricao: `${item?.descricao}`,
                    quantidade: 1,
                  });
                }
                setList([...list]);
                setModalVisible2(true);
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  const remover = (removeItem) => {
    const updatedList = list
      .map((item) => {
        if (item.id === removeItem.id) {
          return {
            ...item,
            quantidade: item.quantidade - 1,
            price: item.price - item.preco1,
          };
        }
        return item;
      })
      .filter((item) => item.quantidade > 0);
    setList(updatedList);
  };

  const carrinho = ({ item }) => {
    return (
      <View style={Estilos.carrinhoitem}>
        <Image source={item.image} style={Estilos.secondImage} />
        <Text style={Estilos.titleP}>
          N° {item.quantidade} R$ {item.price.toFixed(2)}
        </Text>
        <Remover onPress={() => remover(item)} />
      </View>
    );
  };

  const calcularTotalProdutos = () => {
    return list.reduce((total, item) => total + (item.quantidade || 0), 0);
  };


  return (
    <SafeAreaView style={Estilos.containerP}>
      <ScrollView>
        <View style={Estilos.carouselContainer}>
          <Carousel />
        </View>

        <View style={Estilos.filtrosContainer}>
          <FilterComponent
            filterDogs={filterDogs}
            setFilterDogs={setFilterDogs}
            filterCats={filterCats}
            setFilterCats={setFilterCats}
            filterBoth={filterBoth}
            setFilterBoth={setFilterBoth}
          />
        </View>

        <View style={Estilos.listContainer}>
          <FlatList
            data={filteredProducts}
            renderItem={renderSecondItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </View>
        <View style={Estilos.carouselContainer}>
          <Carousel2 />
        </View>
        <View>
          <Text></Text>
        </View>


          <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ImageBackground
            source={require('../assets/imagens/brilho.gif')}
            resizeMode="cover"
            style={Estilos.appImage}>
            <View style={Estilos.centeredView}>
              <View style={Estilos.modalView}>
                <ScrollView>
                  <Text style={Estilos.modalTextTitle}>{item?.title}</Text>
                  <Text
                    style={
                      Estilos.modalText
                    }>{`Resumo:\n ${item?.resume} \nPor apenas R$ ${item?.price}`}</Text>
                  <Text style={Estilos.modalTextTitle}>
                    Avaliação de 5 estrelas
                  </Text>
                  <Image
                    style={Estilos.estrelas}
                    source={require('../assets/imagens/estrelas.png')}
                  />
                </ScrollView>
                <View style={Estilos.alignVertical}>
                  <PressableButton2
                    title="Detalhes"
                    style={Estilos.buttonP}
                    onPress={levardados}
                  />
                  <View style={Estilos.f1} />
                  <PressableButton2
                    title="Fechar"
                    style={Estilos.buttonP}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </Modal>

        <Modal animationType="slide" transparent={false} visible={modalVisible2}>
          <View style={Estilos.centerviewcarrinho}>
            <View style={Estilos.modalcarrinho}>
              <View>
                <Text></Text>
              </View>
              <Text style={Estilos.modalTextTitle}>Produtos adicionados</Text>
              <ScrollView>
                <View style={Estilos.carrinholista}>
                  <FlatList
                    data={list}
                    renderItem={carrinho}
                    keyExtractor={(index) => index.toString()}
                  />
                </View>
              </ScrollView>
              <View>
                <Text></Text>
              </View>
              <Text>Quantidade total de produtos: {calcularTotalProdutos()}</Text>

              <View>
                <Text>Valor total: R$ {calcularTotal().toFixed(2)}</Text>
              </View>

              <View>
                <Text></Text>
              </View>

              <View style={Estilos.alignVertical}>
                <PressableButton2
                  title="Comprar"
                  style={Estilos.buttonP}
                  onPress={levarcarrinho}
                />
                <View style={Estilos.f1} />
                <PressableButton2
                  title="Fechar"
                  style={Estilos.buttonP}
                  onPress={() => setModalVisible2(!modalVisible2)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
