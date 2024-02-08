import { FC, memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon, IconTheme } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

import { getSocialMediaItems } from '../../model/selectors/getSocialMediaItems';

import cls from './SocialMediaList.module.scss';

interface SocialMediaListProps {
  className?: string;
  theme?: IconTheme;
}

export const SocialMediaList: FC<SocialMediaListProps> = memo(
  (props: SocialMediaListProps) => {
    const { className, theme = 'white' } = props;
    const items = useMemo(getSocialMediaItems, []);

    const onOpenLink = (path: string) => () => {
      window.open(path, '_blank');
    };

    return (
      <HStack gap="20" className={classNames('', {}, [className])}>
        {items.map(({ Svg, path }) => (
          <Icon
            onClick={onOpenLink(path)}
            theme={theme}
            Svg={Svg}
            key={path}
            className={cls.icon}
          />
        ))}
      </HStack>
    );
  }
);
