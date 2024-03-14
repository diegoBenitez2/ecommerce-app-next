const Checkbox = ({
  name,
  value,
  label='checkbox',
  onchange
}) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      onchange({ ...target, name, value, });
    } else {
      onchange({ ...target, name, value: '' });
    }
  };
  return (
      <label>
        <input
          type='checkbox'
          name={name}
          value={value}
          className="font-normal accent-primary mr-2"
          onChange={handleChange} />
          {label}
      </label>
  );
};

export default Checkbox;