import {
  ChangeEvent,
  FunctionComponent,
  InputHTMLAttributes,
  memo,
  SVGAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  Svg?: FunctionComponent<SVGAttributes<SVGElement>>;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    autofocus,
    type = 'text',
    Svg,
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    return (
      <HStack gap="8" className={classNames(cls.InputWrapper, {}, [className])}>
        {Svg ? <Svg width={24} height={24} className={cls.icon} /> : null}
        <input
          type={type}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChangeHandle}
          className={cls.input}
          ref={ref}
          {...otherProps}
        />
      </HStack>
    );
  }
);
