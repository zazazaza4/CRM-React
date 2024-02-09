import { ChangeEvent, ReactNode, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: ReactNode;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  readonly = false,
}: SelectProps<T>) => {
  const optionList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <HStack align="center" className={classNames(cls.Wrapper, {}, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        className={cls.select}
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </HStack>
  );
};
