import { logos } from "@/app/data";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#363839]  py-8">
      <div className="sm:w-[95vw] sm:max-w-[1280px] sm:mx-auto">
        <div className="flex justify-center">
          <Image src="logo-white.svg" alt="logo" width={150} height={65} />
        </div>
        <div className="px-4">
          <p className="text-[#FFFFFF] text-lg font-semibold text-center mt-8">
            Follow us on
          </p>
          <div className="flex justify-between mt-6">
            {logos.map(({ src, url }) => {
              return (
                <a href={url} target="_blank" key={src}>
                  <Image src={src} alt={src} height={18} width={18} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="bg-white border-[0.5px] mt-10"></div>
        <div className="px-4 py-8 grid grid-cols-2 gap-6 text-white">
          <div>
            <p className="text-[#FFFFFF] font-semibold text-xl"> Category</p>
            <div className="text-base font-medium flex flex-col gap-3 mt-3">
              <span className="text-[#FC876D]">Internet</span>
              <span className="text-[#2CB680]">Business</span>
              <span className="text-[#907CFF]">Chaos</span>
              <span className="text-[#ECB731]">NewsLetters</span>
              <span className="text-[#FFFFFF]">All stories</span>
            </div>
          </div>
          <div>
            <p className="text-[#FFFFFF] font-semibold text-xl">
              {" "}
              Subscription
            </p>
            <div className="text-base font-medium flex flex-col gap-3 mt-3">
              <span>Individual Plans</span>
              <span> Corporate Plans</span>
              <span>Student Plans</span>
              <span>Gifting</span>
            </div>
          </div>
          <div>
            <p className="text-[#FFFFFF] font-semibold text-xl"> Company </p>
            <div className="text-base font-medium flex flex-col gap-3 mt-3">
              <span>About</span>
              <span>Leadership</span>
              <span>Investors</span>
              <span>Team</span>
              <span>Editorial code of conduct</span>
            </div>
          </div>
          <div className="text-white text-base">
            <p className="max-w-[180px] mb-3">
              The Morning Context Blog - On the record
            </p>
            <p className="mb-8">TMC Subscriber App</p>
            <div className="mb-2">Collaborate</div>
            <div className="mb-2">Contact US</div>
            <div className="mb-2">FAQs</div>
          </div>
        </div>
        <div className="bg-white border-[0.5px] mt-1"></div>
        <div className="text-center font-normal text-base my-5 text-white">
          <p>©2020 Slowform Pte Limited </p>
          <p>68 Circular Road, #02-01, 049422, Singapore</p>
        </div>
        <div className="bg-white border-[0.5px] mt-1"></div>
        <div className="flex gap-4 justify-center my-7 text-white text-xl">
          <span className="underline  cursor-pointer">Terms of service</span>
          <span className="underline  cursor-pointer">Privacy policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
