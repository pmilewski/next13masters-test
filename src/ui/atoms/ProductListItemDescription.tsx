export const ProductListItemDescription = ({ name, price }: { name: string; price: number }) => (
	<>
		<h1 className={`mt-3 text-xl font-semibold`}>{name}</h1>

		<p className={`m-0 max-w-[30ch] text-xl opacity-50`}>{price} zł</p>
	</>
);
