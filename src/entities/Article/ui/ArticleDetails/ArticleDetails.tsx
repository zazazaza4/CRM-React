import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  (props: ArticleDetailsProps) => {
    const { className } = props;

    return (
      <VStack className={classNames(cls.ArticleDetails, {}, [className])}>
        <HStack className={cls.path}>
          <Text size="size_s" text="Home > Lorem Ipsum is > " />
          <Text
            size="size_s"
            weight="bold"
            text="Lorem Ipsum is simply dummy"
          />
        </HStack>
        <Text
          weight="black"
          theme="gradient_blue"
          size="size_xl"
          title="Lorem Ipsum is simply dummy"
        />
        <Text
          className={cls.text}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing 
               software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </VStack>
    );
  }
);
