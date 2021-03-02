import * as React from 'react';
import classNames from 'classnames';
import { Omit, tuple } from '../_util/type';

const ButtonType = tuple('default', 'link', 'text', 'primary');
export type ButtonType = typeof ButtonType[number];

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  size?: SizeType;
  className?: string;
  children?: React.ReactNode;
}
