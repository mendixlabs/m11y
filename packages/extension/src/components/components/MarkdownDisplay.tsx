import { Button, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactMarkdownProps } from 'react-markdown/lib/complex-types';

const CustomButton: FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & ReactMarkdownProps
> = ({ children, href }) => {
  return (
    <Button size="sm" onClick={() => chrome.windows.create({ url: href })}>
      {children}
    </Button>
  );
};

type Markdown_Props = {
  children: string;
  fontSize?: string;
};

const MarkdownDisplay: FC<Markdown_Props> = ({ children, fontSize }) => {
  return (
    <Text fontSize={fontSize ? fontSize : '16'}>
      <ReactMarkdown
        components={{
          a: (props) => {
            return CustomButton(props);
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </Text>
  );
};

export default MarkdownDisplay;
