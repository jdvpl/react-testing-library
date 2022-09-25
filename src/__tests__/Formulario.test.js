import Formulario from "../components/Formulario";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

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

it("<Formulario/> validacion de formulario llenar formulario", () => {
  // renedrizar formularios
  render(<Formulario crearCita={crearCita} />);
  // inputs
  const mascotaInput = screen.getByTestId("mascota");
  const propietarioInput = screen.getByTestId("propietario");

  const fechaInput = screen.getByTestId("fecha");
  const horaInput = screen.getByTestId("hora");
  const sintomasInput = screen.getByTestId("sintomas");

  // ejemplo con fireEvent
  fireEvent.change(mascotaInput, {
    target: { value: "Jiren" },
  });
  // con userEvent mejor sintaxis
  userEvent.type(propietarioInput, "Kakaroto");
  userEvent.type(fechaInput, "2022-09-10");
  userEvent.type(horaInput, "10:30");
  userEvent.type(sintomasInput, "Fiebre, Toz, Gripe, Vomito");
  // click en el boton
  const btnSubmit = screen.getByTestId("btn-submit");
  userEvent.click(btnSubmit);

  const alerta = screen.queryByTestId("test-alerta");
  expect(alerta).not.toBeInTheDocument();

  // crear cita y comprobar que la funcion se haya llamado
  expect(crearCita).toHaveBeenCalled();
  expect(crearCita).toHaveBeenCalledTimes(1);
});
