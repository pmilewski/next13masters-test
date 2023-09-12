import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductsList";

export default async function ProductsPage() {
	const products = await getProductsList()
	return <ProductList products={products} />
}
