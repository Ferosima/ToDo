import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import mainStore from './src/domain/stores';
import NavigationProvider from './src/view/navigation/NavigationProvider';

function App(): JSX.Element {
  useEffect(() => {
    async () => {
      try {
        // Hydrate all stores in init

        await Promise.all(
          Object.values(mainStore).map(async store => {
            if (store.hydrateStore) {
              await store.hydrateStore();
            }
          }),
        );
      } catch (error) {
        console.error('hydrateStore', error);
      }
    };
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationProvider />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
