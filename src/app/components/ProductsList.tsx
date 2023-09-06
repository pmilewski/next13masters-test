import ProductCard from "./ProductCard";
import { products } from "./../utils";

const ProductList = () => (
	<ul
		data-testid="products-list"
		className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"
	>
		{products.map((product) => (
			<ProductCard key={product.name} {...product} />
		))}
	</ul>
);

export default ProductList;
