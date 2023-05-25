import * as React from "react"
import { View } from "react-native"
import Svg, { G, Path, Defs } from "react-native-svg"
import ActiveDot from "./ActiveDot"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function FavoriteIcon({ display }: any) {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Svg
        width={32}
        height={32}
        viewBox="0 0 21 30"
        fill="none"
      >
        <G opacity={0.3}>
          <Path d="M30 0H0v30h30V0z" fill="#fff" />
          <Path
            d="M23.787 7.541a5.469 5.469 0 00-7.734 0L15 8.594l-1.054-1.053a5.47 5.47 0 10-7.734 7.734l1.054 1.054L15 24.063l7.734-7.734 1.053-1.054a5.469 5.469 0 000-7.734v0z"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </Svg>

      {display ? <ActiveDot /> : null}

    </View>
  )
}

export default FavoriteIcon
