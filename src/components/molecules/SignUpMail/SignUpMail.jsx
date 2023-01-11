import React, { useState } from 'react';
import Button from '@atoms/Button/Button';
import InpuText from '@atoms/InputText/InpuText';
import styles from  './SignUpMail.module.scss';


function SignUpMail({ 
  onSignMail,
  onInput,
  value,
  name,
  theme = [ 'primary','fifty'],
}) {
  const [invalid, setInvalid] = useState(false);

  const handlerInputMail = ({ name, value }) => {
    // eslint-disable-next-line no-useless-escape
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(regexMail)) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
    onInput({ name, value });
  };

  return (
    <div className={styles.SignUpMail}>
      <div className={`${styles.SignUpMail}__wrapper`}>
        <InpuText 
          id='sing-up'
          name={name}
          style={theme[0]}
          placeholder='your@email.com'
          value={value}
          oninput={handlerInputMail}
          maxLength={50} />
        <Button 
          text='Sign Up'
          size='medium'
          style={theme[1]}
          disabled={invalid}
          onclick={onSignMail} />
      </div>
      { 
        invalid &&
        <span className={`${styles.SignUpMail}__error`}>El formato invalido</span>
      }
    </div>
  );  
}

export default SignUpMail;