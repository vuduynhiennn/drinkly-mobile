import { Text, TextInput, TouchableOpacity, View } from "react-native"
import ArrowLeft from "../../assets/icons/ArrowLeft"
import { bg_5DCCFC, center, color_5DCCFC, color_625D5D, color_FFFFFF, direction_row, fs14, fs20, fw500, fw700, justify_bw, mbt40, mt10, mt35, mt60, mt90, px20, py20, text_center, uppercase } from "../../styles/customStyle"
import navigateTo from "../../utils/navigateTo"

const Login = ({navigation}: any) => {
    return (
        <View style={[px20, py20]}>
        <View>
            <TouchableOpacity
                onPress={() => navigateTo(navigation, "Authencation")}
            >
                <ArrowLeft />
            </TouchableOpacity>
            <Text
                style={[color_5DCCFC, fw700, fs20, mt35 ]}
            >
                Welcome Back
            </Text>

            <Text style={[fs14, color_625D5D, mt10]}>Please fill in your email password to login to your account.</Text>
        </View>

        <View style={[mt60]}>
            <View>
                <Text style={[fs14, fw700, color_625D5D, {marginBottom: 10}]}>Email</Text>
                <TextInput style={{borderWidth: 1.5, fontSize: 14, borderColor: "#9D9A9A", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 3}} 
                           placeholder="your_email@gmail.com"
                />
            </View>

            <View style={{marginTop: 25}}>
                <Text style={[fs14, fw700, color_625D5D, {marginBottom: 10}]}>Password</Text>
                <TextInput style={{borderWidth: 1.5, fontSize: 14, borderColor: "#9D9A9A", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 3}} 
                            placeholder="********"
                            secureTextEntry={true}
                />
            </View>

            <View>
                <TouchableOpacity > 
                    <Text style={[fs14, fw500, {textAlign: "right", marginTop: 20}]}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={mt90}>
            <TouchableOpacity style={[bg_5DCCFC, py20]}>
                <Text style={[uppercase, fs14, color_FFFFFF, text_center]}>
                    Login
                </Text>
            </TouchableOpacity>

            <View style={[{flexDirection: "row", marginTop: 15}, center]}>
                <Text>Don’t  have an account?</Text>

                <TouchableOpacity style={{marginLeft: 5}}
                    onPress={() => navigateTo(navigation, "Signup")}
                >
                    <Text style={[color_5DCCFC, fw500]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

export default Login