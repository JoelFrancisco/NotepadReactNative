import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CartaoTexto from '@componentes/CartaoTexto';

import EditorDeTexto from '@telas/EditorDeTexto';

const { width, height } = Dimensions.get('window');

const ScrollContainerPrincipal = styled.ScrollView`
  height: ${height}px;
  width: ${width}px;
  position: absolute;
`;

const ContainerPrincipal = styled.View`
  height: ${height}px;
  width: ${width}px;
  align-items: center;
  justify-content: space-around;
`;

const Botao = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50px;
  position: relative;
  bottom: 50px;
  right: 5px;
`;

const Incio = () => {
  const [renderEditor, setRenderEditor] = useState(false);
  const [textos, setTextos] = useState([])
  
  useEffect(() => {
    (async () => {
      let keys = []
      try {
        keys = await AsyncStorage.getAllKeys();
      } catch (err) {
        console.error(err);
      }
      
      let values
      try {
        values = await AsyncStorage.multiGet(keys)
      } catch(err) {
        console.error(err)
      }
      
      setTextos(values);
    })()
  }, [])
  
  useEffect(() => {
    for (conjunto in textos) {
      const [titulo, texto] = conjunto
      
    }
  }, [textos])
  
  const renderCartoes = () => {
    for (item in textos) {
      const { titulo, texto } = item;
      
    }
  }

  return (
    <>
      <StatusBar hidden={true} />
      { 
        renderEditor && 
        <EditorDeTexto 
          setRenderEditor={setRenderEditor} 
          setTextos={setTextos} 
          textos={textos}
        />
      }
      { 
        !renderEditor &&
        <ScrollContainerPrincipal>
          <ContainerPrincipal>
            <FlatList/>
          </ContainerPrincipal>
          <Botao onPress={() => setRenderEditor(true)}/>
        </ScrollContainerPrincipal>
      }
    </>
  );
}

export default Incio;
