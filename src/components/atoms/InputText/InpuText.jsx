import styles from './InputText.module.scss';

const InpuText = ({ 
  value,
  name,
  style,
  oninput,
  ...props
}) => {
  const handleInput = ({ target }) => {
    oninput({ name, value: target.value });
  };
  return (
      <input
        {...props}
        data-testid='input-custom'
        name={name}
        value={value}
        className={`${styles.InputText} ${styles.InputText}--${style}`}
        onInput={handleInput}/>
  );
};

export default InpuText;