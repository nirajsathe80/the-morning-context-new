import Image from "next/image";

interface CardProps {
  newsCategory: string;
  newsImage?: string;
  title: string;
  description?: string;
  authorImage: string;
  authorName: string;
  articleReadTime?: number;
  commentCount: number;
  imageHeight?: number;
  imageWidth?: number;
  titleClass?: string;
  containerClass?: string;
  categoryClass?: string;
}

const Card = ({
  newsCategory,
  newsImage,
  title,
  description,
  authorImage,
  authorName,
  articleReadTime,
  commentCount,
  imageHeight = 300,
  imageWidth = 400,
  titleClass = "",
  containerClass = "",
  categoryClass = "",
}: CardProps) => {
  return (
    <div className={`w-full pb-6 max-w-[400px] ${containerClass}`}>
      <p
        className={`text-[#2CB680] text-[13px] font-medium uppercase mb-2 ${categoryClass}`}
      >
        {newsCategory}
      </p>

      {newsImage ? (
        <Image
          src={newsImage}
          alt="image"
          width={imageWidth}
          height={imageHeight}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: `${imageWidth}px`,
            maxHeight: `${imageHeight}px`,
          }}
        />
      ) : (
        <></>
      )}

      <p
        className={`text-start font-bold text-2xl mt-2 text-[#292929] leading-7 ${titleClass}`}
      >
        {title}
      </p>
      {description ? (
        <p className="text-[#292929] font-normal text-sm leading-6 mt-4">
          {description}
        </p>
      ) : (
        <></>
      )}

      <div className="w-[100px] mt-3 border-[0.5px] border-black"></div>
      <div className="flex justify-between mt-3 pb-5">
        <div className="flex gap-3 items-center">
          <Image
            src={authorImage}
            alt="author"
            height={30}
            width={30}
            className="rounded-[50%]"
          />
          <span className="text-base text-[#292929] font-normal">
            {authorName}
          </span>
        </div>
        <div className="flex gap-3 items-center">
          {articleReadTime ? (
            <>
              <span>{articleReadTime} min read</span>{" "}
              <span className="h-full w-[1px] bg-[#E5E7EB]"></span>
            </>
          ) : (
            <></>
          )}

          <Image src="comment.svg" alt="comment" width={18} height={18} />
          <span>{commentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
