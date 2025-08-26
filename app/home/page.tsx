import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./home.module.css";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<h1 className="text-4xl font-bold">Welcome to Next.js</h1>
				<p className="text-lg">
					Get started by editing <code>app/page.tsx</code>
					<br />
				</p>
				<div className={styles.searchBar}>
					<div>
						<Input />
					</div>
					<div>
						<Button />
					</div>
				</div>
			</main>
		</div>
	);
}
