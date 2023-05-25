import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function HeartLinear() {
  return (
    <Svg
      width="30"
      height="45"
      viewBox="0 0 27 27"
      fill="none"
    >
      <Path
        d="M22 0H5a5 5 0 00-5 5v17a5 5 0 005 5h17a5 5 0 005-5V5a5 5 0 00-5-5z"
        fill="url(#paint0_linear_27_2684)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_27_2684"
          x1={38.097}
          y1={-9.288}
          x2={-18.144}
          y2={36.099}
          gradientUnits="userSpaceOnUse"
        >
          <Stop />
          <Stop offset={1} stopColor="#DCDCDC" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default HeartLinear
