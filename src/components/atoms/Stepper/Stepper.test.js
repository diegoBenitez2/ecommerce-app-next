import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Stepper from "./Stepper";

describe('<Stepper>', () =>{

  test('show number in input display', () => {

    //Arrange
    render(<Stepper 
            id='input-number' 
            name='counter'
            value={2} />);
    let input = screen.getByTestId('stepper');
  
    //Assert
    expect(input).toHaveAttribute('name', 'counter');
    expect(input).toHaveDisplayValue(2);
  });

  test('click for decrease counter in stepper', () => {

    //Arrange
    const onStep = jest.fn((res) => res.value);
    render(<Stepper 
            id='input-number' 
            name='counter'
            value={2} 
            onstep={onStep} />);

    let buttonDecrease = screen.getAllByRole('button')[0];

    //Action
    fireEvent.click(buttonDecrease);
    
    //Assert
    expect(onStep).toHaveReturnedWith(1);
    

  });
  test('click for increase counter in stepper', () => {

    //Arrange
    const onStep = jest.fn((res) => res.value);
    render(<Stepper 
            id='input-number' 
            name='counter'
            value={2} 
            onstep={onStep} />);

    let buttonincrease = screen.getAllByRole('button')[1];

    //Action
    fireEvent.click(buttonincrease);
    
    //Assert
    expect(onStep).toHaveReturnedWith(3);
    

  });
});