import mainStore from './src/domain/stores';
import NavigationProvider from './src/view/navigation/NavigationProvider';
import React, {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

/**
 *
 */
function App(): JSX.Element {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        // Hydrate all stores in init
        await Promise.all(
          Object.values(mainStore).map(async store => {
            if (store.hydrateStore) {
              await store.hydrateStore();
            }
          }),
        );

        setLoading(false);
      } catch (error) {
        console.error('hydrateStore', error);
      }
    })();
  }, []);

  if (loading) return <></>;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationProvider />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
