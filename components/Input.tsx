"use client";
import { Input as InputAntd } from "antd";

interface InputProps {
	onChange: (value: string) => void;
}

export default function Input({
	onChange = (value: string) => {},
}: InputProps) {
	return (
		<div>
			<InputAntd onChange={(event) => onChange(event.target.value)} />
		</div>
	);
}
