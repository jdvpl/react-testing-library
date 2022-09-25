import Formulario from "../components/Formulario";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

const crearCita = jest.fn();

it("<Formulario/> cargar el formulario y revisar que todo sea correcto", () => {
  // const wrapper = render(<Formulario />);
  // wrapper.debug();
  render(<Formulario crearCita={crearCita} />);

  // en toda la pantalla
  expect(screen.getByText("Crear Cita")).toBeInTheDocument();
  // heading
  const title = screen.getByTestId("maintitle");
  expect(title.textContent).toBe("Crear Cita");
  expect(title.tagName).toBe("H2");
  expect(title.tagName).not.toBe("H1");
  // boton
  const button = screen.getByTestId("btn-submit");
  expect(button.tagName).toBe("BUTTON");
  expect(button.textContent).toBe("Agregar Cita");
  expect(button.textContent).not.toBe("Agregar Nueva Cita");
});

it("<Formulario/> validacion de formulario", () => {
  render(<Formulario crearCita={crearCita} />);

  // click en el boton
  const btnSubmit = screen.getByTestId("btn-submit");
  fireEvent.click(btnSubmit);
  // revisar por alerta
  const alerta = screen.getByTestId("test-alerta");
  expect(alerta.textContent).toBe("Todos los campos son obligatorios");
  expect(alerta.tagName).toBe("P");
  expect(alerta.tagName).not.toBe("BUTTON");
  expect(alerta).toBeInTheDocument();
});
