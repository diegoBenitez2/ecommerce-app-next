import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import Checkbox from "./Checkbox";


describe('<Checkbox',() => {
  let onChange;
  beforeEach(() => {
    onChange = jest.fn((obj) => ({ name: obj.name, value: obj.value }));
    render(<Checkbox
      id='list'
      name='list-product'
      value='chairs'
      label='Checkbox'
      onchange={onChange}/>);
  });

  test('render with value and props', () => {

    let label = screen.getByText('Checkbox');
    let input = screen.getByLabelText('Checkbox');

    // Assert
    expect(input).toBeDefined();
    expect(label).toBeDefined();
    expect(input).toHaveAttribute('id', 'list');
    expect(input).toHaveAttribute('name', 'list-product');
    expect(input).toHaveAttribute('value', 'chairs');
  });

  test('should make click, show check and callback value key fill', () => {
    let input = screen.getByLabelText('Checkbox');

    // Action
    fireEvent.click(input);

    //Assert
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveReturnedWith({ name: 'list-product', value: 'chairs' });

  });
  test('should make double click, hidden check and callback the value key empty', () => {

    let input = screen.getByLabelText('Checkbox');

    // Action
    fireEvent.click(input);
    fireEvent.click(input);

    //Assert
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveReturnedWith({ name: 'list-product', value: '' });
  });
});