
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './navigation/BottomTabs';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomTabs />
    </GestureHandlerRootView>
  );
};

export default App;
