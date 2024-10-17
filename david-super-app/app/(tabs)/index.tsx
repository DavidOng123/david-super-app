import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledText } from '@/components/StyledText';
import { MaterialIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.threedmodal}>
          <View style={styles.earth}></View>
        </View>
        <View style={{  flexDirection: 'row',marginTop: 20 }}>
          <View style={{ flex: 8 }}>
            <StyledText type='normal' >Plans</StyledText>
            <StyledText type='subtitle'>Click To Add Plan</StyledText>
          </View>
          <View style={{ flex: 2, alignItems: 'flex-end', marginRight:10 }}>
            <TouchableOpacity style={styles.button}>
              <StyledText type='normal'>Add</StyledText>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    marginHorizontal: 2
  },
  threedmodal: {
    width: "100%",
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  earth: {
    backgroundColor: 'black',
    width: 300,
    height: 300,
    borderRadius: 300,
  },
  button:{
    width:70,
    marginTop:5,
    height:30,
    backgroundColor:'#001645',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
  }
});
