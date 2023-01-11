import './Checkbox.scss';

const Checkbox = ({ 
  id, 
  name, 
  value, 
  label='checkbox', 
  onchange }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      onchange({ ...target, name, value, });
    } else {
      onchange({ ...target, name, value: '' });
    }
  };
  return (
    <div className='Checkbox'>
      <input 
        type='checkbox' 
        id={id} 
        name={name}
        value={value}
        onChange={handleChange} /> 
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;