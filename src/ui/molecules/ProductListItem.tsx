import Link from "next/link";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import type { ProductItemType } from "@/ui/types";

const ProductListItem = ({ id, name, price, coverImage }: ProductItemType) => (
	<li className="group mx-2 rounded-lg border  px-2 py-4 shadow-2xl transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
		<Link href={`/product/${id}`}>
			<article>
				<ProductCoverImage {...coverImage} />
				<ProductListItemDescription name={name} price={price} />
			</article>
		</Link>
	</li>
);

export { ProductListItem };
