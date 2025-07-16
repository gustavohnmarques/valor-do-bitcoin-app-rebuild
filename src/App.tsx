
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './navigation/BottomTabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <BottomTabs />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
