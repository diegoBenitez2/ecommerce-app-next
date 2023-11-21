import React from "react";
import { render, fireEvent, screen} from '@testing-library/react';
import Button from "./Button";


describe('<Button>', () => {

  test('rendered content with styles and text', () => {

    // Arrange
   render(<Button
            text='Sign up'
            size='small'
            iconColor='#FFFFF'
            style={'fifty'}/>);

    const button = screen.getByTestId('btn-custom');

    // Assert
    expect(button).toBeDefined();
    expect(button).toHaveClass('small');
    expect(button).toHaveClass('fifty');
    expect(screen.getByText('Sign up')).toHaveTextContent('Sign up');
  });

  test('show icon side right on Button', () => {
    // Arrange
      render(<Button iconColor='#FFFFF' />);
    // const icon = wrapper.container.querySelector('button svg');
    let button = screen.getByTestId('btn-custom');
    let icon = screen.getByTestId('btn-icon');

    //Assert
    expect(button).toContainElement(icon);
    expect(icon).toBeVisible();
  });
  test('calls "onClick" prop on button click', () => {
    // Arrange
    const onClick = jest.fn();
    render(<Button onclick={onClick}/>);

    // Action
    fireEvent.click(screen.getByTestId('btn-custom'));

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
