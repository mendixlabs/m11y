import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { FC } from 'react';

import {
  EnumContentScripMessages,
  ENUM_Developer_View,
  ErrorEnum,
  IError,
} from '../../utils/types';

import { useDeveloperState } from '../context/DeveloperProvider';
import MarkdownDisplay from './MarkdownDisplay';
import NavigateIssue from './NavigateIssue';
import TechnicalExplanation from './TechnicalExplanation';

export const DisplayWarnings: FC<IError> = ({ tag, error, showButtons }) => {
  const bg = useColorModeValue('gray.50', 'gray.700');

  const { dispatch, state } = useDeveloperState();

  const clearErrors = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab?.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            message: EnumContentScripMessages.REMOVE_ALL_ERRORS,
          },
          (msg) => {}
        );
      }
    });
  };
  const showAllErrors = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab?.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            message: EnumContentScripMessages.SHOW_ALL_ERRORS,
            errorToView: error,
            tag,
          },
          (msg) => {}
        );
      }
    });
  };
  const showErrorsInConsole = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab?.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            message: EnumContentScripMessages.SHOW_ERROR_IN_CONSOLE,
            tag: tag,
            errorToView: error,
          },
          (msg) => {}
        );
      }
    });
  };
  const ALL_ERROR_BUTTON_COLOR =
    error.errorType === ErrorEnum.Error
      ? 'red'
      : error.errorType === ErrorEnum.Warning
      ? 'orange'
      : 'teal';

  return (
    <Box p={4} borderWidth={1} marginTop={2} bg={bg} borderRadius={10}>
      <Grid templateColumns="80px auto 40px" gap={6}>
        <Box w="100%" display="flex" alignItems="self-start">
          <Badge colorScheme="purple">{error.errorCount} - Issues</Badge>
          <TechnicalExplanation title={'Technical Explanation'}>
            <MarkdownDisplay>
              {error.errorDescription.technical}
            </MarkdownDisplay>
          </TechnicalExplanation>
        </Box>
        <Box w="100%">
          <Heading size="xs" paddingBottom={'2'}>
            Explanation
          </Heading>
          <MarkdownDisplay fontSize="14">
            {error.errorDescription.mendix}
          </MarkdownDisplay>
          <Heading size="xs" paddingTop={'2'} paddingBottom={'2'}>
            Possible Solutions
          </Heading>
          <MarkdownDisplay fontSize="14">
            {error.errorDescription.technical}
          </MarkdownDisplay>
        </Box>
      </Grid>
      {showButtons && (
        <Box>
          <ButtonGroup size="xs" isAttached mt="4">
            {state.allErrors === error.errorEnumToTarget ? (
              <Button
                colorScheme={ALL_ERROR_BUTTON_COLOR}
                onClick={() => {
                  clearErrors();
                  dispatch({
                    type: ENUM_Developer_View.CLEAR_ALL_ISSUES,
                    data: error,
                  });
                }}
              >
                Clear Affected Elements
              </Button>
            ) : (
              <Button
                variant="outline"
                colorScheme={ALL_ERROR_BUTTON_COLOR}
                onClick={() => {
                  clearErrors();
                  dispatch({
                    type: ENUM_Developer_View.ALL_ISSUES,
                    data: error,
                  });
                  showAllErrors();
                }}
              >
                Highlight Affect Elements
              </Button>
            )}
            {state.step === error.errorEnumToTarget ? (
              <Button
                colorScheme="orange"
                variant="outline"
                onClick={() => {
                  clearErrors();
                  dispatch({
                    type: ENUM_Developer_View.CLOSE_STEP,
                  });
                }}
              >
                Close Issue Navigate
              </Button>
            ) : (
              <Button
                colorScheme="teal"
                variant="outline"
                onClick={() => {
                  clearErrors();
                  dispatch({
                    type: ENUM_Developer_View.STEP,
                    data: error,
                  });
                }}
              >
                Step Through Issues
              </Button>
            )}
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => showErrorsInConsole()}
            >
              Display Issues In Console
            </Button>
          </ButtonGroup>
        </Box>
      )}
      <NavigateIssue tag={tag} error={error} />
    </Box>
  );
};
