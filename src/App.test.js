import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Button testing', () => {

  test('renders custom button', () => {
    render(<App />);
    const customButton = screen.getByTestId('custom-button');
    expect(customButton).toBeInTheDocument();
  });

  test('Is button text correct', () => {
    render(<App />);
    const customButton = screen.getByTestId('custom-button');
    expect(customButton).toContainHTML('green');
    const eventButton = screen.getByText(/change color to red/i)
    fireEvent(eventButton, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    const changedButton = screen.getByTestId('custom-button');
    expect(changedButton).toContainHTML('red');
  });
})
