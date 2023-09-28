import NextImage from "next/image";
import { type ProductListItemFragment } from "@/gql/graphql";



type ProductImageProps = {
	product: ProductListItemFragment;
};

export const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
	return (
		product?.images[0] && (
			<NextImage
				alt={product.name}
				src={product.images[0].url}
				width={300}
				height={300}
				priority={true}
			/>
		)
	);
};
