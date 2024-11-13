import Card from "@/app/common/card";
import { hashTagsData, LatestStoriesData } from "@/app/data";

const HashTags = () => {
  return (
    <>
      <div className="bg-[#FFF9F1] py-8 px-4">
        <div className="sm:w-[95vw] sm:max-w-[1280px] sm:mx-auto">
          <h1 className={`font-bold text-[#292929] text-[34px] text-center `}>
            Explore Unicorn Stories by Industry
          </h1>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:gap-5 sm:justify-start gap-3 mt-8">
            {hashTagsData.map((hashtag) => {
              return (
                <div
                  className="border border-[#E7D6C9] px-4 py-2  uppercase w-max min-w-[150px]"
                  key={hashtag}
                >
                  <a href="#" className="text-[#3730A3] text-base ">
                    {" "}
                    #{hashtag}
                  </a>
                </div>
              );
            })}
          </div>
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
    </>
  );
};

export default HashTags;
