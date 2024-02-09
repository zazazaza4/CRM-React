import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import ArrowIcon from '@/shared/assets/icons/arrow-up.svg';

import cls from './CustomerAcquisition.module.scss';

interface CustomerAcquisitionProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  text: string;
  number: string;
  percentageChangePerMonth?: number;
  lastUserAvatars?: string[];
}

export const CustomerAcquisition: FC<CustomerAcquisitionProps> = memo(
  (props: CustomerAcquisitionProps) => {
    const {
      className,
      Svg,
      text,
      number,
      percentageChangePerMonth,
      lastUserAvatars,
    } = props;

    let delta = `${percentageChangePerMonth}`;
    let isNegative = false;

    if (percentageChangePerMonth && percentageChangePerMonth < 0) {
      delta = `${Math.abs(percentageChangePerMonth)}`;
      isNegative = true;
    }

    return (
      <HStack
        gap="20"
        className={classNames(cls.CustomerAcquisition, {}, [className])}
      >
        <VStack align="center" justify="center" className={cls.iconWrapper}>
          <Svg />
        </VStack>
        <VStack>
          <Text text={text} theme="light-gray-100" />
          <Text title={number} size="size_xxl" weight="semi-bold" />
          {percentageChangePerMonth && (
            <HStack gap="4" className={cls.percentage}>
              <ArrowIcon className={isNegative ? cls.negative : ''} />
              <Text
                size="size_xs"
                text={`${delta}%`}
                theme={percentageChangePerMonth > 0 ? 'dark-green' : 'red'}
                weight="bold"
              />
              <Text size="size_xs" className={cls.month} text="this month" />
            </HStack>
          )}
          {lastUserAvatars?.length && lastUserAvatars.length > 0 && (
            <HStack className={cls.avatars}>
              {lastUserAvatars.map((avatar, index) => (
                <Avatar
                  size={26}
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className={cls.avatar}
                />
              ))}
            </HStack>
          )}
        </VStack>
      </HStack>
    );
  }
);
