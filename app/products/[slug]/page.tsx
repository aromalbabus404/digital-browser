import { productsData } from "@/data/products";
import ProductDetailView from "@/components/digital/ProductDetailView";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Master Pools Equipment Catalog`,
    description: product.shortDesc,
    openGraph: {
      title: product.name,
      description: product.shortDesc,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded glass-panel hover:border-aqua text-white text-xs font-mono uppercase"
        >
          <ArrowLeft className="w-4 h-4 text-aqua" />
          <span>Open Full Digital Browser</span>
        </Link>
      </div>
      <ProductDetailView product={product} />
    </div>
  );
}
