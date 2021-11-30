import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Node(props) {
  const nodeRef = useRef();
  const [ open, setOpen ] = useState(false);
  const contentLength = props.content.length;
  const [contentCount, setContentCount ] = useState(20);

  useFrame(() => {
    console.log(open)
    if(open){
      if(contentCount <= contentLength){
        setContentCount(contentCount + 1)
      }
    }
    else {
      if(contentCount > 20) {
        setContentCount(contentCount - 1)
      }
    }
  })

  return (
    <group ref={nodeRef}>
      <mesh
        onClick={() => {
          setOpen(!open);
        }}>
          <Html
          transform
          distanceFactor={0}
          position={[3, 3, 3]}
          style={{
            width: "500px",
          }}
        >
          <div className="node-wrap">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <Image
                        width={48}
                        height={48}
                        src={"/test/" + props.id + ".png"}
                        alt="icon image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{props.name}</p>
                    <p className="subtitle is-6">{"@" + props.id}</p>
                  </div>
                </div>

                <div className="content">
                  {props.content.slice(0, contentCount)}...
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        </Html>

      </mesh>
        
    </group>
  );
}
