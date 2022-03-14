import { MoonIcon, RepeatIcon, SunIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Flex,
  Text,
  Heading,
  useColorMode,
  Tooltip,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  EnumContentScripMessages,
  ENUM_VIEW_TYPE,
  I_MX_WINDOW,
  MAIN_VIEW_TYPE,
} from '../../utils/types';
import MarkdownDisplay from './MarkdownDisplay';

const displayOS = (os: chrome.runtime.PlatformOs) => {
  switch (os) {
    case 'mac':
      return `We recommend you view the extension in the Dev tools **"Option + Command + J"** to open the Javascript Console. `;

    case 'win':
      return `We recommend you view the extension in the Dev tools **"Control + Shift + J"** to open the Javascript Console. `;

    default:
      return `Open your Javascript Console. `;
  }
};

const Topbar = ({ type }: MAIN_VIEW_TYPE) => {
  const [mx, setMx] = useState<I_MX_WINDOW | undefined>();
  const { toggleColorMode, colorMode } = useColorMode();
  const [os, setOS] = useState<chrome.runtime.PlatformOs>();

  const reFreshAndRerun = () => {
    chrome.runtime.reload();
  };

  useEffect(() => {
    chrome.runtime.getPlatformInfo(function (info) {
      setOS(info.os);
    });
  }, []);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            message: EnumContentScripMessages.GET_MX_WINDOW,
          },
          (msg: I_MX_WINDOW) => {
            setMx(msg);
          }
        );
      }
    });
    return () => {};
  }, []);
  return (
    <Flex justifyContent="space-between" m="6" ml="4" mr="4">
      <Box maxW="60%">
        <Heading
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          M11y-Extension
        </Heading>
        <Text size="xs">
          {type === ENUM_VIEW_TYPE.POPUP && os && (
            <MarkdownDisplay fontSize={'10'}>{displayOS(os)}</MarkdownDisplay>
          )}
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        <Box
          onClick={toggleColorMode}
          cursor="pointer"
          display="flex"
          alignItems="center"
        >
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          {mx ? (
            <Badge ml="2" colorScheme="teal">
              Mendix Version: {mx?.version}
            </Badge>
          ) : (
            <Badge ml="2" colorScheme="teal">
              Possibly not a Mendix App
            </Badge>
          )}
        </Box>
        <Tooltip label="HAVE YOU TRIED TURNING IT OFF AND ON AGAIN?">
          <RepeatIcon
            cursor="pointer"
            onClick={reFreshAndRerun}
            variant="outline"
            color="red"
            ml="2"
          />
        </Tooltip>
      </Box>
    </Flex>
  );
};

export default Topbar;
