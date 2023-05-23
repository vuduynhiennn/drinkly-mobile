import { StyleSheet, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native-svg"
import { bg_pink, flex1, uppercase } from "../../styles/customStyle"

const Authencation = (): JSX.Element => {

    return (
        <SafeAreaView> 
            <View style={[bg_pink, flex1]}>
                <TouchableOpacity>
                    <Text> Create an accout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Authencation