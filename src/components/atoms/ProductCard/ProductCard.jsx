import Image  from 'next/image';
import { FaShoppingCart, FaImage } from 'react-icons/fa';
import cn from 'classnames';
import style from'./ProductCard.module.scss';

const ProductCard = ({
  id,
  urlImage,
  altImage,
  title,
  price,
  link,
  addShoppingCard }) => {
  return (
    <a className={style.Link} href={link}>
    <article className={cn(style.Container ,'cr-pointer')}>
      { urlImage
        ?  <Image
        src={urlImage}
        alt={altImage}
        className={style.Picture} />
        : <div className={cn(style.NotImage, 'background-border-dark')}>
            <FaImage size='5rem' title='not image' className="color-border-gray" />
          </div>
      }
      <div className={style.Info}>
        <p className={cn(style.Info_Title, 'h4')}>{
        title || '--'}</p>
        <p className={cn(style.Info_Desc, 'display-3')}>${price || '--'}</p>
      </div>
      <div className={style.Tap}>
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