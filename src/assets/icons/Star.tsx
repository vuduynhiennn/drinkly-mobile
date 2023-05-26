import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIcon() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M10.85.555l2.307 4.674a.995.995 0 00.75.544l5.156.75a.995.995 0 01.551 1.697l-3.731 3.637a.994.994 0 00-.286.881l.881 5.135a.996.996 0 01-1.444 1.05l-4.612-2.425a.994.994 0 00-.926 0l-4.615 2.425a.995.995 0 01-1.443-1.05l.88-5.135a.994.994 0 00-.285-.881L.302 8.22a.995.995 0 01.55-1.697l5.157-.75a.999.999 0 00.75-.544L9.065.555a.996.996 0 011.786 0z"
        fill="#FEC54B"
      />
    </Svg>
  )
}

export default StarIcon
