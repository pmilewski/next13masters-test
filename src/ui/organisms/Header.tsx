import { ActiveLink } from "../atoms/ActiveLink";

const Header = () => {
	return (
		<header className="mx-auto w-full max-w-5xl text-center">
			<nav className="bg-gray-300 px-4 py-2 ">
				<ActiveLink href="/">Home</ActiveLink>
				<ActiveLink href="/products">All</ActiveLink>
			</nav>
		</header>
	);
};

export { Header };
