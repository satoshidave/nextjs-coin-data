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
		error?: boolean | undefined;
	};
}

export default function Result({ data }: ResultProps) {
	const coinItems = [
		{
			label: "Nombre",
			value: data.name,
		},
		{
			label: "Simbolo",
			value: data.symbol.toUpperCase(),
		},
		{
			label: "Descripcion",
			value: data.description.en,
		},
		{
			label: "Precio",
			value: data.market_data.current_price.usd,
		},
	];
	return (
		<div className="flex flex-col md:flex-row">
			<div className="mr-8 min-w-[80px]">
				<img src={data.image.large} alt={data.name} />
			</div>
			<div>
				{coinItems.map((item) => (
					<div key={item.label}>
						<p className="font-semibold">{item.label}</p>
						<p>{item.value}</p>
					</div>
				))}
			</div>
		</div>
	);
}
