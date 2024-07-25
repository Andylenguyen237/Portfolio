"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const SolarCanvas = () => {
  //   const earth = useGLTF("./planet/scene.gltf");
  const earth = useGLTF("./planets/scene.gltf");

  return (
    <Canvas
      className="cursor-pointer w-full h-max flex"
      frameloop="demand"
      camera={{ position: [60, 100, 20], fov: 700, near: 10, far: 1000 }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <primitive object={earth.scene} scale={1} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

export default SolarCanvas;
