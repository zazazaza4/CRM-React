import { FC, memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export type TextWeight = 'regular' | 'medium' | 'semi-bold' | 'bold';

export type TextTheme =
  | 'primary'
  | 'white'
  | 'black'
  | 'dark-gray'
  | 'light-gray-100'
  | 'light-gray-200'
  | 'green'
  | 'red'
  | 'dark-green';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize =
  | 'size_xs'
  | 'size_s'
  | 'size_m'
  | 'size_l'
  | 'size_xl'
  | 'size_xxl';

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_xs: 'h6',
  size_s: 'h5',
  size_m: 'h4',
  size_l: 'h3',
  size_xl: 'h2',
  size_xxl: 'h1',
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
