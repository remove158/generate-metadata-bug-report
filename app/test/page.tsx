import { Metadata } from "next";

export default function page() {
	console.count("page load");
	return <div>page</div>;
}

export async function generateMetadata(): Promise<Metadata> {
	await new Promise((r) => setTimeout(r, 50, "some value"));
	console.count("generate metadata");
	return {};
}
