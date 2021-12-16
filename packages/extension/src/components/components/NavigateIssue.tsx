import {
  Box,
  Button,
  ButtonGroup,
  Fade,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { EnumContentScripMessages, IError } from '../../utils/types';
import { useDeveloperState } from '../context/DeveloperProvider';

const NavigateIssue: FC<IError> = ({ tag, error }) => {
  const bg = useColorModeValue('gray.200', 'gray.600');
  const [step, setStep] = useState<number | undefined>(undefined);
  const { state } = useDeveloperState();

  useEffect(() => {
    if (step !== undefined) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        if (tab.id) {
          chrome.tabs.sendMessage(
            tab.id,
            {
              message: EnumContentScripMessages.STEP_ERROR,
              errorToView: error,
              step: step,
              tag: tag,
            },
            (msg) => {}
          );
        }
      });
    }
  }, [step]);

  if (state.step === error.errorEnumToTarget) {
    return (
      <Fade in={state.step === error.errorEnumToTarget}>
        <Box p={4} borderWidth={1} marginTop={2} bg={bg} borderRadius={10}>
          <Heading size="md">Navigate Through Errors</Heading>
          <Text>
            Sometimes Issues can be hard do find as it is in the DOM but not
            visible. Use "See Issues In Console" to see it better{' '}
          </Text>
          <ButtonGroup size="xs" isAttached mt="4">
            <Button
              disabled={!step}
              onClick={() => setStep(step ? step - 1 : 0)}
            >
              Prev Issue
            </Button>
            <Button
              disabled={step === error.errorCount - 1}
              onClick={() => setStep(step !== undefined ? step + 1 : 0)}
            >
              Next Issue
            </Button>
          </ButtonGroup>
        </Box>
      </Fade>
    );
  } else {
    return <div></div>;
  }
};

export default NavigateIssue;
