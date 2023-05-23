import * as React from "react"
import { View } from "react-native"
import Svg, { G, Path, Defs } from "react-native-svg"
import ActiveDot from "./ActiveDot"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function HomeIcon({display}: any) {
  return (
    <View
      style={{alignItems: "center", justifyContent: "center"}}
    >
      <Svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
      >
        <G filter="url(#filter0_d_27_2839)">
          <Path d="M34 0H4v30h30V0z" fill="#fff" />
          <Path
            d="M8.695 11.565l10.3-8.015 10.3 8.015V24.16a2.29 2.29 0 01-2.29 2.29h-16.02a2.29 2.29 0 01-2.29-2.29V11.565z"
            stroke="#0005"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M15.565 26.45V15h6.87v11.45"
            stroke="#0005"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs></Defs>
      </Svg>

      {display ? <ActiveDot /> : null}
      
    </View>
  )
}

export default HomeIcon
