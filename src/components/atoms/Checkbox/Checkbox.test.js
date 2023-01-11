import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from "./Checkbox";

describe('<Checkbox',() => {

  test('render with value and props', () => {

    // Arrange
    let wrapper = render(<Checkbox 
                          id='list' 
                          name='list-product'
                          value='chairs'
                          label='Checkbox' />);
    let label = wrapper.getByText('Checkbox')
    let input = wrapper.getByLabelText('Checkbox')

    // Assert
    expect(input).toBeDefined();
    expect(label).toBeDefined();
    expect(input).toHaveAttribute('id', 'list');
    expect(input).toHaveAttribute('name', 'list-product');
    expect(input).toHaveAttribute('value', 'chairs');
  });

  test('should make click, show check and callback value key fill', () => {

    //Arrange
    const onChange = jest.fn((obj) => ({ name: obj.name, value: obj.value }));

    let wrapper = render(<Checkbox 
                          id='list' 
                          name='list-product'
                          value='chairs'
                          label='Checkbox' 
                          onchange={onChange}/>);
    let input = wrapper.getByLabelText('Checkbox');

    // Action
    fireEvent.click(input);

    //Assert
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveReturnedWith({ name: 'list-product', value: 'chairs' });

  });
  test('should make double click, hidden check and callback the value key empty', () => {

     //Arrange
    const onChange = jest.fn((obj) => ({ name: obj.name, value: obj.value }));

    let wrapper = render(<Checkbox 
      id='list' 
      name='list-product'
      value='chairs'
      label='Checkbox' 
      onchange={onChange}/>);
    let input = wrapper.getByLabelText('Checkbox');
 
    // Action
    fireEvent.click(input);
    fireEvent.click(input);

    //Assert
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveReturnedWith({ name: 'list-product', value: '' });
  });
});