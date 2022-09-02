// import * as Location from "expo-location";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";
// import {
//   ScrollView,
//   Dimensions,
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
// } from "react-native";
// const { width: SCREEN_WIDTH } = Dimensions.get("window"); //return phones demensions.(w,h)

// export default function App() {
//   const [city, setCity] = useState("Loading...");
//   const [days, setDays] = useState([]);
//   const [ok, setOk] = useState(true);

//   const API_KEY = "aed1e1944b20961b4020c5d7172ed8c6";
//   // const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${API_KEY}`;

//   //api should not exist in app ordinary

//   const getWeather = async () => {
//     const { granted } = await Location.requestForegroundPermissionsAsync();
//     if (!granted) {
//       setOk(false);
//     }
//     const {
//       coords: { latitude, longitude },
//     } = await Location.getCurrentPositionAsync({ accuracy: 5 });
//     const location = await Location.reverseGeocodeAsync(
//       { latitude, longitude },
//       { useGoogleMaps: false }
//     );
//     setCity(location[0].city);
//     // console.log(location);
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}`
//     );
//     const json = await response.json();
//     setDays(json.daily);
//   };
//   useEffect(() => {
//     getWeather();
//   }, []);
//   return (
//     <View style={styles.container}>
//       <View style={styles.city}>
//         <Text style={styles.cityName}>{city}</Text>
//       </View>
//       <ScrollView
//         pagingEnabled
//         // indicatorStyle="white"
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.weather}
//         horizontal={true}
//       >
//         {days.length === 0 ? (
//           <View style={styles.day}>
//             <ActivityIndicator />
//           </View>
//         ) : (
//           <View style={styles.day}></View>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "orange",
//   },
//   city: {
//     flex: 1.2,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   cityName: {
//     fontSize: "50",
//     fontWeight: "500",
//   },
//   weather: {},
//   day: {
//     width: SCREEN_WIDTH,
//     alignItems: "center",
//   },
//   temp: {
//     marginTop: 20,
//     fontSize: 170,
//   },
//   description: {
//     marginTop: -30,
//     fontSize: 60,
//   },
// });
