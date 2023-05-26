import { View, Text, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import SearchIcon from '../../assets/icons/SearchIcon'
import HeartIcon from '../../assets/icons/HeartIcon'
import HeartLinear from '../../assets/icons/HearTLinear'
import navigateTo from '../../utils/navigateTo'

const Home = ({navigation}: any) => {

  const [searchContent, setSearchContent] = useState("Search Something...")

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <StatusBar
          animated={true}
          backgroundColor="#3FBDF1"
        />

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

        <View style={{marginHorizontal: 10, marginVertical: 20}}>
          <ImageBackground
            style={{borderRadius: 20, justifyContent: "center"}}
            imageStyle={{ borderRadius: 15 }}
            source={require("../../assets//images//waterDelivery1.jpg")}
          >
            <View style={{backgroundColor: "rgba(0, 0, 0, 0.38)", borderRadius: 20, paddingHorizontal: 20, paddingVertical: 15, gap: 15}}>
              <View>
                <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>Drips Springs</Text>
                <Text style={{color: "#FFFFFF", fontSize: 12}}>Bottle water delivery</Text>
              </View>

              <TouchableOpacity style={{backgroundColor: "#FFC33A",  alignSelf: 'flex-end', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 5}}>
                <Text style={{fontSize: 9, color: "#000000", fontWeight: "700"}}> Quick Shop </Text>
              </TouchableOpacity>

            </View>

          </ImageBackground>
        </View>

        <View style={{paddingHorizontal: 15, gap: 6}}>
          <Text style={{fontSize: 14, color: "rgba(0, 0, 0, 1)", fontWeight: "700", marginBottom: 6}}>Water type</Text>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <TouchableOpacity style={{backgroundColor: "black", width: 75, height: 40,alignItems: "center", justifyContent: "center", borderRadius: 5}}>
                <Text style={{fontSize: 10, color: "#FFFFFF"}}>All</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor: "grey", width: 75, height: 40,alignItems: "center", justifyContent: "center", borderRadius: 5}}>
                <Text style={{fontSize: 10, color: "#FFFFFF"}}>Distilled</Text>
              </TouchableOpacity>


              <TouchableOpacity style={{backgroundColor: "grey", width: 75, height: 40,alignItems: "center", justifyContent: "center", borderRadius: 5}}>
                <Text style={{fontSize: 10, color: "#FFFFFF"}}>Spring</Text>
              </TouchableOpacity>


              <TouchableOpacity style={{backgroundColor: "grey", width: 75, height: 40,alignItems: "center", justifyContent: "center", borderRadius: 5}}>
                <Text style={{fontSize: 10, color: "#FFFFFF"}}>Purified</Text>
              </TouchableOpacity>
              
          </View>
        </View>


        <View style={{marginTop: 30, marginHorizontal: 10, marginBottom: 120}}>
          <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>

            {/* item  */}
            <View style={{width: 180, marginBottom: 15}}>
              <ImageBackground
                source={require("../../assets/images//deomo-product-1.png")}
                imageStyle={{borderRadius: 10}}
              >
                <Pressable style={{position: "relative"}}>
                  <View style={{position:"absolute", right: 15, top: 6}}>
                    <HeartLinear />
                  </View>
                  <View style={{position:"absolute", right: 16, top: 15}}>
                    <HeartIcon width="28" height="28"/>
                  </View>
                </Pressable>

                <Pressable style={{backgroundColor: "#E5E5E5", marginTop : 200, paddingHorizontal: 5, paddingVertical: 12, borderBottomEndRadius: 8, borderBottomStartRadius: 8}}
                           onPress={() => navigateTo(navigation, "Product")}
                >
                  <Text style={{fontSize: 14, fontWeight: "700", color: "black", marginBottom: 5}}>Drips Spring Water</Text>
                  <Text style={{fontSize: 11, color: "#484848"}}>$100</Text>
                </Pressable>
                </ImageBackground>
            </View>

            <View style={{width: 180, marginBottom: 15}}>
              <ImageBackground
                source={require("../../assets/images//deomo-product-1.png")}
                imageStyle={{borderRadius: 10}}
              >
                <Pressable style={{position: "relative"}}>
                  <View style={{position:"absolute", right: 15, top: 6}}>
                    <HeartLinear />
                  </View>
                  <View style={{position:"absolute", right: 16, top: 15}}>
                    <HeartIcon width="28" height="28"/>
                  </View>
                </Pressable>

                <Pressable style={{backgroundColor: "#E5E5E5", marginTop : 200, paddingHorizontal: 5, paddingVertical: 12, borderBottomEndRadius: 8, borderBottomStartRadius: 8}}>
                  <Text style={{fontSize: 14, fontWeight: "700", color: "black", marginBottom: 5}}>Drips Spring Water</Text>
                  <Text style={{fontSize: 11, color: "#484848"}}>$100</Text>
                </Pressable>
                </ImageBackground>
            </View>

            <View style={{width: 180, marginBottom: 15}}>
              <ImageBackground
                source={require("../../assets/images//deomo-product-1.png")}
                imageStyle={{borderRadius: 10}}
              >
                <Pressable style={{position: "relative"}}>
                  <View style={{position:"absolute", right: 15, top: 6}}>
                    <HeartLinear />
                  </View>
                  <View style={{position:"absolute", right: 16, top: 15}}>
                    <HeartIcon width="28" height="28"/>
                  </View>
                </Pressable>

                <Pressable style={{backgroundColor: "#E5E5E5", marginTop : 200, paddingHorizontal: 5, paddingVertical: 12, borderBottomEndRadius: 8, borderBottomStartRadius: 8}}>
                  <Text style={{fontSize: 14, fontWeight: "700", color: "black", marginBottom: 5}}>Drips Spring Water</Text>
                  <Text style={{fontSize: 11, color: "#484848"}}>$100</Text>
                </Pressable>
                </ImageBackground>
            </View>
          
            {/* item end  */}

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home 