import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="w-full h-full flex items-center justify-center">
        {/* <h1 className=" text-5xl font-Fraunces w-full text-light_pallete/90 text-start mb-[200px] z-30">
          <span className=" border-b-2">Exclusive </span> <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          <span className=" border-b-2">Collection</span>
        </h1> */}
        <div className="w-full flex justify-start bg-light_pallete overflow-hidden mb-[200px] ">
          <h2 className="sale !text-3xl !font-Fraunces">
            Exclusive Collection
          </h2>
          <h2 className="sale !text-3xl !font-Fraunces">
            Exclusive Collection
          </h2>
          <h2 className="sale !text-3xl !font-Fraunces">
            Exclusive Collection
          </h2>
        </div>
      </div>
      {/* <div className="w-[500px] m-auto">
        <span className="w-[300px] h-[1px] bg-light_pallete/50 absolute top-[350px] -left-10 rotate-90 m-auto z-40">
          .
        </span>
        <span className="w-[300px] h-[1px] bg-light_pallete/50 absolute top-[250px] left-[100px] rotate-90 z-40">
          .
        </span>
      </div> */}
      <div className="absolute w-full max-w-[1000px] m-auto gap-6 z-[1] top-[30px] flex flex-wrap justify-center items-center">
        <div className="relative w-[180px] backdrop-blur-[22px] shadow-[inset_0_0_0_200px_rgba(255,255,255,0.074)] border border-solid border-[rgba(255,255,255,0.23)]  rounded-lg ">
          <img src="mockup/hoodie.png" alt="" className=" scale-[1.3] " />
          <div className="absolute top-2 right-1 animate-[spin_5s_linear_infinite]">
            <img src="mockup/hoodie_txt.png" alt="" className="w-[45px]" />
          </div>
        </div>
        <div className="relative w-[180px] top-10 backdrop-blur-[22px] shadow-[inset_0_0_0_200px_rgba(255,255,255,0.074)] border border-solid border-[rgba(255,255,255,0.23)]  rounded-lg ">
          <img src="mockup/crop.png" alt="" className=" scale-[1.4] " />
          <div className="absolute bottom-2 right-1 animate-[spin_5s_linear_infinite]">
            <img src="mockup/hoodie_txt.png" alt="" className="w-[45px]" />
          </div>
        </div>
        <div className="relative w-[180px] top-[110px] backdrop-blur-[22px] shadow-[inset_0_0_0_200px_rgba(255,255,255,0.074)] border border-solid border-[rgba(255,255,255,0.23)]  rounded-lg ">
          <img src="mockup/sweatshirt.png" alt="" className=" scale-[1.6] " />
          <div className="absolute bottom-2 left-1 animate-[spin_5s_linear_infinite]">
            <img src="mockup/sweatshirt_text.png" alt="" className="w-[45px]" />
          </div>
        </div>
        <div className="relative w-[180px] top-[150px] backdrop-blur-[22px] shadow-[inset_0_0_0_200px_rgba(255,255,255,0.074)] border border-solid border-[rgba(255,255,255,0.23)]  rounded-lg ">
          <img src="mockup/oversize.png" alt="" className=" scale-[1.4] " />
          <div className="absolute top-2 left-1 animate-[spin_5s_linear_infinite]">
            <img src="mockup/oversize_text.png" alt="" className="w-[45px]" />
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
