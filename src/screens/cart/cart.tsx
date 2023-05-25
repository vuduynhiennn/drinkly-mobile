import { ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import ArrowLeft from "../../assets/icons/ArrowLeft"
import { bg_5DCCFC, color_5DCCFC, color_625D5D, color_FFFFFF, direction_row, flex1, fs14, fs20, fw500, fw700, justify_bw, px20, px40, py20, text_center, uppercase } from "../../styles/customStyle"
import navigateTo from "../../utils/navigateTo"
import TopBarCustom from "../../components/TopBarCustom"
import RemovedIcon from "../../assets/icons/removed"
import PlusIcon from "../../assets/icons/plusIcon"
import MinusIcon from "../../assets/icons/MinusIcon"

const Cart = ({ navigation }: any) => {
    return (
        <View style={[flex1, justify_bw]}>
            <ScrollView style={{ flex: 1 }}>

                <TopBarCustom title="Cart" />

                <View style={{ marginTop: 40, gap: 20, marginBottom: 20 }}>
                    {/* item */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 25, paddingVertical: 20 }}>
                        <ImageBackground
                            source={require("../../assets/images/deomo-product-1.png")}
                            style={{ width: 70, height: 70 }}
                            imageStyle={{ borderRadius: 10 }}
                        />

                        <View>
                            <View style={{ width: 200 }}>
                                <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 9 }}>Drips Spring water </Text>
                            </View>
                            <Text style={{ color: "#3FBDF1", fontSize: 14, fontWeight: "600" }}> $100 </Text>

                            <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
                                <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                    <MinusIcon />
                                </TouchableOpacity>

                                <Text style={{ marginTop: 15, fontSize: 16, marginLeft: -2 }}> 1</Text>

                                <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                    <PlusIcon />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 13, fontWeight: "600" }}>50ml</Text>
                            <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                <RemovedIcon />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 25, paddingVertical: 20 }}>
                        <ImageBackground
                            source={require("../../assets/images/deomo-product-1.png")}
                            style={{ width: 70, height: 70 }}
                            imageStyle={{ borderRadius: 10 }}
                        />

                        <View>
                            <View style={{ width: 200 }}>
                                <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 9 }}>Drips Spring water </Text>
                            </View>
                            <Text style={{ color: "#3FBDF1", fontSize: 14, fontWeight: "600" }}> $100 </Text>

                            <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
                                <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                    <MinusIcon />
                                </TouchableOpacity>

                                <Text style={{ marginTop: 15, fontSize: 16, marginLeft: -2 }}> 1</Text>

                                <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                    <PlusIcon />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 13, fontWeight: "600" }}>50ml</Text>
                            <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                <RemovedIcon />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 25, paddingVertical: 20 }}>
                        <ImageBackground
                            source={require("../../assets/images/deomo-product-1.png")}
                            style={{ width: 70, height: 70 }}
                            imageStyle={{ borderRadius: 10 }}
                        />

                        <View>
                            <View style={{ width: 200 }}>
                                <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 9 }}>Drips Spring water </Text>
                            </View>
                            <Text style={{ color: "#3FBDF1", fontSize: 14, fontWeight: "600" }}> $100 </Text>

                            <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
                                <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                    <MinusIcon />
                                </TouchableOpacity>

                                <Text style={{ marginTop: 15, fontSize: 16, marginLeft: -2 }}> 1</Text>

                                <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                    <PlusIcon />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 13, fontWeight: "600" }}>50ml</Text>
                            <TouchableOpacity style={{ marginTop: 15, backgroundColor: "rgba(227, 227, 227, 1)", width: 30, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                <RemovedIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* item  */}
                </View>

                <View style={{ marginHorizontal: 20, marginBottom: 90, marginTop: 90 }}>
                    <View style={[direction_row, justify_bw, { alignItems: "center" }]}>
                        <View>
                            <Text style={[uppercase, fw500, { fontSize: 12 }]}>Total</Text>
                            <Text style={[fw700, { color: "black", marginTop: 4 }, fs20]}>$100</Text>
                        </View>

                        <TouchableOpacity
                            style={[py20, bg_5DCCFC, px40, { borderRadius: 3 }]}
                            onPress={() => navigateTo(navigation, "Checkout")}
                        >
                            <Text style={[uppercase, text_center, color_FFFFFF, fw700]}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Cart