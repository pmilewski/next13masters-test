import { Suspense } from "react";
import type { Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";
import type { ProductItemType } from "@/ui/types";

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
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
			images: [product.coverImage.src],
		},
	};
};

export default async function SingleProductPage({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product: ProductItemType = await getProductById(productId);
	return (
		<>
			<article className="w-75">
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription name={product.name} price={product.price} />
				{product.description}
			</article>
			<aside>
				<Suspense fallback="Ładowanie...">
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
