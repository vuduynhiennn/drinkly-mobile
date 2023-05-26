import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UploadImageIcon() {
  return (
    <Svg
      width="23px"
      height="23px"
      viewBox="0 0 20 20"
    >
      <Path
        d="M136 1409.105a1 1 0 112 0 1 1 0 01-2 0zm.75 2.948L140 1416h-12l4.518-5.947 2.836 4.052 1.396-2.052zM128 1407h6v-4h-6v4zm14 10h-16v-16h10v6h6v10zm-4-18h-14v20h20v-13.895l-6-6.105z"
        transform="translate(-180 -1559) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default UploadImageIcon
