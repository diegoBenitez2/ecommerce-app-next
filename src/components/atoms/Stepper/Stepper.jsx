import './Stepper.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
    <div className='Stepper'>
      <button
        className='Stepper__controls'
        onClick={handleMinusCount}>
          <FaMinus color='#CAC6DA' size='.8em' />
        </button>
        <input data-testid='stepper' type='number' id={id} name={name} value={value} onChange={() => {}} />
      <button 
        className='Stepper__controls'
        onClick={handlePlusCount}>
          <FaPlus color='#CAC6DA' size='.8em' />
      </button>
    </div>
  );
};

export default Stepper;