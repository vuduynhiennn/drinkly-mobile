import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusIcon() {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 6 7"
      fill="none"
    >
      <Path
        d="M3.622 2.373h2.227v1.3H3.622V6.21H2.239V3.673H.005v-1.3h2.234V0h1.383v2.373z"
        fill="#000"
        fillOpacity={0.5}
      />
    </Svg>
  )
}

export default PlusIcon
