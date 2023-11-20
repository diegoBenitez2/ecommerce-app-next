import { FaRegCheckCircle, FaRegCreditCard, FaShippingFast, FaTree } from 'react-icons/fa';
import style from './FeatureCard.module.scss';
import cn from 'classnames';

const FeatureCard = ({
  title,
  desc,
  iconType,
  color = 'dark-primary',
  background = 'light-gray',  }) => {

  let icon;
  switch (iconType) {
    case 'delivery':
      icon = <FaShippingFast data-testid='icon' title='icon-feature-delivery'  size='1.3em'  />;
      break;
    case 'checkCircle':
      icon = <FaRegCheckCircle data-testid='icon' title='icon-feature-checkCircle' size='1.3em'  />;
      break;
    case 'creditCard':
      icon = <FaRegCreditCard data-testid='icon' title='icon-feature-creditCard' size='1.3em'  />;
    break;
    case 'recycled':
      icon = <FaTree data-testid='icon' title='icon-feature-recycled' size='1.3em'  />;
      break;
    default:
      icon = <FaShippingFast data-testid='icon' title='icon-feature-recycled' size='1.3em'  />;
      break;
  }
  return (
    <article data-testid='feature-card' className={cn(style.FeatureCard, `background-${background} color-${color}`)}>
      {icon}
      <h4 className={style.Title}>{ title }</h4>
      <p className={style.Desc}>{ desc }</p>
    </article>
  );
};

export default FeatureCard;