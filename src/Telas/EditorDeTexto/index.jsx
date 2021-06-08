import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { AdicionarDados } from '@servicos/AsyncStorage';

const { height, width } =  Dimensions.get('window');

const ContainerEditorDeTexto = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const CartaoEditorDeTexto = styled.TextInput`
  width: ${width*0.9}px;
  height: ${height*0.8}px;
  border: 1px solid #000000;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 10px;
  background-color: #FFFFFF;
`;

const CartaoTituloDoTexto = styled.TextInput`
  width: ${width*0.9}px;
  height: ${height*0.1}px;
  border: 1px solid #000000;
  padding: 10px;
  background-color: #FFFFFF;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const Botao = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50px;
`;

const EditorDeTexto = ({ setRenderEditor, setTextos, textos }) => {
  const [texto, setTexto] = useState("");
  const [titulo, setTitulo] = useState("");

  return (
    <ContainerEditorDeTexto>
      <CartaoTituloDoTexto 
        onChangeText={setTitulo}
      />
      <CartaoEditorDeTexto 
        onChangeText={setTexto}
      />
      <Botao onPress={() => {
        AdicionarDados(titulo, { titulo: titulo, texto: texto});
        setTextos(textos.push(texto));
        setRenderEditor(false);
      }} />
    </ContainerEditorDeTexto>
  );
}

export default EditorDeTexto;