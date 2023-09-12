import { getProductsList } from "@/api/products";

export const generateStaticParams = async () => {
	const products = await getProductsList(1, 5000);
	const productsCount = products.length;
	const productsPerPage = 20;
    const pagesCount = Math.ceil(productsCount / productsPerPage);
    return [...Array(pagesCount).keys()].map((pageNumber) => ({ pageNumber: String(pageNumber + 1) }));
};

export default function ProductsPaginatedLayout({ children }: { children: React.ReactNode }) {
	return children;
}
