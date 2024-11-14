import Card from "@/app/common/card";
import Title from "@/app/common/title";
import { LatestStoriesData } from "@/app/data";

const LatestStories = () => {
  return (
    <div className="my-10 bg-white px-4">
      <div className="sm:w-[95vw] sm:max-w-[1280px] sm:mx-auto">
        <Title
          title="Latest Stories"
          className="sm:!bg-[#ffffff] sm:!px-[12px] "
        />
        <div className="mt-6 sm:flex sm:flex-wrap sm:justify-start sm:gap-10">
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

export default LatestStories;
