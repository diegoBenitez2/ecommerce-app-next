import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import FeatureCard from "./FeatureCard";

describe('<FeaturedCard />', () => {

  test('render props  for default', () => {

    //Arrange
    render(<FeatureCard
            title='Esto es un titulo' 
            desc='Esta es la descripcion de la card.'
            color='light-gray'
            background='dark-primary'/>)
    let article = screen.getByTestId('feature-card');
    let title = screen.getByText('Esto es un titulo');
    let desc = screen.getByText('Esta es la descripcion de la card.');
    let icon = screen.getByTestId('icon');


    //Assert
    expect(article).toHaveClass('background-dark-primary color-light-gray');
    expect(title).toHaveTextContent('Esto es un titulo');
    expect(desc).toHaveTextContent('Esta es la descripcion de la card.');
    expect(icon).toBeDefined();
    
  });

  test('render icon by iconType prop', () => {

    //Arrange
    render(<FeatureCard
            iconType='checkCircle'/>)

    let icon = screen.getByTestId('icon');

    //Assert 
    expect(icon).toHaveAccessibleName('icon-feature-checkCircle');
  });
});