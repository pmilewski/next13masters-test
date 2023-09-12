import { getProductsList } from "@/api/products";
import { ProductListPagination } from "@/ui/molecules/ProductListPagination";
import { ProductList } from "@/ui/organisms/ProductsList";

export default async function ProductsPage({ pageNumber = "1" }: { pageNumber: string }) {
	const take = 20;
	const products = await getProductsList(Number(pageNumber), take);
	const productsOnPageCount = products.length;
	const isLastPage = productsOnPageCount < take;
	return (
		<>
			<ProductList products={products} />
			<ProductListPagination currentPage={pageNumber} isLastPage={isLastPage} />
		</>
	);
}
