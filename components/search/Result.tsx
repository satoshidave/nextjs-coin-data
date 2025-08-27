interface ResultProps {
	data: {
		image: {
			large: string;
		};
		name: string;
		symbol: string;
		description: {
			en: string;
		};
		market_data: {
			current_price: {
				usd: number;
			};
		};
	};
}

export default function Result({ data }: ResultProps) {
	return (
		<div className="flex flex-col md:flex-row">
			<div className="mr-8 min-w-[80px]">
				<img src={data.image.large} alt={data.name} />
			</div>
			<div>
				Nombre: {data.name}
				<br />
				Símbolo: {data.symbol}
				<br />
				Descripción: {data.description.en}
				<br />
				Precio: {data.market_data.current_price.usd} USD
			</div>
		</div>
	);
}
