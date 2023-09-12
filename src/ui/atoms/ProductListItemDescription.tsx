export const ProductListItemDescription = ({
	name,
	price,
	textSize = "xl",
}: {
	name: string;
	price: number;
	textSize?: string;
}) => (
	<>
		<h1 className={`mt-3 text-${textSize} font-semibold`}>{name}</h1>

		<p className={`m-0 max-w-[30ch] text-${textSize} opacity-50`}>{price} zł</p>
	</>
);
