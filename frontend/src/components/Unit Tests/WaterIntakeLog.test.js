import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WaterIntakeLog from './WaterIntakeLog';

describe('WaterIntakeLog', () => {
  test('updates the input field value when user types', () => {
    render(<WaterIntakeLog />);
    
    const inputElement = screen.getByLabelText(/Log water consumed/i);

    fireEvent.change(inputElement, { target: { value: '2' } });

    expect(inputElement.value).toBe('2');
  });
});