"use client";
import type { Route } from "next";

export const isLinkActive = (pathname: string, href: Route): boolean => {
	const matchedPathname = pathname?.match(/\/\w+\//);
	const matchedPathname2 = matchedPathname && matchedPathname[0]?.match(/\w+/);
	const matchedPathname3 = matchedPathname2 && matchedPathname2[0];
	return !!(pathname === href || (matchedPathname3 && href.includes(matchedPathname3)));
};
