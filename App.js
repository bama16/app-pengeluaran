import React from 'react-native';
import './global.css';
import AppNavigation from './src/navigation/appNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
