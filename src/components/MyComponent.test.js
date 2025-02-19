import { render, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

test('Ao clicar no botão, a cor deve mudar', () => {
  const { getByText } = render(<MyComponent />);
  const button = getByText('Clique aqui');

  expect(button.style.backgroundColor).toBe('red');

  fireEvent.click(button);

  expect(button.style.backgroundColor).toBe('blue');
});