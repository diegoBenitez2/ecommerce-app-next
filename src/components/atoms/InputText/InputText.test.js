import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import InpuText from "./InpuText";

describe('<InputText>', () => {
  test('render with props', () => {

    //Arrange
     render(<InpuText
              id='input-firstname'
              name='firstname'
              value='Diego'
              style={'primary'}
            />);

    let input = screen.getByTestId('input-custom');

    //Assert
    expect(input).toHaveAttribute('id', 'input-firstname');
    expect(input).toHaveAttribute('name', 'firstname');
    expect(input).toHaveClass('InputText primary');
    expect(input).toHaveDisplayValue('Diego');
  });

  test('should return value and name of input to type', () => {

    //Arrange
    const onInput = jest.fn(({ name, value }) => {
      return {  name, value };
    });
    render(<InpuText
              name='firstname'
              oninput={onInput}
            />);
    let input = screen.getByTestId('input-custom');

    //Action
    fireEvent.input(input, { target: { value: 'Fernando' } });

    //Assert
    expect(onInput).toHaveReturnedWith({ name: 'firstname', value: 'Fernando' });
    expect(input).toHaveDisplayValue('Fernando');

  });

  test('should clean value and type again, showing then result', () => {
    //Arrange
    const onInput = jest.fn(({ name, value }) => {
      return {  name, value };
    });
    render(<InpuText name='firstname' oninput={onInput}/>);
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