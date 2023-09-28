import { ProductListItem } from "../molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

const ProductList = ({ products }: { products: ProductListItemFragment[] }) => (
	<ul data-testid="products-list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
		{products.map((product) => (
			<ProductListItem key={product.name} product={product} />
		))}
	</ul>
);

export { ProductList };
