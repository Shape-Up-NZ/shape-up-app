import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../Login";

// Initialize the mock Redux store
const mockStore = configureMockStore();
const store = mockStore({
  auth: {
    userInfo: null, 
  },
  // other mock state data
});

test("Login renders and updates state correctly", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  );
  
  const emailField = getByLabelText(/email address/i);
  fireEvent.change(emailField, { target: { value: "miguel@email.com" } });
  expect(emailField.value).toBe("miguel@email.com");

  const passwordField = getByLabelText(/password/i);
  fireEvent.change(passwordField, { target: { value: "admin123" } });
  expect(passwordField.value).toBe("admin123");
});
