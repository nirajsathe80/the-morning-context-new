import { files } from "@/app/data";
import Image from "next/image";

const Search = () => {
  return (
    <div className="bg-[#FFF9F1] px-4 py-7">
      <div className="sm:w-[95vw] sm:max-w-[1280px] sm:mx-auto">
        <div className="border border-[#E7D6C9] bg-white py-3 px-5 flex gap-5">
          <input
            type="text"
            placeholder="Search by company name"
            className="w-full outline-none text-[#6B7280] text-lg"
          />
          <Image src="search.svg" height={19} width={19} alt="search" />
        </div>
        <div className="overflow-auto scroll-bar-width">
          <div className="inline-flex gap-4 items-center justify-center mt-5">
            {files.map((file, index) => {
              return (
                <div
                  key={index}
                  className="border border-[#E7D6C9] px-3 py-2 h-14 bg-white w-[140px] flex justify-center"
                >
                  <Image
                    src={`/${file}.svg`}
                    height={25}
                    width={90}
                    alt={file}
                    className="object-scale-down"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
