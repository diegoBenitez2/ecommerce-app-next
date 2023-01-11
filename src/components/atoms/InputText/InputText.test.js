import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InpuText from "./InpuText";

describe('<InputText>', () => {
  test('render with props', () => {

    //Arrange
    let wrapper = render(<InpuText 
                            id='input-firstname'
                            name='firstname' 
                            value='Diego'
                            style={'primary'}/>);

    let input = wrapper.getByTestId('input-custom');
    
    //Assert
    expect(input).toHaveAttribute('id', 'input-firstname');
    expect(input).toHaveAttribute('name', 'firstname');
    expect(input).toHaveClass('InputText InputText--primary');
    expect(input).toHaveDisplayValue('Diego');
  });

  test('should return value and name of input to type', () => {

    //Arrange
    const onInput = jest.fn(({ name, value }) => {
      return {  name, value };
    });
    render(<InpuText name='firstname' oninput={onInput} />)
    let input = screen.getByTestId('input-custom');

    //Action
    fireEvent.input(input, { target: { value: 'Fernando' } })

    //Assert
    expect(onInput).toHaveReturnedWith({ name: 'firstname', value: 'Fernando' });
    expect(input).toHaveDisplayValue('Fernando');

  });

  test('should clean value and type again, showing then result', () => {
    //Arrange
    const onInput = jest.fn(({ name, value }) => {
      return {  name, value };
    });
    render(<InpuText name='firstname' oninput={onInput}/>)
    let input = screen.getByTestId('input-custom');

    //Action
  
    fireEvent.input(input, { target: { value: 'Diego' } });
    fireEvent.input(input, { target: { value: '' } });
    expect(input).toHaveValue('');

    fireEvent.input(input, { target: { value: 'Fernando' } });
    expect(input).toHaveValue('Fernando');
    expect(onInput).toBeCalledTimes(3);
  });
});