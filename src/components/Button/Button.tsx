import { ReactElement } from 'react';
import './Button.scss';

type ButtonProps = {
  children?: string;
  type?: 'square' | 'transparent' | 'transparent-icon';
  Icon?: () => ReactElement;
};

const Button = ({ children, type, Icon, ...props }: ButtonProps) => {
  const btnClassName = `button ${type && `button--${type}`}`;

  return (
    <button className={btnClassName} {...props}>
      {Icon && (
        <span className="button__icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};
export default Button;
