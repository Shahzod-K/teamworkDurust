import React from "react";
import img from "./picturesAb/call.png";
import img1 from "./picturesAb/buttons.png";
import img2 from "./picturesAb/illustration.png";
import img3 from "./picturesAb/illustration (1).png";
import "./case.css";
const CaseStudies = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
    <div className="">
      <div className=" fail h-[75vh]">
        <p className="text-center text-[white] text-[42px] pt-[120px]">
          Our services
        </p>
        <p className="text-center m-auto w-[650px] text-[lightgray] text-[16px]">
          We offer more than services. Our agency provides solutions to your
          top-priority concerns, involving customer targeting, email performance
          and sales growth. If there is no existing solution readily available,
          we create one, specifically to suit your business.
        </p>
        <div className="">
          <div className="flex justify-center items-center mt-[50px] gap-[20px]">
            <button className="border-[1px] text-[white] py-[8px] px-[27px] border-[gray]">
              Start now
            </button>
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[120px] gap-[40px]">
        <div className="flex flex-col gap-[15px]">
          <p className="text-[35px]">Social Media Marketing</p>
          <p className="w-[500px]">
            Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
            lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
            sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget
            molestie. Turpis enim arcu, amet donec massa pellentesque nulla
            duis. Arcu dictum metus sed purus senectus faucibus eget elementum
            pretium.
          </p>
          <div className="">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="">
          <img src={img2} className="w-[500px]" alt="" />
        </div>
      </div>
      <div className="">
        <div className="">
          <img src={img3} className="w-[670px]" alt="" />
        </div>
        <div className="flex flex-col gap-[15px]">
          <p className="text-[35px]">Social Media Marketing</p>
          <p className="w-[500px]">
            Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices
            aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu
            pulvinar duis in posuere non adipiscing. Nunc, tristique viverra
            tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem
            in tristique.
          </p>
          <div className="">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CaseStudies;
