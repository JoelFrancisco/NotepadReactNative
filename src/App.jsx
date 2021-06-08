import { registerRootComponent } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

import Inicio from '@telas/Inicio';

const App = () => <Inicio />;

export default registerRootComponent(App);
