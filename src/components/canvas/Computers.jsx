import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"

const Computers = ({ removeObject, isMobile }) => {

  const computer = useGLTF('./graphic_designer/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.3} />
      <spotLight
        position={[-50, 50, 10]}
        angle={0.15}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={removeObject ? 0 : (isMobile ? 3 : 4)}
        position={isMobile ? [0, 0, 0] : [3, -0.5, -1.0]}
        rotation={[-0.3, -0.3, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = ({ removeObject, isMobile }) => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: isMobile ? [5, 10, 15] : [5, 10, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers removeObject={removeObject} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas