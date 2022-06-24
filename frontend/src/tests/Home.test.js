import React from "react";
import App from '../App';
import { screen } from '@testing-library/react';
import renderWithRouter from "./helpers/renderWithRouter";
import userEvent from '@testing-library/user-event';
import Home from "../pages/Home";

describe('Test the Home page', () => {
  it('tests if there is an image', () => {
    renderWithRouter(<Home />);

    const profileImage = screen.getByRole('img');

    expect(profileImage).toBeInTheDocument();
  })
  it('tests if the name apears in the Home page', () => {
    renderWithRouter(<Home />);

    const name = screen.getByText(/d[e,é]bora serra/gi)

    expect(name).toBeInTheDocument();
  })
  it('tests if there is a link to GitHub', () => {
    renderWithRouter(<Home />);

    const linkToGitHub = screen.getByRole('link', { name: /github/i });

    expect(linkToGitHub).toBeInTheDocument();
    expect(linkToGitHub).toHaveAttribute('href', 'https://github.com/DeboraSerra');
  })
})
