import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello world</Text>
      <Text>Open up App.js to start!</Text>
      <StatusBar style="auto" />
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Dobry den')}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 120,
    fontWeight: 500,
    color: '#fff',
  },

  container: {
    flex: 1,
    backgroundColor: '#2d2d30',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
