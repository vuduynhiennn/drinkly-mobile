import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <View style={{ paddingHorizontal: 15, gap: 6 }}>
    <Text style={{ fontSize: 14, color: "rgba(0, 0, 0, 1)", fontWeight: "700", marginBottom: 6 }}>Water type</Text>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity style={{ backgroundColor: "black", width: 75, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: "grey", width: 75, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>Distilled</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{ backgroundColor: "grey", width: 75, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>Spring</Text>
      </TouchableOpacity>


      <TouchableOpacity style={{ backgroundColor: "grey", width: 75, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>Purified</Text>
      </TouchableOpacity>

    </View>
  </View>
  )
}

export default Categories