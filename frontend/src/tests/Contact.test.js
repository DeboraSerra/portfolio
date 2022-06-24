import React from "react";
import Contact from '../pages/Contact';
import emailjs from '@emailjs/browser';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from "./helpers/renderWithRouter";
import userEvent from '@testing-library/user-event';

describe('Test the Contact page', () => {
  it('tests if there are the correct fields in the form', () => {
    renderWithRouter(<Contact />);
    const nameField = screen.getByTestId('user_name');
    const emailField = screen.getByTestId('user_email');
    const messageField = screen.getByTestId('message');
    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(messageField).toBeInTheDocument();
  });
  it('tests if the text typed in the fields appear on screen', () => {
    renderWithRouter(<Contact />);

    const nameField = screen.getByTestId('user_name');
    const emailField = screen.getByTestId('user_email');
    const messageField = screen.getByTestId('message');

    userEvent.type(nameField, 'Débora Serra');
    userEvent.type(emailField, 'test@test.com');
    userEvent.type(messageField, 'This is a test message');

    expect(nameField.value).toBe('Débora Serra');
    expect(emailField.value).toBe('test@test.com');
    expect(messageField.value).toBe('This is a test message');
  });
  it('tests if the send function is correct', async () => {
    emailjs.send = jest.fn().mockResolvedValue(() => Promise.resolve('error'))
    renderWithRouter(<Contact />);
    const nameField = screen.getByTestId('user_name');
    const emailField = screen.getByTestId('user_email');
    const messageField = screen.getByTestId('message');
    const sendBtn = screen.getByTestId('submit-btn');

    const data = { user_name: 'Débora Serra',
      user_email: 'test@test.com',
      message: 'This is a test message',
    }

    userEvent.type(nameField, 'Débora Serra');
    userEvent.type(emailField, 'test@test.com');
    userEvent.type(messageField, 'This is a test message');
    userEvent.click(sendBtn);

    expect(emailjs.send).toHaveBeenCalled();
    expect(emailjs.send).toHaveBeenCalledWith('service_75pkj8t', 'template_dj6plc8', data, 'rZNEKfskB6TUXPZZ6');
    const success = await screen.findByText('Email sent!');
    expect(success).toBeInTheDocument();
  });
})