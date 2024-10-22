import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const colors = {
  primary: '#F6C953',
  secondary: 'black',
  background: '#f6c9536e',
  background2: '#daeefe',
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  safeAreaViewlogin: {
    flex: 1,
    justifyContent: 'center',
  },
  inicioapp: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'justify',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    width: '90%',
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 0,
  },
  textInput2: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    marginTop: 20,
    width: '90%',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  logo: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    alignSelf: 'center',
  },
  pata: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    alignSelf: 'center',
  },
  dog: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.2,
    alignSelf: 'center',
  },
  inicio: {
    flex: 1,
    height: windowWidth * 0.9,
    alignSelf: 'stretch',
  },
  estrelas: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignSelf: 'center',
  },
  estrelas2: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignSelf: 'left',
  },
  estrelas3: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.02,
    alignSelf: 'center',
  },
  avaliacao: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  appImage: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  sobreimg: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  brilho: {
    flex: 1,
    justifyContent: 'center',
  },
  safeAreaViewI: {
    flex: 1,
    justifyContent: 'center',
  },
  sobreText: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navegacaoText: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerclinica: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainerclinica: {
    backgroundColor: colors.background,
    flex: 1,
    alignSelf: 'stretch',
  },
  containerD: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'justify',
    alignItems: 'left',
  },
  formContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  button: {
    color: 'grey',
    fontSize: 15,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonP: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
  },
  alignVertical: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  titlelogin: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: 'white',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  titleP: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
    flex: 1,
  },
  containerP: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  containerPedido: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
  seta: {
    marginLeft: 20,
    marginRight: 20,
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignSelf: 'center',
  },
  buttonP2: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
  },
  modalTextbanner: {
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 10,
    width: windowWidth - 20,
  },
  image2: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.5,
    alignSelf: 'center',
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 10,
  },
  image: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    alignSelf: 'center',
    borderRadius: 5,
  },
  oferta: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.15,
    borderRadius: 5,
  },
  secondItem: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 10,
    width: windowWidth - 20,
  },
  secondImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  price: {
    fontSize: 15,
  },
  safeAreaViewA: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 5,
  },
  anuncio: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    alignSelf: 'center',
  },
  titulo: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtituloanuncio: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tituloanuncio: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  subtitulo: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  descricao: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    textAlign: 'justify',
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: colors.primary,
  },
  carrinho: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    alignSelf: 'center',
  },
  carrinhobanner: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignSelf: 'center',
  },
  promo: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    alignSelf: 'center',
    bottom: 15,
  },
  carrinhoitem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 10,
    width: windowWidth * 0.7,
  },
  carrinholista: {
    flex: 1,
  },
  centerviewcarrinho: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalcarrinho: {
    margin: 20,
    backgroundColor: colors.background,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  carrinhobotao: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    alignSelf: 'center',
  },
  tab: {
    border: 'none',
    left: 0,
    right: 20,
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 60,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#424141',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 10,
  },
  tabicon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 12,
  },
  tabiconweb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabiconimageweb: {
    width: 50,
    height: 50,
  },
  tabiconimage: {
    width: 25,
    height: 25,
  },
  findpets: {
    flex: 1,
  },
  stack: {
    fontSize: 20,
    backgroundColor: colors.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  f1: {
    flex: 0.1,
  },
  f2: {
    flex: 1,
  },
  activelogin: {
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
  },
  boxcontainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    margin: 10,
    width: '45%',
    borderRadius: 31,
  },
  filtrosContainer: {},
  filtroboxcontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  filtrobox: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    width: '45%',
  },
  filtroicone: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    alignSelf: 'center',
  },
  findcontainer: {
    flex: 1,
  },
  finderrorText: {
    textAlign: 'center',
    color: 'red',
  },
  findtabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background2,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 60,
  },
  findtabIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findtabiconimageweb: {
    width: 50,
    height: 50,
    borderRadius: 31,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  findinicio: {
    flex: 1,
    height: windowWidth * 0.9,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleapi: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    margin: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalapi: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    margin: 20,

    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
  },
});

export default styles;
