import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import Projects from '../pages/Projects';
import projects from '../services/script';

describe('Test the Projects page', () => {
  it('tests if there is a title on the page', () => {
    renderWithRouter(<Projects />);
    const projectsTitle = screen.getByText(/my projects/gmi);
    expect(projectsTitle).toBeInTheDocument();
  });
  it('tests if there are links to the projects page', () => {
    renderWithRouter(<Projects />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(/see/gmi);
      expect(link).toHaveAttribute('href', expect.stringContaining('https'));
    });
  });
  it('should appear only one project at a time', () => {
    renderWithRouter(<Projects />);
    const module = screen.getAllByText(/module/gi);
    expect(module).toHaveLength(1);
    expect(screen.getAllByText(projects[0].name)[0]).toBeInTheDocument();
  });
  it('should show the second project if the right arrow is clicked', async () => {
    renderWithRouter(<Projects />);
    const right = screen.getByTestId('rightArrow');
    userEvent.click(right);
    const title = await screen.findByRole('heading', { name: projects[1].name });
    const img = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(img).toHaveAttribute('src', projects[1].src);
  });
  it('should show the last project if the left arrow is clicked', async () => {
    renderWithRouter(<Projects />);
    const left = screen.getByTestId('leftArrow');
    userEvent.click(left);
    const index = projects.length - 1;
    const title = await screen.findByRole('heading', { name: projects[index].name });
    const img = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(img).toHaveAttribute('src', projects[index].src);
  });
});
