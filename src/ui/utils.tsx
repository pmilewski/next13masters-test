"use client";
import { type UrlObject } from "url";
import type { Route } from "next";

export const isLinkActive = <T extends string>(pathname: string, href: Route<T> | UrlObject, exact: boolean): boolean => {
	if (exact) {
		return pathname === href;
	}
	const matchedPathname = pathname?.match(/\/\w+\//);
	const matchedPathname2 = matchedPathname && matchedPathname[0]?.match(/\w+/);
	const matchedPathname3 = matchedPathname2 && matchedPathname2[0];
	return !!(pathname === href || (matchedPathname3 && String(href).includes(matchedPathname3)));
};
