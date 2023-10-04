import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils/utils";
import { Toast } from "../context/ToastContext";

import emailjs from "@emailjs/browser";

const emailRegex = /^[A-Za-z0-9. _%+-]+@[A-Za-z0-9. -]\. [A-Z]{2,4}$/i;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const Landing = () => {
  const form = useRef();

  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");

  const { success, error } = Toast();

  const clearInput = () => {
    setEmail("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    if (email === "" || validateEmail(email) === true) {
      error("Field is empty OR wrong email!!");
      setLoader(false);
      console.log(validateEmail(email));
    } else {
      emailjs
        .sendForm(
          "service_gdm10ak",
          "template_2v70m7c",
          form.current,
          "jgD1dSgL1VKS1UTD5"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoader(false);
            clearInput();
            success("You Subscribe Successfuly!");
          },
          (err) => {
            console.log(err.text);
            setLoader(false);
            error("Something went wrong!");
          }
        );
    }
  };

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
        <h1 className=" text-slate-200 font-medium text-lg md:text-4xl pointer-events-none tracking-widest">
          LAUNCHING SOON . . .
        </h1>
        <div className="w-full  ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex justify-center items-center gap-0 w-full  "
          >
            <input
              id="eamil"
              type="text"
              className=" px-2 py-2 rounded-l-lg w-[100%] backdrop-blur-[12.2px] shadow-[0_2px_10px_rgb(0_0_0_/_10%),0_10px_15px_rgb(0_0_0_/_20%)] box-border bg-[linear-gradient(45deg,rgba(66,60,90,0.5),rgba(66,60,90,0.5))] placeholder:text-slate-800 mix-blend-hard-light"
              placeholder="Email"
              name="from_email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              onClick={sendEmail}
              className={` ${
                loader ? "bg-slate-500 " : "bg-[#EE4D31]"
              } text-white p-2 px-4 rounded-r-lg text-base bg-[#EE4D31]`}
            >
              Subscribe
            </button>
          </form>
        </div>
        <p className="text-white md:-mt-10 -mt-5 text-xs md:text-base ">
          *Subscribe to get freebies after launch{" "}
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
