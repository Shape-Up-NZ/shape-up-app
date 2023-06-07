// tests/Login.test.tsx

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Login from '../Login.jsx';
import { LocalStorage } from 'node-localstorage';

const server = setupServer(
  rest.post('/api/users/auth', (req, res, ctx) => {
    return res(ctx.json({ id: 1, name: 'John Doe', email: 'john@example.com' }));
  })
);

beforeAll(() => {
  server.listen();
  global.localStorage = new LocalStorage('./scratch');
});

afterEach(() => {
  server.resetHandlers();
  global.localStorage.clear();
});

afterAll(() => {
  server.close();
});

test('renders login form and submits', async () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('Enter Email');
  const passwordInput = screen.getByPlaceholderText('Enter Password');
  const submitButton = screen.getByText('Login');

  userEvent.type(emailInput, 'kakar@email.com');
  userEvent.type(passwordInput, 'admin123');

  userEvent.click(submitButton);

  await waitFor(() => screen.getByText('Signed in as John Doe'));
});
