import "./App.css";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import CarModel from './component/CarModel'
import { Suspense } from "react";
function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={30}/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <CarModel/>
        </Suspense>
        <Environment preset="sunset"/>
        <ContactShadows opacity={1} position={[0,-0.2,0]} far={10} resolution={256} color= "black"/>
      </Canvas>
    </>
  );
}

export default App;
