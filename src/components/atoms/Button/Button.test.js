import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from "./Button";


describe('<Button>', () => {
  
  test('rendered content with styles and text', () => {

    // Arrange
    let wrapper = render(<Button 
                            text='Sign up' 
                            size='small' 
                            iconColor='#FFFFF' 
                            style={'fifty'}/>); 
    
    const button = wrapper.getByTestId('btn-custom');

    // Assert
    expect(button).toBeDefined();
    expect(button).toHaveClass('Button--small');
    expect(button).toHaveClass('Button--fifty');
    expect(wrapper.getByText('Sign up')).toHaveTextContent('Sign up');
  });
  
  test('show icon side right on Button', () => {
    // Arrange
    let wrapper = render(<Button iconColor='#FFFFF' />); 
    // const icon = wrapper.container.querySelector('button svg');
    let button = wrapper.getByTestId('btn-custom');
    let icon = wrapper.getByTestId('btn-icon');

    //Assert
    expect(button).toContainElement(icon);
    expect(icon).toBeVisible(); 
  });
  test('calls "onClick" prop on button click', () => {
    // Arrange
    const onClick = jest.fn();
    let wrapper = render(<Button onclick={onClick}/>); 

    // Action
    fireEvent.click(wrapper.getByTestId('btn-custom'));

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
