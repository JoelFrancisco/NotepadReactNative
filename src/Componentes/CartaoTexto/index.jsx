import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const ContainerCartao = styled.View`
  width: 90%;
  height: 170px;
  background-color: #000000;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const CartaoTexto = ({ titulo }) => {
  return (
    <ContainerCartao>
      <Text> titulo </Text>
    </ContainerCartao>
  );
}

export default CartaoTexto;