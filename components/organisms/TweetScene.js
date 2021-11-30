
import React, { useRef } from "react";

import  Yuka  from '../atoms/Yuka'
import  Node  from '../molcules/Node'


export default function TweetScene(props)  {
  return (
    <group>
      <Node name={"maguro"} id={"maguro"} content={"Hello World!私の名前はmaguroです。ここには自己紹介を書きます。"} />
      <Yuka />
    </group>
  )
}