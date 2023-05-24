import { Text, TouchableOpacity, View } from "react-native"
import TopBarCustom from "../../components/TopBarCustom"
import { bg_FFFFFF, direction_row, flex1, fs14, fw500, fw700, justify_bw, px20, py20 } from "../../styles/customStyle"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
const Checkout = () => {


    const [choseTime, setChoseTime] = useState() 


    return (
        <View style={[px20, py20, flex1]}>
            <TopBarCustom title="Checkout" />

            <View style={[py20, direction_row,justify_bw]}>
                <View>
                    <Text style={[{fontSize: 15, color: "black"}, fw700]}>Delivery Address</Text>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 13, fontWeight: "700", color: "black", fontStyle: "italic"}}>Hà Nội</Text>
                        <Text style={{fontWeight: "500", fontSize: 13, fontStyle: "italic"}}>Hoàng Mai</Text>
                        <Text style={{fontWeight: "500", fontSize: 13, fontStyle: "italic"}}>139 Tam Trinh</Text>
                        <View style={{marginTop: 22}}>
                            <Text style={{color: "black", fontWeight: "700", fontSize: 13}}>08120076547</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={{color: "#000000", textDecorationLine: "underline", fontWeight: "500", borderBottomWidth: 2}}>Change</Text>
                    </TouchableOpacity>
                </View>

              
            </View>

            <View style={[direction_row, justify_bw]}>
                <View style={[direction_row, justify_bw, {alignItems: "center", borderWidth: 2, borderRadius: 8, paddingVertical: 10, gap: 20}]}>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: "black", fontWeight: "700", fontSize: 10}}>Standard</Text>
                        <Text style={{color: "black", marginTop: 3, fontSize: 10}}>10-20 Min</Text>
                    </View>
                    <View>
                        <BouncyCheckbox
                            style={{marginRight: -5}}
                            size={30}
                            fillColor="#3FBDF1"
                            iconStyle={{ borderColor: "green" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={(isChecked: boolean) => {}}
                            />
                    </View>
                </View>

                <View style={[direction_row, justify_bw, {alignItems: "center", borderWidth: 2, borderRadius: 8, paddingVertical: 10, gap: 10}]}>
                    <View style={{marginLeft: 15}}>
                        <Text style={{color: "black", fontWeight: "700", fontSize: 10}}>Schedule Ahead</Text>
                        <Text style={{color: "black", marginTop: 3, fontSize: 10}}>Choose Your Time</Text>
                    </View>
                    <View>
                        <BouncyCheckbox
                            style={{paddingLeft: 5}}
                            size={30}
                            fillColor="#3FBDF1"
                            iconStyle={{ borderColor: "green" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={(isChecked: boolean) => {}}
                            />
                    </View>
                </View>
            </View>

            
        </View>
    )
}

export default Checkout