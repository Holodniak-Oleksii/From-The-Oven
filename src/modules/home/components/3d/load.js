import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export const LoadGLTF = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scale.set(7, 7, 7);
    ref.current.position.set(0, 0.9, 0);
    ref.current.rotation.set(0.7, 0, 0);
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  const gltf = useLoader(GLTFLoader, url);
  return <primitive ref={ref} object={gltf.scene} />;
};
