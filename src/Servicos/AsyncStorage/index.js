import AsyncStorage from '@react-native-async-storage/async-storage';

const AdicionarDados = async (chave, valor) => {
  try {
    const valorEmJson = JSON.stringify(valor);
    await AsyncStorage.setItem(chave, valorEmJson);
  } catch (err) {
    console.error(err);
  }
}

const LerDados = async (chave) => {
  try {
    const valorEmJson = await AsyncStorage.getItem(chave);
    return valorEmJson != null ? JSON.parse(valorEmJson) : null;
  } catch (err) {
    console.error(err);
  }
}

export { AdicionarDados, LerDados }; 