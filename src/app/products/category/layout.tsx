import type { ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ category: "t-shirts" }, { category: "boots" }];
};

export default function CategoryProductsLayout({ children }: { children: ReactNode }) {
	return children;
}
