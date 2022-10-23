import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import FlashMessage from 'react-native-flash-message';

import AppStack from './src/navigators/AppStack';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <NavigationContainer>
        <AppStack />
        <FlashMessage position="top" />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
