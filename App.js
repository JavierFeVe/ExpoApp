import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boxText}>
            Saikoneta
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  boxText: {
    color:"darkslategray",
    fontWeight: "bold",
  },
  box:{
    width:100,
    height: 100,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"lightgray",
  }
});
