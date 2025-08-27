export default function NotFound({ coin }: { coin: string }) {
	return (
		<p>
			No se encontró información para <strong>{coin}</strong>. Verifica el
			nombre e intenta nuevamente.
		</p>
	);
}
