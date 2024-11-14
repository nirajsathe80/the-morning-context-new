import Card from "@/app/common/card";
import { LatestStoriesData } from "@/app/data";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div>
      <div className="bg-[#FFF9F1] pt-7  text-[#292929] ">
        <div className="sm:w-[95vw] sm:max-w-[1280px] sm:mx-auto sm:flex sm:gap-10">
          <div>
            <h1 className="text-[34px] leading-[51px]  font-bold px-4">
              Stay Informed with our Weekly FinTech Newsletter
            </h1>
            <p className="text-[19px] leading-[29px] tracking-[0.3px] my-4 px-4">
              The Fintech Review helps explain whats going on in the world of
              financial technology, every second Tuesday
            </p>
            <div className="px-4">
              <button className="uppercase bg-[#1E1B4B] text-white text-[17px] w-full text-center py-4 font-bold mb-8">
                learn more
              </button>
            </div>
          </div>
          <Image src="/banner.png" alt="banner" height={400} width={600} />
        </div>
      </div>
      <div className="sm:w-[95vw] sm:max-w-[1280px] sm:mx-auto">
        <div className="px-4 mt-4 my-10 sm:flex sm:flex-wrap sm:gap-5">
          {LatestStoriesData.map(
            (
              {
                newsCategory,
                newsImage,
                title,
                description,
                authorName,
                articleReadTime,
                authorSrc,
                commentsCount,
              },
              index
            ) => {
              return (
                <Card
                  newsCategory={newsCategory}
                  newsImage={newsImage}
                  title={title}
                  description={description}
                  authorName={authorName}
                  key={index}
                  authorImage={authorSrc}
                  articleReadTime={articleReadTime}
                  commentCount={commentsCount}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
