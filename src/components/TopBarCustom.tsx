import { Text, TouchableOpacity, View } from "react-native"
import ArrowLeft from "../assets/icons/ArrowLeft"
import { color_5DCCFC, direction_row, fs20, fs24, fw700, justify_bw } from "../styles/customStyle"

const TopBarCustom = ({title}: any) => {
    return (
        <View style={[direction_row, justify_bw, {alignItems: "center"}]}>
        <Text style={[fs24, fw700, color_5DCCFC, {textTransform: "capitalize"}]}>{title}</Text>
        <TouchableOpacity>
            <ArrowLeft />
        </TouchableOpacity>
    </View>

    )
}

export default TopBarCustom