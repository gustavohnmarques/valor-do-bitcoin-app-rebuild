
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './navigation/BottomTabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native';
import CustomToast from './components/CustomToast/CustomToast';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <BottomTabs />
          <CustomToast />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
