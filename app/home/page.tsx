"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./home.module.css";
import Feedback from "@/components/search/Feedback";

export default function Home() {
	const [inputValue, setInputValue] = useState<string>("");
	const [coinData, setCoinData] = useState({});
	const [coin, setCoin] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onChangeInput = (value: string) => {
		setInputValue(value);
	};

	const onSearch = () => {
		if (!inputValue) return;
		setIsLoading(true);
		setCoin(inputValue);
		fetch(`/api/coingecko/${inputValue}`)
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(false);
				if (data.error) {
					setCoinData({ error: true });
				} else {
					setCoinData(data);
				}
			});
	};

	console.log("coin data", coinData, JSON.stringify(coinData));

	return (
		<div className="p-16">
			<main className="flex flex-col items-center">
				<p className="text-4xl">Coin checker App</p>
				<p className="text-sm text-gray-300">
					Una pequeña web App para buscar información de criptomonedas
					usando next.js
				</p>
				<div className={`${styles.searchBar} mt-8 mb-8`}>
					<div>
						<Input
							onChange={onChangeInput}
							placeholder="Ingresa coin a buscar"
						/>
					</div>
					<div>
						<Button onClick={onSearch} />
					</div>
				</div>
				<div className="border border-white border-dotted p-4">
					<Feedback
						coinData={coinData}
						coin={coin}
						loading={isLoading}
					/>
				</div>
			</main>
		</div>
	);
}
