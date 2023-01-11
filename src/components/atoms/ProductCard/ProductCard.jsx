import { FaShoppingCart, FaImage } from 'react-icons/fa';
import './ProductCard.scss';

const ProductCard = ({ 
  id,
  urlImage,
  altImage,
  title,
  price,
  link,
  addShoppingCard }) => {
  return (
    <a className='ProductCard' href={link}>
    <article className='ProductCard__container cr-pointer'>
      { urlImage 
        ?  <img 
        src={urlImage} 
        alt={altImage}
        className='ProductCard__picture' /> 
        : <div className='ProductCard__notImage background-border-dark '>
            <FaImage size='5rem' title='not image' className="color-border-gray" />
          </div>
      }
      <div className="ProductCard__info">
        <p className="ProductCard__info_title h4">{
        title || '--'}</p>
        <p className="display-3 ProductCard__info_desc">${price || '--'}</p>
      </div>
      <div className="ProductCard__tap">
        <button
          onClick={() => addShoppingCard(id)}>
        <FaShoppingCart
          size='1.5em' 
          className='cr-pointer color-border-gray' />
        </button>
      </div>
    </article> 
    </a>
  );
};

export default ProductCard;