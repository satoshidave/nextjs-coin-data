import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button component", () => {
	it('renderiza el botón con texto "Buscar"', () => {
		render(<Button />);
		expect(
			screen.getByRole("button", { name: /buscar/i })
		).toBeInTheDocument();
	});

	it("ejecuta onClick al hacer clic", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick} />);
		fireEvent.click(screen.getByRole("button", { name: /buscar/i }));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
