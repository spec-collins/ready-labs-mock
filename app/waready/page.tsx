import type { Metadata } from "next";
import { ProductLanding } from "@/components/product-landing";
import { getProduct } from "@/lib/products";

const product = getProduct("waready");

export const metadata: Metadata = {
  title: product.name,
  description: product.lede,
};

export default function WaReadyPage() {
  return <ProductLanding product={product} />;
}
