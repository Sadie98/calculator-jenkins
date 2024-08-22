import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('performs addition correctly', () => {
  render(<App />);

  // Нажимаем 2 + 3 =
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('='));

  // Проверяем результат
  expect(screen.getByText('= 5')).toBeInTheDocument();
});

test('clears the input when C is pressed', () => {
  render(<App />);

  // Нажимаем 5, затем C
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('C'));

  // Проверяем, что поле ввода очищено
  const inputElement = screen.getByRole('textbox') as HTMLInputElement;
  expect(inputElement.value).toBe('');
});
