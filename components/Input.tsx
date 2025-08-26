"use client";
import { Input as InputAntd } from "antd";

export default function Input() {
	return (
		<div>
			<InputAntd onChange={(e) => console.log(e.target.value)} />
		</div>
	);
}
