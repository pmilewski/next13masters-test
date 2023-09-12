"use client";
import { type UrlObject } from "url";
import classNames from "classnames";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLinkActive } from "../utils";

const ActiveLink = <T extends string>({
	children,
	href,
	className = "border-b-2 border-blue-50",
	activeClassName = "border-b-4 border-blue-400",
	exact = false,
}: {
	children: React.ReactNode;
	href: Route<T> | UrlObject;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const isActive = isLinkActive(pathname, href, exact);

	return (
		<Link
			className={classNames(
				`mr-3 border-b-4 text-blue-400 hover:text-blue-600`,
				isActive ? activeClassName : className,
			)}
			href={href}
		>
			{children}
		</Link>
	);
};

export { ActiveLink };
