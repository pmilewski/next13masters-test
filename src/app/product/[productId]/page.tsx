import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList()
// 	return products.map(product => ({productId: product.id}))
// }

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	if (!product) notFound();
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
			images: product.images.map((image) => image.url),
		},
	};
};

export default async function SingleProductPage({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product = await getProductById(productId);
	if (!product) notFound();
	return (
		<>
			<article className="grid grid-cols-3 gap-4" data-testid="single-product">
				<div className="">
					<ProductImage product={product} />
				</div>
				<div className="col-span-2 ">
					<div className="mb-10 text-2xl">
						<ProductListItemDescription
							name={product.name}
							category={product.categories[0]?.name}
							price={product.price}
							textSize="3xl"
						/>
					</div>
					<p>{product.description}</p>
				</div>
			</article>
			<aside>
				<Suspense fallback="Ładowanie...">
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
