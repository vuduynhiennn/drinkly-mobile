import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DeletedIcon() {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="2 0 24 24"
      fill="none"
    >
      <Path
        d="M10 12v5M14 12v5M4 7h16M6 10v8a3 3 0 003 3h6a3 3 0 003-3v-8M9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DeletedIcon
