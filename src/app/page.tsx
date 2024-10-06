import BestSeller from "@/components/bestSeller";
import Brand from "@/components/brand";
import Hero from "@/components/hero";
import ProductDiscounts from "@/components/productDiscounts";
import ProductsCard from "@/components/products-card";
import ZaraCollections from "@/components/zara-collections";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Brand />
      <ProductsCard />
      <ZaraCollections />
      <BestSeller />
      <ProductDiscounts />
    </div>
  );
}
