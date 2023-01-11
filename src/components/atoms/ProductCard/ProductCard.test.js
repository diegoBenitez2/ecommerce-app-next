import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductCard from "./ProductCard";

describe('<ProductCard />', () => {

  test('render props for default', () => {
    //Arrange
    render(<ProductCard 
            id={1}
            link=''
            title='The Daily chair'
            price={250}
            urlImage=''
            altImage=''/>)
    let icon = screen.getByTitle('not image');
    let title = screen.getByText('The Daily chair');
    let price = screen.getByText('$250')

    //Assert
    expect(icon).toBeDefined();
    expect(title).toHaveTextContent('The Daily chair');
    expect(price).toHaveTextContent('$250');

  });

  test('render image when props is fill', () => {
    
    //Arrange
    render(<ProductCard 
            urlImage='https://th.bing.com/th/id/R.586be63c1a0c3e1a295e5d2cef816705?rik=kZ2Z70hOiz8%2bNw&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fchair%2f44-chair-png-image.png&ehk=B6V7bRa2aaC%2feycSQYDyGP%2b3IsVn8LJ5VwFSePWQEEI%3d&risl=&pid=ImgRaw&r=0' 
            altImage='chair'/>)

    let image = screen.getByRole('img');

    //Assert
    expect(image).toBeDefined();
    expect(image).toHaveAttribute('src', 'https://th.bing.com/th/id/R.586be63c1a0c3e1a295e5d2cef816705?rik=kZ2Z70hOiz8%2bNw&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fchair%2f44-chair-png-image.png&ehk=B6V7bRa2aaC%2feycSQYDyGP%2b3IsVn8LJ5VwFSePWQEEI%3d&risl=&pid=ImgRaw&r=0');
    expect(image).toHaveAttribute('alt', 'chair');

  });

  test('click in shopping button', () => {
    
    //Arrange
    const onClick = jest.fn((id) => id);
    render(<ProductCard id={12} addShoppingCard={onClick}/>)

    let button = screen.getByRole('button');

    //Action
    fireEvent.click(button)

    //Assert
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(12);
  });

  test('click on link at card', () => {

    //Arrange
    render(<ProductCard link='https://freepngimg.com/png/563-chair-png-image' />)
    let link = screen.getByRole('link');

    //Assert
    expect(link).toHaveAttribute('href', 'https://freepngimg.com/png/563-chair-png-image');
  });
});