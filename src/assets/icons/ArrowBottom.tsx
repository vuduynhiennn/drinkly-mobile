import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowBottom() {
  return (
    <Svg
      width={20}
      height={15}
      viewBox="0 0 19 13"
      fill="none"
    >
      <Path
        d="M1 1l8.501 10L18 1"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ArrowBottom
