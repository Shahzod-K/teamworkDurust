import React from "react";
import img from "./picturesAb/call.png";
import "./case.css";
const CaseStudies = () => {
  return (
    <div className="pt-[30px]">
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
      <div className="">
        <div className="">
          <p className="">Social Media Marketing</p>
          <p className="">
            Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
            lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
            sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget
            molestie. Turpis enim arcu, amet donec massa pellentesque nulla
            duis. Arcu dictum metus sed purus senectus faucibus eget elementum
            pretium.
          </p>
          <div className="">
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
