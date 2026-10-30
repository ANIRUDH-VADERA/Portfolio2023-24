import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
} from "@react-three/drei";

import CanvasLoader from "../../Loader/Loader.js";

const Ball = ({ accent = "#087f8c" }) => {
  return (
    <Float speed={1.1} rotationIntensity={0.65} floatIntensity={1.1}>
      <mesh scale={1.28}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color={accent} wireframe={false} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ accent }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: false, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball accent={accent} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;