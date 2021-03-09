import React from 'react';
import { tuple, SizeType } from '../_utils/type';
import classNames from 'classnames';
import './index.less'
const ButtonTypes = tuple(
  'default',
  'primary',
  'ghost',
  'dashed',
  'link',
  'text'
);
const ButtonShapes = tuple('circle', 'round');
interface ButtonProps {
  className?: string;
  type?: typeof ButtonTypes;
  shape?: typeof ButtonShapes;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    type,
    shape,
    size,
    loading,
    icon,
    disabled,
    children,
    onClick,
    ...otherProps
  } = props;

  const classes = classNames(className, {
    'luckyship-btn': true,
    [`luckyship-btn-${type}`]: type,
    [`luckyship-btn-${shape}`]: shape,
    [`luckyship-btn-${size}`]: size,
    'luckyship-btn-loading': loading,
    'luckyship-btn-icon-only': icon,
  });

  const LoadingIcon = () => {
    return <div className="luckyship-btn-loading-icon"></div>;
  };

  const iconNode = loading ? <LoadingIcon /> : icon ? icon : null;

  const kids = children ? (
    <span className="luckyship-btn-content">{children}</span>
  ) : null;

  return (
    <button
      disabled={disabled}
      className={classes}
      {...otherProps}
      onClick={onClick}
    >
      {iconNode}
      {kids}
    </button>
  );
};

export default Button;
