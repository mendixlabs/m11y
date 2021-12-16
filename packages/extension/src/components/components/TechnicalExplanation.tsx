import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

import React, { FC, ReactChild, ReactChildren } from 'react';
interface PopOver_Props {
  children: ReactChild | ReactChildren;
  title: string;
}
const TechnicalExplanation: FC<PopOver_Props> = ({ children, title }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <InfoIcon ml="2" color="orange" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TechnicalExplanation;
