import Image from "next/image";

const ProductCard = ({
	name,
	description,
	price,
	imageUrl,
	slug,
}: {
	name: string;
	description: string;
	price: string;
	imageUrl: string;
	slug: string;
}) => (
	<li className="group mx-2 rounded-lg border  px-2 py-4 shadow-2xl transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
		<a href={`/products/${slug}`}>
			<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
				-&gt;
			</span>

			<h2 className={`mb-3 h-24 text-xl font-semibold`}>{name}</h2>

			<Image alt={name} src={imageUrl} width={300} height={300} priority={true} />

			<p className={`m-0 mt-10 h-32 max-w-[30ch] text-sm opacity-50`}>{description}</p>
			<p className={`m-0 max-w-[30ch] text-xl opacity-50`}>{price} zł</p>
		</a>
	</li>
);

export default ProductCard;
