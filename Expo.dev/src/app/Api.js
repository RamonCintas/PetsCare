import { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Alert,
  Modal,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';

import Estilos from '../assets/Estilos/Estilos';

export default function App() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [meta, setMeta] = useState('');
  const [doacoes, setDoacoes] = useState([]);
  const [editId, setEditId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [nomeId, setNomeId] = useState('');
  const [descricaoId, setDescricaoId] = useState('');
  const [metaId, setMetaId] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleCreate = async () => {
    const doacao = { nome, descricao, meta };
    try {
      const response = await fetch(
        'https://petscare-render.onrender.com/api/cadastrar',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(doacao),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      Alert.alert('Sucesso', 'Doação criada com sucesso!');
      setNome('');
      setDescricao('');
      setMeta('');
      fetchDoacoes();
      console.log('(AVISO API CREATE) Doação criada com sucesso', doacao);
    } catch (error) {
      console.error('Error criar doação:', error.message);
      Alert.alert('Error', 'Falha para criar doação: ' + error.message);
    }
  };

  const handleEdit = async () => {
    const doacao = {
      id: editId,
      nome: nomeId,
      descricao: descricaoId,
      meta: metaId,
    };
    try {
      const response = await fetch(
        `https://petscare-render.onrender.com/api/editar/${editId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(doacao),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      Alert.alert('Sucesso', 'Doação editada com sucesso');
      setModalVisible(false);
      fetchDoacoes();
      console.log('(AVISO API UPDATE) Doação editada com sucesso', doacao);
    } catch (error) {
      console.error('Error editar doação:', error.message);
      Alert.alert('Error', 'Falha para editar doação: ' + error.message);
    }
  };

  const fetchDoacoes = async () => {
    try {
      const response = await fetch(
        'https://petscare-render.onrender.com/api/doacoes'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setDoacoes(result);
      console.log('(AVISO API READ) Doações encontradas', result);
    } catch (error) {
      console.error('Error buscar doações:', error.message);
    }
  };

  const handleEditInit = (id) => {
    const itemToEdit = doacoes.find((item) => item.id === id);
    setEditId(itemToEdit.id);
    setNomeId(itemToEdit.nome);
    setDescricaoId(itemToEdit.descricao);
    setMetaId(itemToEdit.meta);
    setModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://petscare-render.onrender.com/api/doacao/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      Alert.alert('Sucesso', 'Doação deletada com sucesso');
      fetchDoacoes();
      console.log('(AVISO API DELETE) Doação removida id:', id);
    } catch (error) {
      console.error('Error Deletar doação:', error.message);
      Alert.alert('Error', 'Falha para deletar doação: ' + error.message);
    }
  };

  const handleSearch = () => {
    if (searchName === '') {
      fetchDoacoes();
    } else {
      const results = doacoes.filter((item) =>
        item.nome.toLowerCase().includes(searchName.toLowerCase())
      );
      if (results.length > 0) {
        setDoacoes(results);
      } else {
        Alert.alert('Sem resultado', 'Nenhuma doação encontrada com esse nome');
      }
    }
  };

  useEffect(() => {
    fetchDoacoes();
  }, []);

  const metamascara = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
    setMeta(value);
  };

  const metaidmascara = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
    setMetaId(value);
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaInsetsContext.Consumer>
          {(insets) => (
            <SafeAreaView style={Estilos.formContainer}>
              <ScrollView>
                <View style={Estilos.container}>
                  <Text style={Estilos.sobreText}>Doações Online</Text>
                  <Text style={[Estilos.sobreText, { textAlign: 'justify' }]}>
                    Faça parte da mudança que os pets precisam, cuidando dos que
                    não podem pedir ajuda.
                  </Text>
                  <Text style={Estilos.sobreText}>
                    Doe generosidade e esperança
                  </Text>
                  <View>
                    <Text></Text>
                  </View>
                  <Text style={Estilos.loginLabel}>Nome da causa:</Text>
                  <TextInput
                    style={Estilos.textInput2}
                    placeholder="Digite o nome"
                    value={nome}
                    onChangeText={setNome}
                    numberOfLines={4}
                    maxLength={100}
                    editable
                    multiline
                  />
                  <View>
                    <Text></Text>
                  </View>
                  <Text style={Estilos.loginLabel}>Descrição da causa:</Text>
                  <TextInput
                    style={Estilos.textInput2}
                    placeholder="Digite a descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                    numberOfLines={4}
                    maxLength={100}
                    editable
                    multiline
                  />
                  <View>
                    <Text></Text>
                  </View>
                  <Text style={Estilos.loginLabel}>Meta de arrecadação:</Text>
                  <TextInput
                    style={Estilos.textInput}
                    placeholder="Digite a meta R$"
                    value={meta}
                    onChangeText={metamascara}
                    keyboardType="numeric"
                  />
                  <View>
                    <Text></Text>
                  </View>
                  <Pressable style={Estilos.buttonP} onPress={handleCreate}>
                    <Text style={Estilos.buttonText}>Adicionar</Text>
                  </Pressable>

                  <View>
                    <Text></Text>
                  </View>

                  <Text style={Estilos.titleapi}>Doações disponíveis</Text>

                  <Text style={Estilos.loginLabel}>Pesquisar por nome:</Text>
                  <TextInput
                    style={Estilos.textInput}
                    placeholder="Nome da causa"
                    value={searchName}
                    onChangeText={setSearchName}
                  />
                  <View>
                    <Text></Text>
                  </View>
                  <Pressable style={Estilos.buttonP} onPress={handleSearch}>
                    <Text style={Estilos.buttonText}>Pesquisar</Text>
                  </Pressable>

                  <FlatList
                    data={doacoes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <Card style={Estilos.card}>
                        <Card.Content>
                          <Title>Nome: {item.nome}</Title>
                          <Paragraph>Descrição: {item.descricao}</Paragraph>
                          <Paragraph>Meta: R$ {item.meta}</Paragraph>
                          <View style={Estilos.buttonContainer}>
                            <Pressable
                              style={Estilos.buttonP}
                              onPress={() => handleEditInit(item.id)}>
                              <Text style={Estilos.buttonText}>Editar</Text>
                            </Pressable>
                            <Pressable
                              style={Estilos.buttonP}
                              onPress={() => handleDelete(item.id)}>
                              <Text style={Estilos.buttonText}>Deletar</Text>
                            </Pressable>
                          </View>
                        </Card.Content>
                      </Card>
                    )}
                  />
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}>
                    <ImageBackground
                      source={require('../assets/imagens/brilho.gif')}
                      resizeMode="cover"
                      style={Estilos.appImage}>
                      <View>
                        <ScrollView>
                          <View style={Estilos.modalapi}>
                            <Text style={Estilos.modalTextTitle}>
                              Editar doação
                            </Text>
                            <TextInput
                              style={Estilos.textInput2}
                              placeholder="Nome"
                              value={nomeId}
                              onChangeText={setNomeId}
                              numberOfLines={4}
                              maxLength={100}
                              editable
                              multiline
                            />
                            <TextInput
                              style={Estilos.textInput2}
                              placeholder="Descrição"
                              value={descricaoId}
                              onChangeText={setDescricaoId}
                              numberOfLines={4}
                              maxLength={100}
                              editable
                              multiline
                            />
                            <TextInput
                              style={Estilos.textInput}
                              placeholder="Meta"
                              value={metaId}
                              onChangeText={metaidmascara}
                            />

                            <View>
                              <Text></Text>
                            </View>
                            <View style={Estilos.alignVertical}>
                              <Pressable
                                style={Estilos.buttonP}
                                onPress={handleEdit}>
                                <Text style={Estilos.buttonText}>
                                  Atualizar
                                </Text>
                              </Pressable>

                              <View style={Estilos.f1} />
                              <Pressable
                                style={Estilos.buttonP}
                                onPress={() => setModalVisible(false)}>
                                <Text style={Estilos.buttonText}>Cancelar</Text>
                              </Pressable>
                            </View>
                          </View>
                        </ScrollView>
                      </View>
                    </ImageBackground>
                  </Modal>
                </View>
              </ScrollView>
            </SafeAreaView>
          )}
        </SafeAreaInsetsContext.Consumer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
