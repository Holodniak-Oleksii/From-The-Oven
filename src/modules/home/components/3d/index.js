/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { LoadGLTF } from "./load";
import { Wrapper } from "./style";

const ThreeDPizza = () => {
  return (
    <Wrapper>
      <Canvas style={{ pointerEvents: "visible" }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense>
          <LoadGLTF
            url={
              "https://artgallery-bucket.s3.eu-central-1.amazonaws.com/pizza.glb"
            }
          />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};
export default ThreeDPizza;
