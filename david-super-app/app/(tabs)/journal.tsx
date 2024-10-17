
import { StyleSheet, Image, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  content:{
    flex:1,
    marginHorizontal:2
  }
});
