import { executeGraphql } from "./graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetListDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getProductsList = async (_page = 1, _take = 20) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (_slug: string) => {};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id: id });
	return graphqlResponse.product;
};
