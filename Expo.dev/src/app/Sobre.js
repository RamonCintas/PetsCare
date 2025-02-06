import React from 'react';
import { ImageBackground, Text, View, SafeAreaView } from 'react-native';
import Estilos from '../assets/Estilos/Estilos';

const SobreScreen = () => {
  return (
    <SafeAreaView style={Estilos.safeAreaView}>
      <View style={Estilos.appContainer}>
        <ImageBackground
          source={require('../assets/imagens/sobre.jpg')}
          resizeMode="cover"
          style={Estilos.sobreimg}
          imageStyle={{ opacity: 0.3 }}>
          <Text style={Estilos.sobreText}>PetsCare</Text>
          <Text style={Estilos.sobreText}>Delivery de produtos para pets</Text>
          <Text style={Estilos.sobreText}>Desenvolvedores</Text>
          <Text style={Estilos.sobreText}>Camila Assunção</Text>
          <Text style={Estilos.sobreText}>Ramon Cintas</Text>
          <Text style={Estilos.sobreText}>Sueli Alves</Text>
          <Text style={Estilos.sobreText}>Thiago Faria</Text>
          <Text style={Estilos.sobreText}>Abril/2024</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default SobreScreen;
