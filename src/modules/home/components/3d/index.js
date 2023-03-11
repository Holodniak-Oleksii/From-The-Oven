/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";

import { LoadGLTF } from "./load";

import { Wrapper } from "./style";
import { useEffect } from "react";
import { LayoutContext } from "@/layout/index";
import { Html, useProgress } from "@react-three/drei";

const ThreeDPizza = () => {
  function Loader() {
    const { progress } = useProgress();
    const { setLoading } = useContext(LayoutContext);
    useEffect(() => {
      if (progress === 100) {
        setLoading(false);
      }
    }, [progress]);

    return <Html center></Html>;
  }
  return (
    <Wrapper>
      <Canvas style={{ pointerEvents: "visible" }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
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
