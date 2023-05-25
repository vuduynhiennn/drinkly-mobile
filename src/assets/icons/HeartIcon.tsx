import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function HeartIcon({width, height}: any) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 15"
      fill="none"
    >
      <G filter="url(#filter0_d_27_2673)">
        <Path
          d="M17.323 2.556a3.623 3.623 0 00-5.126 0l-.7.7-.7-.7a3.624 3.624 0 10-5.126 5.126l.7.7 5.126 5.126 5.126-5.126.7-.7a3.623 3.623 0 000-5.126v0z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default HeartIcon
