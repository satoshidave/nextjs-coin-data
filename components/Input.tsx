"use client";
import { Input as InputAntd } from "antd";

interface InputProps {
	onChange: (value: string) => void;
	placeholder?: string;
}

export default function Input({
	onChange = () => {},
	placeholder,
}: InputProps) {
	return (
		<div>
			<InputAntd
				onChange={(event) => onChange(event.target.value)}
				placeholder={placeholder}
				type="text"
			/>
		</div>
	);
}
