import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils/utils";

const Landing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-black"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center md:gap-[50px] gap-7 w-[70%] md:w-auto ">
        <img src="logo.png" alt="" className="w-[50%] md:w-[60%] " />
        <h1 className=" text-slate-200 font-medium text-xl md:text-4xl pointer-events-none tracking-widest">
          LAUNCHING SOON . . .
        </h1>
        <div className="flex justify-center items-center gap-0 w-full  ">
          <input
            type="text"
            className=" px-2 py-2 rounded-l-lg w-[100%] backdrop-blur-[12.2px] shadow-[0_2px_10px_rgb(0_0_0_/_10%),0_10px_15px_rgb(0_0_0_/_20%)] box-border bg-[linear-gradient(45deg,rgba(66,60,90,0.5),rgba(66,60,90,0.5))] placeholder:text-slate-800 mix-blend-hard-light"
            placeholder="Email"
          />
          <button className=" text-white p-2 px-4 rounded-r-lg text-base bg-[#EE4D31] ">
            Subscribe
          </button>
        </div>
        <p className="text-white md:-mt-10 -mt-5 text-sm md:text-base ">
          *Subscribe to get freebies after lanch{" "}
        </p>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Landing;
