"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./home.module.css";

export default function Home() {
	const [inputValue, setInputValue] = useState<string>("");

	const onChangeInput = (value: string) => {
		setInputValue(value);
	};

	console.log(inputValue);

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<p className="text-lg">
					Coin checker App
					<br />
				</p>
				<div className={styles.searchBar}>
					<div>
						<Input onChange={onChangeInput} />
					</div>
					<div>
						<Button />
					</div>
				</div>
			</main>
		</div>
	);
}
