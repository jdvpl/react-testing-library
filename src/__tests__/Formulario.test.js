import Formulario from "../components/Formulario";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

it("<Formulario/> cargar el formulario y revisar que todo sea correcto", () => {
  // const wrapper = render(<Formulario />);
  // wrapper.debug();
  render(<Formulario />);

  // en toda la pantalla
  expect(screen.getByText("Crear Cita")).toBeInTheDocument();
  // heading
  expect(screen.getByTestId("maintitle").textContent).toBe("Crear Cita");
  expect(screen.getByTestId("maintitle").tagName).toBe("H2");
  expect(screen.getByTestId("maintitle").tagName).not.toBe("H1");
  // boton
  expect(screen.getByTestId("btn-submit").tagName).toBe("BUTTON");
});
