import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react-native';
import './global.css';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={styles.container}
      className="bg-black flex-1 items-center justify-center"
    >
      <Text className="text-white font-medium">Hallo Dunia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
