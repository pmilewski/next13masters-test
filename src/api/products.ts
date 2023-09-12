import type { ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const BASE_URL = "https://naszsklep-api.vercel.app/api/products"

export const getProductsList = async (page = 1, take = 20) => {
	const offset = (page - 1) * take;
	const res = await fetch(`${BASE_URL}?take=${take}&offset=${offset}`);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductItemType);
    return products;
}

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`${BASE_URL}/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
}

const productResponseItemToProductItemType = (productResponse: ProductResponseItem): ProductItemType => ({
	id: productResponse.id,
	name: productResponse.title,
	category: productResponse.category,
	description: productResponse.longDescription,
	price: productResponse.price,
	coverImage: {
		src: productResponse.image,
		alt: productResponse.title,
	},
});
