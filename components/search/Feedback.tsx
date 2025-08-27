import Empty from "./Empty";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Result from "./Result";

interface FeedbackProps {
	coinData: {
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
		error?: boolean;
	};
	coin: string;
	loading?: boolean;
}

export default function Feedback({
	coinData,
	coin,
	loading = false,
}: FeedbackProps) {
	if (Object.keys(coinData).length === 0) return <Empty />;
	if (coinData.error) return <NotFound coin={coin} />;
	if (loading) return <Loading />;
	return <Result data={coinData} />;
}
