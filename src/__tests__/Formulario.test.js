import Formulario from "../components/Formulario";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

it("<Formulario/> cargar el formulario y revisar que todo sea correcto", () => {
  // const wrapper = render(<Formulario />);
  // wrapper.debug();
  render(<Formulario />);
  expect(screen.getByText("Crear Cita")).toBeInTheDocument();
});
