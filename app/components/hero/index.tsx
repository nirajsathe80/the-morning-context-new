import Image from "next/image";

const Hero = () => {
  return (
    <>
      <Image
        src="/hero.png"
        alt="hero"
        height={700}
        width={700}
        className="sm:hidden block"
      />
      <Image
        src="/hero-banner.png"
        alt="hero-desktop"
        height={1480}
        width={1480}
        className="hidden sm:block"
      />
    </>
  );
};

export default Hero;
