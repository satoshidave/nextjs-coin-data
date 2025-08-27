export default function Loading() {
	return (
		<div className="border border-yellow-400 border-dashed p-4 text-center text-yellow-300 animate-pulse">
			<p className="text-lg font-medium">
				Buscando información de la coin... 🪙
			</p>
			<p className="text-sm text-yellow-500 mt-2">
				Por favor, espere un segundito ;-)
			</p>
		</div>
	);
}
