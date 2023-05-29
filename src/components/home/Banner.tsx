import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
    <ImageBackground
      style={{ borderRadius: 20, justifyContent: "center" }}
      imageStyle={{ borderRadius: 15 }}
      source={require("../../assets//images//waterDelivery1.jpg")}
    >
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0.38)", borderRadius: 20, paddingHorizontal: 20, paddingVertical: 15, gap: 15 }}>
        <View>
          <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>Drips Springs</Text>
          <Text style={{ color: "#FFFFFF", fontSize: 12 }}>Bottle water delivery</Text>
        </View>

        <TouchableOpacity style={{ backgroundColor: "#FFC33A", alignSelf: 'flex-end', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 5 }}>
          <Text style={{ fontSize: 9, color: "#000000", fontWeight: "700" }}> Quick Shop </Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  </View>
  )
}

export default Categories