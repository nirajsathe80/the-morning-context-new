import Card from "@/app/common/card";
import Title from "@/app/common/title";
import { featuredStoriesData } from "@/app/data";

const FeaturedStories = () => {
  return (
    <div className="bg-[#FFF9F1] py-6 px-4">
      <div className="sm:w-[95vw] sm:max-w-[1280px] sm:mx-auto">
        <Title
          title="Featured Story"
          className="sm:!bg-[#FFF9F1] sm:!px-[12px] "
        />
        <div className="mt-6">
          {featuredStoriesData.map(
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
                  imageHeight={500}
                  imageWidth={1280}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedStories;
