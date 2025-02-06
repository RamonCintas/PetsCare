import { useEffect, useRef } from 'react';
import {
  Animated,
  ImageBackground,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import Estilos from './src/assets/Estilos/Estilos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/app/Login';
import Sobre from './src/app/Sobre';
import Produtos from './src/app/Produtos';
import CadastroCliente from './src/app/CadastroCliente';
import CadastroClinica from './src/app/CadastroClinica';
import CadastroProduto from './src/app/CadastroProduto';
import Dados from './src/app/Dados';
import Anuncio from './src/app/Anuncio';
import FormaPagamento from './src/app/FormaPagamento';
import SituacaoPedido from './src/app/SituacaoPedido';
import Findpets from './src/app/Findpets';
import Api from './src/app/Api';
import { useFocusEffect } from '@react-navigation/native';
import { ProductProvider } from './src/app/ProductContext';

const Stack = createNativeStackNavigator();

const Top = createMaterialTopTabNavigator();

const Tops = () => {
  return (
    <Top.Navigator
      tabBarOptions={{}}
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarActiveTintColor: '#118E96',
        tabBarInactiveTintColor: '#424141',
        tabBarStyle: Estilos.tab,
      })}>
      <Top.Screen
        name="CadastroCliente"
        component={CadastroCliente}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/adicionar-usuario.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
      <Top.Screen
        name="CadastroClinica"
        component={CadastroClinica}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/veterinario.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
      <Top.Screen
        name="CadastroProduto"
        component={CadastroProduto}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/bolsa-de-compras.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
      <Top.Screen
        name="Api"
        component={Api}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/doacao.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
    </Top.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#118E96',
        tabBarInactiveTintColor: '#424141',
        tabBarStyle: Estilos.tab,
      })}>
      <Tab.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/shopping-cart.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cadastros"
        component={Tops}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/cadastrar.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Findpets"
        component={Findpets}
        options={{
          title: 'Findpets',
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabiconweb}>
              <Image
                source={require('./src/assets/imagens/find-pets.png')}
                style={[
                  Estilos.tabiconimageweb,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/login.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={Estilos.tabicon}>
              <Image
                source={require('./src/assets/imagens/about.png')}
                style={[
                  Estilos.tabiconimage,
                  { tintColor: focused ? '#118E96' : '#424141' },
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Main = ({ navigation }) => {
  useFocusEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Inicio');
    }, 3000);
    return () => clearTimeout(timer);
  });
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}>
        {props.children}
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={Estilos.inicioapp}>
      <View>
        <FadeInView>
          <View>
            <Image
              style={Estilos.pata}
              source={require('./src/assets/imagens/PATA.png')}
            />
          </View>
          <Text style={[Estilos.titulo, { fontSize: 25 }]}>PetsCare</Text>
          <View>
            <Text></Text>
          </View>
          <Text style={[Estilos.titulo, { fontSize: 20 }]}>
            Seja bem-vindo(a)
          </Text>
          <View>
            <Text></Text>
          </View>
          <Image
            style={Estilos.dog}
            source={require('./src/assets/imagens/dog-carregando.gif')}
          />
          <ImageBackground
            source={require('./src/assets/imagens/inicio.png')}
            style={Estilos.inicio}></ImageBackground>
          <View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </FadeInView>
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#000',
            headerTitleAlign: 'center',
            headerStyle: Estilos.stack,
          }}>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
              headerTitle: 'PetsCare',
            }}
          />
          <Stack.Screen
            name="Inicio"
            component={Tabs}
            options={{
              headerTitle: 'PetsCare',
            }}
          />
          <Stack.Screen
            name="Cadastros"
            component={Tops}
            options={{
              headerTitle: 'PetsCare',
            }}
          />
          <Top.Screen
            name="CadastroCliente"
            component={CadastroCliente}
            options={{ title: 'PetsCare' }}
          />
          <Top.Screen
            name="CadastroClinica"
            component={CadastroClinica}
            options={{ title: 'PetsCare' }}
          />
          <Top.Screen
            name="CadastroProduto"
            component={CadastroProduto}
            options={{ title: 'PetsCare' }}
          />

          <Stack.Screen
            name="Dados"
            component={Dados}
            options={{ title: 'PetsCare' }}
          />
          <Stack.Screen
            name="Anuncio"
            component={Anuncio}
            options={{ title: 'PetsCare' }}
          />
          <Stack.Screen
            name="FormaPagamento"
            component={FormaPagamento}
            options={{ title: 'PetsCare' }}
          />
          <Stack.Screen
            name="SituacaoPedido"
            component={SituacaoPedido}
            options={{ title: 'PetsCare' }}
          />
          <Stack.Screen
            name="Findpets"
            component={Findpets}
            options={{ title: 'PetsCare' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
