import React from "react";
import App from '../App';
import { screen } from '@testing-library/react';
import renderWithRouter from "./helpers/renderWithRouter";
import userEvent from '@testing-library/user-event';

describe('Test the Header component', () => {
  it('tests if there is a title with the name "Débora Rodrigues Serra', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/portfolio')

    console.log(history.location.pathname);

    const title = screen.getByRole('heading', { name: /Débora Serra/i, level: 1 });
    expect(title).toBeInTheDocument();
  })
  it('tests if there is four links on screen', () => {
    renderWithRouter(<App />);

    const linkToHome = screen.getByRole('link', { name: 'Home' });
    const linkToContact = screen.getByRole('link', { name: 'Contact' });
    const linkToAbout = screen.getByRole('link', { name: 'About' });
    const linkToProjects = screen.getByRole('link', { name: 'Projects' });
    const linkToResume = screen.getByRole('link', { name: 'Resume' });

    expect(linkToHome).toBeInTheDocument();
    expect(linkToContact).toBeInTheDocument();
    expect(linkToAbout).toBeInTheDocument();
    expect(linkToProjects).toBeInTheDocument();
    expect(linkToResume).toBeInTheDocument();
  })
  it('tests if the page goes to the right path when Contact is clicked', () => {
    const { history } = renderWithRouter(<App />);

    const linkToContact = screen.getByRole('link', { name: 'Contact' });

    let { pathname } = history.location;
    expect(pathname).toBe('/');

    userEvent.click(linkToContact);

    ({ pathname } = history.location)
    expect(pathname).toBe('/portfolio/contact');
  });
  it('tests if the page goes to the right path when About is clicked', () => {
    const { history } = renderWithRouter(<App />);

    const linkToAbout = screen.getByRole('link', { name: 'About' });

    let { pathname } = history.location;
    expect(pathname).toBe('/');

    userEvent.click(linkToAbout);

    ({ pathname } = history.location)
    expect(pathname).toBe('/portfolio/about');
  })
  it('tests if the page goes to the right path when Projects is clicked', () => {
    const { history } = renderWithRouter(<App />);

    const linkToProjects = screen.getByRole('link', { name: 'Projects' });

    let { pathname } = history.location;
    expect(pathname).toBe('/');

    userEvent.click(linkToProjects);

    ({ pathname } = history.location)
    expect(pathname).toBe('/portfolio/projects');
  })
  it('tests if the page goes to the right path when Home is clicked', () => {
    const { history } = renderWithRouter(<App />);

    const linkToHome = screen.getByRole('link', { name: 'Home' });

    history.push('/contact')
    let { pathname } = history.location;
    expect(pathname).toBe('/contact');

    userEvent.click(linkToHome);

    ({ pathname } = history.location)
    expect(pathname).toBe('/portfolio/');
  })
  it('tests if the page goes to the right path when Resume is clicked', () => {
    const { history } = renderWithRouter(<App />);

    const linkToResume = screen.getByRole('link', { name: 'Resume' });

    let { pathname } = history.location;
    expect(pathname).toBe('/');

    userEvent.click(linkToResume);

    ({ pathname } = history.location)
    expect(pathname).toBe('/portfolio/resume');
  })
})
