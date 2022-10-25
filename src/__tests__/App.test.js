import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";

/* Testing the main title of the app. */
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

/* Testing the form and the submit button. */
it("<App/> agregar una cita y verificar el heading", () => {
  render(<App />);

  const mascotaInput = screen.getByTestId("mascota");
  const propietarioInput = screen.getByTestId("propietario");

  const fechaInput = screen.getByTestId("fecha");
  const horaInput = screen.getByTestId("hora");
  const sintomasInput = screen.getByTestId("sintomas");

  // con userEvent mejor sintaxis
  userEvent.type(mascotaInput, "Saitama");
  userEvent.type(propietarioInput, "Kakaroto");
  userEvent.type(fechaInput, "2022-09-10");
  userEvent.type(horaInput, "10:30");
  userEvent.type(sintomasInput, "Fiebre, Toz, Gripe, Vomito");
  // click en el boton
  const btnSubmit = screen.getByTestId("btn-submit");
  userEvent.click(btnSubmit);

  const alerta = screen.queryByTestId("test-alerta");
  expect(alerta).not.toBeInTheDocument();

  // titulo dinamico
  const titleDynamic = screen.getByTestId("title-app-citas");
  expect(titleDynamic.textContent).toBe("Administra tus Citas");
  expect(titleDynamic.textContent).not.toBe("No hay citas");
});

it("<App/> verificar las citas en el DOM", () => {
  render(<App />);
  const citas = screen.getAllByTestId("cita");
  const btnEliminar = screen.getByTestId("btn-eliminar");
  // snapshot crea un archivo para verificar su contendio
  // expect(citas).toMatchSnapshot();
  expect(btnEliminar.tagName).toBe("BUTTON");
  expect(screen.getByTestId("btn-eliminar")).toBeInTheDocument();
  // verificar cita
  expect(screen.getByText("Saitama")).toBeInTheDocument();
});

// delete la cita
it("<App/> verificar citas", () => {
  render(<App />);
  const btnEliminar = screen.getByTestId("btn-eliminar");
  expect(btnEliminar).toBeInTheDocument();

  // trying to delete the button
  userEvent.click(btnEliminar);
  expect(btnEliminar).not.toBeInTheDocument();
  expect(screen.queryByText("Saitama")).not.toBeInTheDocument();
  expect(screen.queryByTestId("cita")).not.toBeInTheDocument();
});
