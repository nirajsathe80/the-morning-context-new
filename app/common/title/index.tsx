const Title = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="relative">
      <div className="border-[0.5px] border-[#00000099] hidden sm:block"></div>
      <h1
        className={`font-bold text-[#292929] relative text-3xl text-center sm:absolute sm:left-[50%] sm:top-[-19px] sm:-translate-x-1/2 ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
