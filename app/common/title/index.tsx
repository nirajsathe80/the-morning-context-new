const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h1
      className={`font-bold text-[#292929] text-3xl text-center ${className}`}
    >
      {title}
    </h1>
  );
};

export default Title;
