import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SeePRIcon() {
  return (
    <Svg
      width="28px"
      height="28px"
      viewBox="1 0 24 24"
      fill="none"
    >
      <Path
        opacity={1.5}
        d="M12.12 12.78a.963.963 0 00-.24 0 3.269 3.269 0 01-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 01.12 6.55z"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={1.5}
        d="M18.74 19.38A9.934 9.934 0 0112 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58z"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SeePRIcon
