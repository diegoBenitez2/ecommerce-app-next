import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from './Collapse.module.scss';
import cn from 'classnames';

export const Collapse = ({
  label,
  content,
}) => {

  const [collapse, setCollapse] = useState(false);
  const isCollapsedContainer = collapse && styles.container__collapsed;
  const isCollapsedButton = collapse && styles.button__collapsed;
  const isCollapsedArrow = collapse && styles.button_arrow__collapse;
  return (
    <div
      data-testid='collapse'
      className={cn(styles.container, isCollapsedContainer)}>
      <button
        className={cn(styles.button, isCollapsedButton)}
        onClick={() => setCollapse(!collapse)}>
        <span className={cn(styles.button_title)}>{label}</span>
        <FiChevronDown className={cn(styles.button_arrow__collapse, isCollapsedArrow)}/>
      </button>
      <div
        className={cn("p-0 border-white", { "border-2 border-t-light-gray": !collapse })}>
        {content}
      </div>
    </div>
  );
};