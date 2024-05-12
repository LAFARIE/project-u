// HomeScreen.js
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const index = prevIndex === 4 ? 0 : prevIndex + 1;
        scrollRef.current.scrollToOffset({
          animated: true,
          offset: index * width,
        });
        return index;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ScrollView>
        <FlatList
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={[
            style.sliderBox,
            style.bluebox,
            style.blackbox,
            style.greenbox,
            style.yellowbox,
          ]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[item, { width: width - 80, margin: 10,marginLeft: 20, marginRight:5 }]} />
          )}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={style.grid}>
            <View style={[style.redbox, style.box]}></View>
            <View style={[style.bluebox, style.box]}></View>
            <View style={[style.blackbox, style.box]}></View>
            <View style={[style.greenbox, style.box]}></View>
            <View style={[style.yellowbox, style.box]}></View>
            <View style={[style.redbox, style.box]}></View>
            <View style={[style.bluebox, style.box]}></View>
            <View style={[style.blackbox, style.box]}></View>
            <View style={[style.greenbox, style.box]}></View>
            <View style={[style.yellowbox, style.box]}></View>
            <View style={[style.redbox, style.box]}></View>
            <View style={[style.bluebox, style.box]}></View>
            <View style={[style.blackbox, style.box]}></View>
            <View style={[style.greenbox, style.box]}></View>
            <View style={[style.yellowbox, style.box]}></View>
            <View style={[style.redbox, style.box]}></View>
            <View style={[style.bluebox, style.box]}></View>
            <View style={[style.blackbox, style.box]}></View>
            <View style={[style.greenbox, style.box]}></View>
            <View style={[style.yellowbox, style.box]}></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: "100%",
    height: 150,
    margin: 50,
  },

  sliderBox: {
    height: 150,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "red",
  },

  box: {
    width: "45%",
    height: 100,
    borderColor: "black", // Add this line
    borderRadius: 10,
    // Other styles...
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-between",
    gap: 10,
    width: "100%",
    height: 150,
    // backgroundColor: 'gray'
  },
  redbox: {
    // margin: 5,
    width: "45%",
    height: 150,
    backgroundColor: "red",
  },
  bluebox: {
    width: "45%",
    height: 150,
    backgroundColor: "blue",
  },
  blackbox: {
    width: "45%",
    height: 150,
    backgroundColor: "black",
  },
  greenbox: {
    width: "45%",
    height: 150,
    backgroundColor: "green",
  },
  yellowbox: {
    width: "45%",
    height: 150,
    backgroundColor: "yellow",
  },
});
