import { FaPlus, FaMinus } from 'react-icons/fa';
import style from './Stepper.module.scss';

const Stepper = ({ name, id, value, onstep }) => {
  const handleMinusCount = () => {
    if (value > 0 ) {
      onstep({ value: value - 1, name });
    }
  };
  const handlePlusCount = () => {
    onstep({ value: value + 1, name });
  };

  return (
    <div className={style.Container}>
      <button
        className={style.Controls}
        onClick={handleMinusCount}>
          <FaMinus color='#CAC6DA' size='.8em' />
        </button>
        <input 
          data-testid='stepper'
          type='number' 
          id={id}
          name={name}
          value={value}
          className={style.InputNumber}
          onChange={() => {}} />
      <button
        className={style.Controls}
        onClick={handlePlusCount}>
          <FaPlus color='#CAC6DA' size='.8em' />
      </button>
    </div>
  );
};

export default Stepper;