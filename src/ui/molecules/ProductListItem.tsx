import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};
const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => (
	<li className="group mx-2 rounded-lg border  px-2 py-4 shadow-2xl transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
		<Link href={`/product/${product.id}`}>
			<article>
				{product.images[0] && <ProductImage product={product} />}
				<ProductListItemDescription {...product} category={product.categories[0]?.name} />
			</article>
		</Link>
	</li>
);

export { ProductListItem };
