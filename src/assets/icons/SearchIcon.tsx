import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SearchIcon() {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="-4 -4 23 25"
      fill="none"
    >
      <G filter="url(#filter0_d_27_2735)">
        <Path
          d="M18.22 16.281l-3.4-3.4a6.382 6.382 0 111.06-1.06l3.4 3.4a.75.75 0 01-1.061 1.061l.001-.001zM6 7.875a4.872 4.872 0 008.3 3.467l.02-.022.022-.02A4.874 4.874 0 106 7.875z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SearchIcon
