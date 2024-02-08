import { FC, memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export type TextWeight = 'regular' | 'medium' | 'black' | 'extra-bold' | 'bold';

export type TextTheme =
  | 'primary'
  | 'white'
  | 'gradient_blue'
  | 'gradient_orange'
  | 'blue'
  | 'gray'
  | 'error';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'size_s' | 'size_m' | 'size_l' | 'size_xl';

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: 'h4',
  size_m: 'h3',
  size_l: 'h2',
  size_xl: 'h1',
};

interface TextProps {
  className?: string;
  title?: string;
  weight?: TextWeight;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  max?: boolean;
}

export const Text: FC<TextProps> = memo(
  ({
    className,
    text = '',
    title = '',
    theme = 'primary',
    align = 'left',
    size = 'size_m',
    weight = 'regular',
    max = false,
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
      [cls.max]: max,
      [cls[`weight_${weight}`]]: Boolean(weight),
    };

    return (
      <div
        className={classNames(cls.Text, mods, [
          className,
          cls[theme],
          cls[align],
          cls[size],
        ])}
      >
        {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
