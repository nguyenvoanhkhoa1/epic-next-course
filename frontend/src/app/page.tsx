import { FeatureSection } from "@/components/custom/FeaturesSection";
import { HeroSection } from "@/components/custom/HeroSection";
import { getHomePageData } from "@/data/loaders";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();

  const { blocks } = strapiData;
  if (!blocks) return <p>No sections found</p>;

  console.dir(blocks, { depth: null });

  return <main>{blocks.map(blockRenderer)}</main>;
}
