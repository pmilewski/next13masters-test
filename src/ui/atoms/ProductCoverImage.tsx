import Image from "next/image";

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => (
	<Image alt={alt} src={src} width={300} height={300} priority={true} />
);
