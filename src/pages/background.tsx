import React, {FC} from 'react'
import dynamic from "next/dynamic";
const Bgobj = dynamic(() => import("./Bgobj"), {
  ssr: false
})

const Background: FC = () => {
  return (
    <Bgobj />
  )
}

export default Background