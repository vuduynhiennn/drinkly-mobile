import { Text, TouchableOpacity, View } from "react-native"
import ArrowLeft from "../assets/icons/ArrowLeft"
import { color_5DCCFC, direction_row, fs20, fs24, fw700, justify_bw, px20, py20 } from "../styles/customStyle"

const TopBarCustom = ({ title }: any) => {
    return (
        <View style={[px20, py20]}>
            <View style={[direction_row, justify_bw, { alignItems: "center" }]}>
                <Text style={[{ fontSize: 20 }, fw700, color_5DCCFC, { textTransform: "capitalize" }]}>{title}</Text>
                <TouchableOpacity>
                    <ArrowLeft />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default TopBarCustom