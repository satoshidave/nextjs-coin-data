import React from "react";
import { Button as ButtonAntd } from "antd";

interface ButtonProps {
	onClick?: () => void;
}

export default function Button({ onClick = () => {} }: ButtonProps) {
	return (
		<div>
			<ButtonAntd onClick={onClick} type="primary">
				Buscar
			</ButtonAntd>
		</div>
	);
}
