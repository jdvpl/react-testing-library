import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("<App/> pruebas de integracion", () => {
  // const wrapper = render(<App />);
  // // verificar que se este mondanto el component
  // wrapper.debug();
  render(<App />);
  const mainTitle = screen.getByTestId("maintitle-h1");
  expect(mainTitle).toBeInTheDocument();
  expect(mainTitle.textContent).toBe("Administrador de Pacientes");
  expect(screen.getByText("No hay citas")).toBeInTheDocument();
  expect(screen.getByText("Crear Cita")).toBeInTheDocument();
});
