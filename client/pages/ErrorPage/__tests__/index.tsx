import {screen, render} from '@testing-library/react';
import ErrorPage from '../ErrorPage';

describe('ErrorPage', () => {
  test('check text', () => {
    render(<ErrorPage />);

    expect(screen.getByText('404 NOT FOUND')).toBeTruthy();
  });
});