import React from "react";
import img from "./picturesAb/call.png";
import img1 from "./picturesAb/buttons.png";
import img2 from "./picturesAb/illustration.png";
import img3 from "./picturesAb/illustration (1).png";
import img4 from "./picturesAb/illustration (2).png";
import img5 from "./picturesAb/illustration (3).png";
import img6 from "./picturesAb/illustration (4).png";
import img7 from "./picturesAb/ic-cart.png"
import img8 from "./picturesAb/ic-startup.png"
import img9 from "./picturesAb/ic-suitcase.png"
import img10 from "./picturesAb/ic-website.png"
import "./case.css";
import Card1 from "../main/card1/card1";
const CaseStudies = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="">
        <div className=" fail h-[75vh]">
          <p className="text-center text-[white] text-[42px] pt-[120px]">
            Our services
          </p>
          <p className="text-center m-auto w-[650px] text-[lightgray] text-[16px]">
            We offer more than services. Our agency provides solutions to your
            top-priority concerns, involving customer targeting, email
            performance and sales growth. If there is no existing solution
            readily available, we create one, specifically to suit your
            business.
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
        <div className="flex justify-center items-center mt-[120px] gap-[40px]">
          <div className="">
            <img src={img3} className="w-[670px]" alt="" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[35px]">Social Media Marketing</p>
            <p className="w-[500px]">
              Elementum ipsum lorem tortor morbi quis turpis pellentesque
              ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus,
              eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique
              viverra tincidunt nec proin tempus egestas massa. Quis velit nunc
              nisl sem in tristique.
            </p>
            <div className="">
              <img src={img1} alt="" />
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
            <img src={img4} className="w-[500px]" alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[120px] gap-[40px]">
          <div className="">
            <img src={img5} className="w-[670px]" alt="" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[35px]">Content & PR Service</p>
            <p className="w-[500px]">
              Consequat pharetra elit posuere fringilla luctus sit. Curabitur
              accumsan fermentum magna amet. Sed nec amet posuere tellus
              pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet,
              sit aliquet magna in viverra at elit nullam.
            </p>
            <div className="">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[120px] gap-[40px]">
          <div className="flex flex-col gap-[15px]">
            <p className="text-[35px]">Payed Traffic Management</p>
            <p className="w-[500px]">
              Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus
              ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut
              mattis dis nullam ultrices amet. Lacus eu neque arcu arcu
              curabitur at sapien. Id sed aliquet id sit nibh ornare massa
              scelerisque.
            </p>
            <div className="">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="">
            <img src={img6} className="w-[500px]" alt="" />
          </div>
        </div>
        <Card1 />
        <p className="text-center text-[37px] mt-[100px] mb-[50px]">Markets in which we operate</p>
        <div className="flex justify-center items-center gap-[100px] mb-[70px]">
          <div className="flex flex-col justify-center items-center gap-[15px]">
            <img src={img7} alt="" />
            <p className="">E-commerce Websites</p>
            <p className="w-[200px] text-center">
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px]">
            <img src={img8} alt="" />
            <p className="">E-commerce Websites</p>
            <p className="w-[200px] text-center">
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px]">
            <img src={img9} alt="" />
            <p className="">E-commerce Websites</p>
            <p className="w-[200px] text-center">
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px]">
            <img src={img10} alt="" />
            <p className="">E-commerce Websites</p>
            <p className="w-[200px] text-center">
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
