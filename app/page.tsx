import dynamic from "next/dynamic";

import Hero from "./components/hero";
import FeaturedStories from "./components/featured-stories";
import Header from "./components/navbar";
import Search from "./components/search";

const DynamicLatestStories = dynamic(
  () => import("./components/latest-stories")
);
const DynamicHashTags = dynamic(() => import("./components/hashtags"));
const DynamicNewsLetter = dynamic(() => import("./components/news-letter"));
const DynamicFooter = dynamic(() => import("./components/footer"));

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <FeaturedStories />
      <DynamicLatestStories />
      <DynamicHashTags />
      <DynamicNewsLetter />
      <DynamicFooter />
    </>
  );
}
