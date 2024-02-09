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
  id: string;
}

export const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  id,
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
      {label && (
        <label htmlFor={id} className={cls.label}>
          {label}
        </label>
      )}
      <select
        id={id}
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
