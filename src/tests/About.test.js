import React from "react";
import About from '../pages/About';
import { screen } from '@testing-library/react';
import renderWithRouter from "./helpers/renderWithRouter";
import userEvent from '@testing-library/user-event';

describe('Test the About page', () => {
  it('tests if there is an information about the birth city', () => {
    renderWithRouter(<About />);
    const birthCity = screen.getByText(/born in brazilia/gmi);

    expect(birthCity).toBeInTheDocument();
  });
  it('tests if there is an information about the age', () => {
    renderWithRouter(<About />);
    const age = screen.getByText(/i am 29 years old/gmi);
    expect(age).toBeInTheDocument();
  });
  it('tests if ther is a section with skills', () => {
    renderWithRouter(<About />);
    const skills = screen.getByText(/skills/gmi);
    expect(skills).toBeInTheDocument();
  })
})