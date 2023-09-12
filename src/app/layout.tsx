import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classnames from "classnames";
import { Footer } from "@/ui/organisms/Footer";
import { Header } from "@/ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={classnames(inter.className, "bg-gray-100 antialiased")}>
				<section className="mx-auto max-w-md p-12 pt-6 sm:max-w-2xl lg:max-w-7xl">
					<Header />
					<section className="mx-auto max-w-md p-12 pt-6 sm:max-w-2xl lg:max-w-5xl">
						{children}
					</section>
					<Footer />
				</section>
			</body>
		</html>
	);
}
