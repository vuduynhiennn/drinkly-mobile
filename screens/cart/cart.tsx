import { Text, TouchableOpacity, View } from "react-native"
import ArrowLeft from "../../assets/icons/ArrowLeft"
import { bg_5DCCFC, color_5DCCFC, color_625D5D, color_FFFFFF, direction_row, flex1, fs14, fs20, fw500, fw700, justify_bw, px20, px40, py20, text_center, uppercase } from "../../styles/customStyle"
import navigateTo from "../../utils/navigateTo"
import TopBarCustom from "../../components/TopBarCustom"

const Cart = ({navigation}: any) => {
    return (
        <View style={[px20, py20, flex1, justify_bw]}>
            <TopBarCustom title="Cart" />
            <View>
                <View style={[direction_row, justify_bw, {alignItems: "center"}]}>
                    <View>
                        <Text style={[uppercase, fw500, {fontSize: 12}]}>Total</Text>
                        <Text style={[fw700, {color: "black", marginTop: 4}, fs20]}>$100</Text>
                    </View>

                    <TouchableOpacity
                        style={[py20, bg_5DCCFC, px40, {borderRadius: 3}]}
                        onPress={() => navigateTo(navigation, "Checkout")}
                    >
                        <Text style={[uppercase, text_center, color_FFFFFF, fw700]}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Cart