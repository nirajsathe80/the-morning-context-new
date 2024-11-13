import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image
        src="/hero.svg"
        alt="hero"
        height={700}
        width={700}
        className="sm:hidden block"
        loading="eager"
      />
      <Image
        src="/hero-desktop.svg"
        alt="hero-desktop"
        height={1480}
        width={1480}
        className="hidden sm:block"
        loading="eager"
      />
    </div>
  );
};

export default Hero;
