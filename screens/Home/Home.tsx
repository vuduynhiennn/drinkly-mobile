import { View, Text, Button, TouchableOpacity, SafeAreaView } from "react-native";
import WomanDrinkingWater from "../../components/svg-components/WomanDrinkingWater";
import { bg_5DCCFC, center, color_625D5D, color_FFFFFF, flex1, fs14, fs24, fw700, justify_bw, mbt60, mt90, mt_120, px20, py20,  py30,  radius5, text_center, uppercase 
} from "../../styles/customStyle";

import homeScreenData from './home.json';
import { useState } from "react";
import WomanPaying from "../../components/svg-components/WomanPaying";
import WomanShopping from "../../components/svg-components/WomanShopping";

let indexOfHomeScreen = 1
const Home = ({navigation} : any) => {
    const [svgComponent, setSvgCompoent] : any = useState(<WomanDrinkingWater />);
    const [title, setTitle] : any = useState(homeScreenData[0].title);
    const [describe, setDescribe] : any = useState(homeScreenData[0].describe);
    const [buttonText, setButtonText] : any = useState(homeScreenData[0].buttonText);
    
    const handleNext = () => {
        switch (indexOfHomeScreen) {
            case 0:
                setSvgCompoent(<WomanDrinkingWater />)
                setTitle(homeScreenData[0].title)
                setDescribe(homeScreenData[0].describe)
                setButtonText(homeScreenData[0].buttonText)
                indexOfHomeScreen++;
                break;  
            case 1:
                setSvgCompoent(<WomanShopping />)
                setTitle(homeScreenData[1].title)
                setDescribe(homeScreenData[1].describe)
                setButtonText(homeScreenData[1].buttonText)


                indexOfHomeScreen++;
                break; 
            case 2:
                setSvgCompoent(<WomanPaying />)
                setTitle(homeScreenData[2].title)
                setDescribe(homeScreenData[2].describe)
                setButtonText(homeScreenData[2].buttonText)

                indexOfHomeScreen = 0;                 
                break; 
            default:
                break;
        }
    }

    return (
        <SafeAreaView style={[flex1, justify_bw, px20]}>

            <View style={[mt90, mbt60]}>
                {svgComponent}
            </View>

            <View style={[mt_120]}>
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
                onPress={handleNext}
            >
                <Text style={[uppercase, fw700, color_FFFFFF]}> 
                    {buttonText}
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Home