import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import ArrowLeft from "../../assets/icons/ArrowLeft"
import { bg_5DCCFC, center, color_5DCCFC, color_625D5D, color_FFFFFF, direction_row, fs14, fs20, fw500, fw700, justify_bw, mbt40, mt10, mt35, mt60, mt90, px20, py20, text_center, uppercase } from "../../styles/customStyle"
import navigateTo from "../../utils/navigateTo"
import { useEffect, useState } from "react"
import { Auth, createUserWithEmailAndPassword, getAuth } from "firebase/auth"

import firebaseApp from '../../config/firebase'

const Signup = ({ navigation }: any) => {
    const auth = getAuth(firebaseApp);

    const [name, setName] = useState<String>("");
    const [email, setEmail] = useState<any>("");
    const [password, setPassword] = useState<any>("");
    const [confirmPassword, setConfirmPassword] = useState<String>("");

    const [message, setMessage] = useState<String>("")

    const onRegisterPressed = async () => {

            if (!name || !email || !password || !confirmPassword) {
                setMessage("Please fill all fields")
                return
            }

            await createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    setMessage('User account created & signed in!')
                })
                .catch(error => {
                    const parseErrorCode = error.code.split("auth/")[1].split(("-")).join(" ")
                    setMessage(parseErrorCode)
                });
    }

    useEffect(() => {
        password !== confirmPassword ? setMessage("Passowrd and confirm doesn't match") : null
        if (!password && !confirmPassword) return
        if (password === confirmPassword) {
            if (password.length < 6) {
                setMessage("Password should be at least 6 chareacters")
            }
        }
        return () => setMessage("")
    }, [password, confirmPassword, name, email])

    return (
        <View style={[px20, py20]}>
            <View>
                <TouchableOpacity
                    onPress={() => navigateTo(navigation, "Authencation")}
                >
                    <ArrowLeft />
                </TouchableOpacity>
                <Text
                    style={[color_5DCCFC, fw700, fs20, mt35]}
                >
                    Create your Account
                </Text>

                <Text style={[fs14, color_625D5D, mt10]}>
                    Please fill in your details to create your account.
                </Text>

                <Text style={{ position: "absolute", bottom: -26, left: -4, fontSize: 12, color: "#f58142", fontStyle: "italic" }}> {message}</Text>
            </View>

            <View style={[mt35]}>
                <View>
                    <Text style={[fs14, fw700, color_625D5D, { marginBottom: 10 }]}>Name</Text>
                    <TextInput style={{ borderWidth: 1.5, fontSize: 14, borderColor: "#9D9A9A", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 3 }}
                        placeholder="Your name"
                        onChangeText={setName}
                    />
                </View>

                <View>
                    <Text style={[fs14, fw700, color_625D5D, { marginBottom: 10, marginTop: 20 }]}>Email</Text>
                    <TextInput style={{ borderWidth: 1.5, fontSize: 14, borderColor: "#9D9A9A", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 3 }}
                        placeholder="your_email@gmail.com"
                        onChangeText={setEmail}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={[fs14, fw700, color_625D5D, { marginBottom: 10 }]}>Password</Text>
                    <TextInput style={{ borderWidth: 1.5, fontSize: 14, borderColor: "#9D9A9A", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 3 }}
                        placeholder="********"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={[fs14, fw700, color_625D5D, { marginBottom: 10 }]}>Confirm Password</Text>
                    <TextInput style={{ borderWidth: 1.5, fontSize: 14, borderColor: "#9D9A9A", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 3 }}
                        placeholder="********"
                        secureTextEntry={true}
                        onChangeText={setConfirmPassword}
                    />
                </View>


            </View>

            <View style={{ marginTop: 52 }}>

                <TouchableOpacity style={[bg_5DCCFC, py20, { borderRadius: 3 }]}
                    onPress={onRegisterPressed}
                >
                    <Text style={[uppercase, fs14, color_FFFFFF, text_center]}>
                        Create an account
                    </Text>
                </TouchableOpacity>

                <View style={[{ flexDirection: "row", marginTop: 15 }, center]}>
                    <Text>Alreay have an account? </Text>
                    <TouchableOpacity style={{ marginLeft: 5 }}
                        onPress={() => navigateTo(navigation, "Login")}
                    >
                        <Text style={[color_5DCCFC, fw500]}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Signup