import React from "react";
import App from '../App';
import { render, screen } from '@testing-library/react';
import renderWithRouter from "./helpers/renderWithRouter";
import userEvent from '@testing-library/user-event';
import MyCurriculum from '../pages/MyCurriculum';

describe('Test the Resume page', () => {
  it('tests if there is the name on the page', () => {
    renderWithRouter(<MyCurriculum />);
    const nameTitle = screen.getByText(/d[eé]bora rodrigues serra/gmi);
    expect(nameTitle).toBeInTheDocument();
  });
  it('tests if there is contact information on the page', () => {
    renderWithRouter(<MyCurriculum />);
    const contactTitle = screen.getByText('Contact');
    expect(contactTitle).toBeInTheDocument();
  });
  it('tests if there is a section with information about my academic graduation', () => {
    renderWithRouter(<MyCurriculum />);
    const graduationTitle = screen.getByText('Academic graduation');
    expect(graduationTitle).toBeInTheDocument();
  });
  it('tests if there is my professional history in the document', () => {
    renderWithRouter(<MyCurriculum />);
    const jobsTitle = screen.getByText('Professional history');
    expect(jobsTitle).toBeInTheDocument();
  });
  it('tests if there is a languages section', () => {
    renderWithRouter(<MyCurriculum />);
    const langTitle = screen.getByText('Languages');
    expect(langTitle).toBeInTheDocument();
  });
  it('tests if there is a download button', () => {
    renderWithRouter(<MyCurriculum />);
    const downloadLink = screen.getByRole('link', { name: /Download/gmi });
    expect(downloadLink).toHaveAttribute('href');
    expect(downloadLink).toHaveAttribute('download');

  });
})