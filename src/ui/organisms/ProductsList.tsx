import type { ProductItemType } from "../types";
import { ProductListItem } from "../molecules/ProductListItem";

const ProductList = ({ products }: { products: ProductItemType[] }) => (
	<ul data-testid="products-list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
		{products.map((product) => (
			<ProductListItem key={product.name} {...product} />
		))}
	</ul>
);

export { ProductList };
