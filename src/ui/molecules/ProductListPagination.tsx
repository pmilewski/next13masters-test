"use client";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";

const ProductListPagination = ({
	currentPage,
	isLastPage,
}: {
	currentPage: string;
	isLastPage: boolean;
}) => {
	const currentPageNumber = Number(currentPage);
	const previousPage = currentPageNumber - 1;
	const nextPage = currentPageNumber + 1;
	return (
		<div className="pagination mt-10" aria-label="Pagination">
			{currentPageNumber > 1 && (
				<Link
					href={`/products/${previousPage}`}
					className="mr-5 text-blue-400 hover:text-blue-600"
					aria-label="This is the first page"
				>
					Previous
				</Link>
			)}

			{currentPageNumber > 4 && currentPageNumber - 1 > 0 && (
				<ActiveLink href={`/products/${currentPageNumber - 4}`} exact={true}>
					{currentPageNumber - 4}
				</ActiveLink>
			)}

			{ currentPageNumber > 3 && currentPageNumber - 1 > 1 && (
				<ActiveLink href={`/products/${currentPageNumber - 3}`} exact={true}>
					{currentPageNumber - 3}
				</ActiveLink>
			)}

			{currentPageNumber - 1 > 1 && (
				<ActiveLink href={`/products/${currentPageNumber - 2}`} exact={true}>
					{currentPageNumber - 2}
				</ActiveLink>
			)}

			{currentPageNumber - 1 > 1 && (
				<ActiveLink href={`/products/${currentPageNumber - 1}`} exact={true}>
					{currentPageNumber - 1}
				</ActiveLink>
			)}

			{
				<ActiveLink href={`/products/${currentPageNumber}`} exact={true}>
					{currentPageNumber}
				</ActiveLink>
			}

			{!isLastPage && (
				<Link
					href={`/products/${nextPage}`}
					className="ml-5 text-blue-400 hover:text-blue-600"
					aria-label="This is the last page"
				>
					Next page
				</Link>
			)}
		</div>
	);
};

export { ProductListPagination };
