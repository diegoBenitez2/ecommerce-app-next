import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Collapse } from "./Collapse";


describe('Collapse', () => {
  beforeEach(() => {
    const props = {
      label: 'label',
      content: <div>content</div>,
    };
    render(<Collapse {...props} />);
  });
    test('should render props', () => {
      // Assert
      expect(screen.getByText('label')).toBeInTheDocument();
      expect(screen.getByTestId('collapse-content')).toContainHTML('<div>content</div>');
  })
    test('should render content when click header', () => {
      // Assert
      expect(screen.getByTestId('collapse')).toHaveClass('h-fit');
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByTestId('collapse')).toHaveClass('h-[52px]');
    });
});