import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import Projects from '../pages/Projects';

describe('Test the Projects page', () => {
  it('tests if there is a title on the page', () => {
    renderWithRouter(<Projects />);
    const projectsTitle = screen.getByText(/my projects/gmi);
    expect(projectsTitle).toBeInTheDocument();
  });
  it('tests if there are links the the projects page', () => {
    renderWithRouter(<Projects />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(/project/gmi);
      expect(link).toHaveAttribute('href', expect.stringContaining('https'));
    })
  })
})