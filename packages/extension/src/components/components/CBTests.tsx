import {
  Box,
  Grid,
  Heading,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { cbTests, CB_TEST_TYPE } from '@m11y/factory';
import { EnumContentScripMessages } from '../../utils/types';
const CBTests = () => {
  const [cbType, setCbType] = useState(undefined);
  const bg = useColorModeValue('gray.50', 'gray.700');

  const toggleCBTest = (cdTestEnum: any) => {
    if (cbType === cdTestEnum) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        if (tab.id) {
          chrome.tabs.sendMessage(
            tab.id,
            {
              message: EnumContentScripMessages.CLEAR_CB,
            },
            (msg) => {}
          );
        }
      });
      return setCbType(undefined);
    }
    setCbType(cdTestEnum);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            message: EnumContentScripMessages.SIMULATE_CB,
            cbToSimulate: cdTestEnum,
          },
          (msg) => {}
        );
      }
    });
  };
  return (
    <Box>
      {cbTests.map((test: CB_TEST_TYPE) => {
        return (
          <Box p={4} borderWidth={1} marginTop={2} borderRadius={10} bg={bg}>
            <Grid templateColumns="auto 40px" gap={6}>
              <Box>
                <Heading
                  size="lg"
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                >
                  {test.name}
                </Heading>
                <Text>{test.desc}</Text>
              </Box>
              <Box>
                <Switch
                  id={test.type}
                  colorScheme="teal"
                  value={test.type}
                  onChange={() => toggleCBTest(test.type)}
                  isChecked={cbType === test.type}
                />
              </Box>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default CBTests;
