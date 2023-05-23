import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { bg_5DCCFC, bg_FFFFFF, bg_pink, center, color_2E2E2E, color_FFFFFF, flex1, fs14, fs24, fw700, justify_bw, mbt60, pAbs, px20, py20, r20, radius5, t40, text_center, uppercase } from "../../styles/customStyle"

const Authencation = (): JSX.Element => {

    return (
        <View style={flex1}
        >
            <ImageBackground
                source={require("../../assets/images/background.png")}
                resizeMode="cover" 
                style={{flex: 1}}
            >  

            <ImageBackground
                    source={require("../../assets/images/gradient.png")}
                    resizeMode="cover"
                    style={[flex1, justify_bw, center]}
                >  

                <View style={{paddingTop: 400}}>
                    <Text style={[fw700, fs24, color_FFFFFF, text_center, {paddingHorizontal: 10}]}>Welcome to Drinkly</Text>
                    <Text style={[fw700, fs14, color_FFFFFF, text_center, {paddingBottom: 25, paddingTop: 6, paddingHorizontal: 10}]}>Drinkingly app</Text>


                    <View style={{paddingHorizontal: 10}}>
                        <TouchableOpacity
                            style={[bg_FFFFFF, py20, center, radius5, {marginBottom: 25}]}
                        >
                            <Text style={[fw700, uppercase, color_2E2E2E]}>
                                Create an account
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[py20, center, radius5, {borderColor: "#FFFFFF", borderWidth: 1}, {marginBottom: 20}]}
                        >
                            <Text style={[fw700, uppercase, color_FFFFFF,]}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{paddingBottom: 20}}
                        >
                            <Text style={[color_FFFFFF, text_center]}>Continue as Guest</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ImageBackground>

            </ImageBackground>

        </View>
    )
}

export default Authencation