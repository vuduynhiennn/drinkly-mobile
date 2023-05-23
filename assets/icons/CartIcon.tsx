import * as React from "react"
import { View } from "react-native"
import Svg, { G, Path } from "react-native-svg"
import ActiveDot from "./ActiveDot"

function CartIcon({display}: any) {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Svg
        width={30}
        height={30}
        viewBox="0 0 23 30"
        fill="none"
      >
        <G opacity={0.3}>
          <Path
            opacity={0.39}
            d="M24 0H6a6 6 0 00-6 6v18a6 6 0 006 6h18a6 6 0 006-6V6a6 6 0 00-6-6z"
            fill="#fff"
          />
          <Path
            d="M21.275 10.9c0-4.633-2.74-8.4-6.11-8.4s-6.11 3.768-6.11 8.4H6v16.04h18.33V10.9h-3.055zm-6.11-6.874c2.527 0 4.583 3.083 4.583 6.874h-9.166c0-3.789 2.056-6.873 4.583-6.873v-.001zM22.8 25.412H7.527V12.429H22.8v12.983z"
            fill="#000"
          />
          <Path
            d="M9.766 14.809a.681.681 0 100 1.362.681.681 0 000-1.362zM20.565 14.809a.681.681 0 100 1.362.681.681 0 000-1.362z"
            fill="#000"
          />
        </G>
      </Svg>

      {display ? <ActiveDot /> : null}

    </View>
  )
}

export default CartIcon
