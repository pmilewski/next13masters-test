import ProductsPage from "../page";

export default async function ProductsPaginatedPage({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) {
	return <ProductsPage pageNumber={pageNumber} />;
}
