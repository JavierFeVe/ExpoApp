import { Button,View,Text,FlatList} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Platform} from "react-native";
import Home from "./pages/Home";
import News from "./pages/News";
import Settings from "./pages/Settings";
import styles from "./styles";

const data = new Array(100)
  .fill(null)
  .map((v,i) => ({key: i.toString(),value: `Item ${i}`
  }));

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}