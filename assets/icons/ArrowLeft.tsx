import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeft() {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 22 21"
      fill="none"
    >
      <Path
        d="M21 10.167H1M9.75 19.333L1 10.167 9.75 1"
        stroke="#3FBDF1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowLeft
