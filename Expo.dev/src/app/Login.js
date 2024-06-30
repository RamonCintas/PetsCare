import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Image,
  SafeAreaView,
  Modal,
  Pressable,
  ImageBackground,
} from 'react-native';
import ValidarLogin, {
  EMAIL,
  MENSAGEM_EMAIL,
  MENSAGEM_SENHA,
  SENHA,
} from './LoginService';
import Estilos from '../assets/Estilos/Estilos';

import { Icon } from '@rneui/themed';

const App = ({ navigation }) => {
  const [user, setUser] = useState(EMAIL);
  const [password, setPassword] = useState(SENHA);
  const [activity, setActivity] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');

  let parametros = {
    user: user,
    password: password,
    navigation: navigation,
    activity: setActivity,
    modalVisible: setModalVisible,
    description: setDescription,
  };

  const PressableButton = ({ onPress, title, style }) => {
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={Estilos.buttonText}>{title}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={Estilos.safeAreaView}>
      <ImageBackground
        source={require('../assets/imagens/background.png')}
        style={Estilos.appImage}
        imageStyle={{ opacity: 0.3 }}>
        <View style={[Estilos.safeAreaViewlogin, { padding: 20 }]}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <ImageBackground
              source={require('../assets/imagens/brilho.gif')}
              resizeMode="cover"
              style={Estilos.appImage}>
              <View style={Estilos.centeredView}>
                <View style={Estilos.modalView}>
                  <Text style={Estilos.modalText}>{description}</Text>
                  <PressableButton
                    title="Fechar"
                    style={Estilos.buttonP}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
              </View>
            </ImageBackground>
          </Modal>
          <Image
            style={Estilos.logo}
            source={require('../assets/imagens/petlogin.png')}
          />

          <Text style={Estilos.titlelogin}>
            <Icon name="envelope" type="font-awesome" color="#fff" /> E-mail:
          </Text>
          <TextInput
            autoCorrect={false}
            placeholder={MENSAGEM_EMAIL}
            style={Estilos.textInput}
            clearButtonMode="always"
            defaultValue={EMAIL}
            onChangeText={(value) => setUser(value)}
          />
          <View>
            <Text></Text>
          </View>
          <Text style={Estilos.titlelogin}>
            <Icon name="key" type="font-awesome" color="#fff" /> Senha:
          </Text>
          <TextInput
            autoCorrect={false}
            placeholder={MENSAGEM_SENHA}
            secureTextEntry={true}
            style={Estilos.textInput}
            clearButtonMode="always"
            defaultValue={SENHA}
            onChangeText={(value) => setPassword(value)}
          />
          <View>
            <Text></Text>
          </View>
          <PressableButton
            title="Entrar"
            style={Estilos.buttonP}
            onPress={() => {
              ValidarLogin(parametros);
            }}
          />
          <View style={Estilos.activelogin}>
            <ActivityIndicator size="large" animating={activity} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
