import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MinusIcon() {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 4 2"
      fill="none"
    >
      <Path
        d="M3.076 1.148H0V.001h3.076v1.147z"
        fill="#000"
        fillOpacity={0.5}
      />
    </Svg>
  )
}

export default MinusIcon
