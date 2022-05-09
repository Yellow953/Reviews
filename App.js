import React from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  return (
    <Navigator />
  );
}