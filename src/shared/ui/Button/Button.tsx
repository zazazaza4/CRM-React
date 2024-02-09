import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonTheme = 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  isSquare?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    children,
    theme = 'primary',
    isSquare,
    isDisabled,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls.square]: isSquare,
      [cls.disabled]: isDisabled,
    };

    return (
      <button
        type="button"
        className={classNames(cls.Button, mods, [className, cls[theme]])}
        disabled={isDisabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
