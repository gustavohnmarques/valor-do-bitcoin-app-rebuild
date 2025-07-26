
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './navigation/BottomTabs';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native';
import CustomToast from './components/CustomToast/CustomToast';
import { LoaderProvider } from './contexts/LoaderContext';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoaderProvider>
        <BottomSheetModalProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <BottomTabs />
            <CustomToast />
          </SafeAreaView>
        </BottomSheetModalProvider>
      </LoaderProvider>
    </GestureHandlerRootView>
  );
};

export default App;
