import { NextResponse } from "next/server";

type Params = {
	params: {
		coin: string;
	};
};

export async function GET(request: Request, { params }: Params) {
	const { coin } = params;
	try {
		const res = await fetch(
			`https://api.coingecko.com/api/v3/coins/${coin}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		console.log("res de coingecko", res);

		if (!res.ok) {
			return NextResponse.json(
				{ error: "Error al consultar CoinGecko" },
				{ status: res.status }
			);
		}

		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(
			{ error: "Error interno del servidor" },
			{ status: 500 }
		);
	}
}
