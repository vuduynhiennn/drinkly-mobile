import { View, Text, Button, TouchableOpacity, SafeAreaView } from "react-native";
import {
    bg_5DCCFC, center, color_625D5D, color_FFFFFF, flex1, fs14, fs24, fw700, justify_bw, l0, mbt60, mt120, mt90, mt_120, pAbs, px20, py20, py30, r0, r20, radius5, t40, text_center, uppercase
} from "../../styles/customStyle";

import { Onboarding1, Onboarding2, Onboarding3 } from "./OnboardingIcon";

import onBoardingData from './onboarding-data.json';
import { useEffect, useState } from "react";
import ArrowLeft from "../../assets/icons/ArrowLeft";
const Onboarding = ({ navigation }: any) => {
    const [svgComponent, setSvgCompoent]: any = useState();
    const [title, setTitle]: any = useState();
    const [describe, setDescribe]: any = useState();
    const [buttonText, setButtonText]: any = useState();

    const [indexOfHomeScreen, setIndexOfHomeScreen] = useState(0)
    const [ArrowLeftView, setArrowLeftView] = useState<JSX.Element>()


    const handleNext = (type: String) => {
        switch (indexOfHomeScreen) {
            case 0:
                type === "next" ? setIndexOfHomeScreen(1) : setIndexOfHomeScreen(0)
                break;
            case 1:
                type === "next" ? setIndexOfHomeScreen(2) : setIndexOfHomeScreen(0)
                break;
            case 2:
                type === "back" ? setIndexOfHomeScreen(1) : navigation.navigate("Authencation")
                break;
            default:
                break;
        }

    }
    useEffect(() => {
        switch (indexOfHomeScreen) {
            case 0:
                setSvgCompoent(<Onboarding1 />)
                setTitle(onBoardingData[0].title)
                setDescribe(onBoardingData[0].describe)
                setButtonText(onBoardingData[0].buttonText)
                setArrowLeftView(undefined)
                break;
            case 1:
                setSvgCompoent(<Onboarding2 />)
                setTitle(onBoardingData[1].title)
                setDescribe(onBoardingData[1].describe)
                setButtonText(onBoardingData[1].buttonText)
                setArrowLeftView(<ArrowLeft />)
                break;
            case 2:
                setSvgCompoent(<Onboarding3 />)
                setTitle(onBoardingData[2].title)
                setDescribe(onBoardingData[2].describe)
                setButtonText(onBoardingData[2].buttonText)
                break;
            default:
                break;
        }
    }, [indexOfHomeScreen])

    return (
        <SafeAreaView style={[flex1, justify_bw, px20]}>

            <TouchableOpacity style={[pAbs, t40, r20, {flex: 1}]}
                onPress={() => handleNext("back")}
            >
                {ArrowLeftView}
            </TouchableOpacity>

            <View style={[mt120, mbt60, {flex: 3}]}
            >

                {svgComponent}
            </View>

            <View style={[mt_120, {flex: 2}]}>
                <Text style={[fs24, color_625D5D, fw700, text_center]}
                >
                    {title}
                </Text>

                <Text style={[fs14, text_center, py30]}>
                    {describe}
                </Text>
            </View>

            <TouchableOpacity
                style={[bg_5DCCFC, py20, center, radius5, mbt60]}
                onPress={() => handleNext("next")}
            >
                <Text style={[uppercase, fw700, color_FFFFFF]}>
                    {buttonText}
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Onboarding