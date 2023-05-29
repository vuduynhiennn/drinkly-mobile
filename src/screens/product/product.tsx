import { SafeAreaView, ScrollView, View, Text, ImageBackground, TouchableOpacity } from "react-native"
import StarIcon from "../../assets/icons/Star"
import ArrowBottom from "../../assets/icons/ArrowBottom"
import MinusIcon from "../../assets/icons/MinusIcon"
import PlusIcon from "../../assets/icons/plusIcon"
import ArrowLeft from "../../assets/icons/ArrowLeft"
import { useState } from "react"

const Product = ({route, navigation}: any) => {
    const { image, title, description, price} = route.params

    const [quantity, setQuantity] = useState(1)

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <ImageBackground
                        source={{uri: image}}
                        style={{ height: 300 }}
                    >
                    </ImageBackground>
                </View>

                {/* description  */}

                <View style={{ marginHorizontal: 15, marginTop: 30 }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <View style={{ width: "59%" }}>
                            <Text style={{ fontSize: 18, fontWeight: "700", color: "#000000" }}>
                                {title}
                            </Text>
                            <Text style={{ fontSize: 19, color: "#000000", marginTop: 10 }}>
                                {`$${price}`}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 9, color: "#7D7D7D", marginTop: 10 }}>(Available In Stock)</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 13, marginTop: 10 }}>
                       {description}
                    </Text>
                    <View>
                        <View style={{ flexDirection: "row", gap: 5, marginTop: 15 }}>
                            <StarIcon />
                            <Text style={{ fontWeight: "700", color: "black" }}> 4.5</Text>
                            <Text style={{ color: "#AAAAAA", marginLeft: 10 }}>(128 reviews)</Text>
                        </View>

                    </View>
                </View>

                <View style={{ marginHorizontal: 15, marginVertical: 15, flexDirection: "row", justifyContent: "space-between" , alignItems: "center"}}>
                    <View>
                        <Text style={{ color: "#000000", fontWeight: "600", marginBottom: 5 }}>Bottle size</Text>
                        <View style={{ flexDirection: "row", position: "relative" }}>
                            <View style={{ borderWidth: 2, paddingHorizontal: 19, paddingVertical: 10, borderRadius: 5, borderColor: "#3FBDF1", alignSelf: "flex-start" }}>
                                <Text>50ml</Text>
                            </View>
                            <View style={{ backgroundColor: "#3FBDF1", borderRadius: 5, position: "absolute", paddingHorizontal: 10, paddingVertical: 16.5, left: 80, top: 0 }}>
                                <ArrowBottom />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: "#000000", fontWeight: "600", marginBottom: 0 }}>Quantity</Text>
                        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" , marginRight: 15}}>

                            <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}
                                onPress={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity -1)
                                    }
                                }}
                            >
                                <MinusIcon />
                            </TouchableOpacity>

                            <Text style={{ marginTop: 15, fontSize: 16, marginHorizontal: 7 }}>
                                {quantity}
                            </Text>

                            <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}
                                onPress={() => setQuantity(quantity + 1)}
                            >
                                <PlusIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={{textTransform: "uppercase", backgroundColor: "#3FBDF1", alignSelf: "center", paddingHorizontal: 130, borderRadius: 5, paddingVertical: 20, marginTop: 10, marginBottom: 100, color: "#FFFFFF", fontWeight: "700"}}>BUY</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Product