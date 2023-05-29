import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchIcon from '../../assets/icons/SearchIcon'

const Header = () => {
    const [searchContent, setSearchContent] = useState("Search Something...")
    return (
        <View style={{ backgroundColor: "#3FBDF1", paddingTop: 25, paddingBottom: 30 }}>
            <Text style={{ marginHorizontal: 30, fontSize: 12, textTransform: "capitalize", color: "#FFFFFF", fontWeight: "500" }}>Welcome Back!</Text>
            <Text style={{ marginHorizontal: 23, fontSize: 20, color: "#FFFFFF", fontWeight: "700", marginTop: 5, marginBottom: 18 }}> Mr Product! </Text>

            <View style={{ paddingHorizontal: 17 }}>
                <TextInput style={{ fontSize: 12, paddingHorizontal: 26, paddingVertical: 12, borderRadius: 9, backgroundColor: "#39AAD9", color: "#FFFFFF", borderWidth: 0 }}
                    placeholder={"Search Something..."}
                    cursorColor={"#FFFFFF"}
                    placeholderTextColor={"#FFFFFF"}
                    onChangeText={setSearchContent}
                />
                <TouchableOpacity style={{ position: "absolute", bottom: 12, right: 30, zIndex: 10, paddingLeft: 0, backgroundColor: "#39AAD9" }}

                >
                    <SearchIcon />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header