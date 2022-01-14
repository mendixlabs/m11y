import { RepeatIcon } from '@chakra-ui/icons';
import { Heading, Stack } from '@chakra-ui/layout';
import { Box, Button, Flex, Skeleton } from '@chakra-ui/react';
import { rationalizeTagInformation } from '@m11y/factory';
import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from '../../state/popupReducer';
import { EnumContentScripMessages, EnumStateTypes } from '../../utils/types';
import { DisplayWarnings } from '../components/DisplayWarnings';

const Developers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllErrors = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            message: EnumContentScripMessages.GET_ALL_ERRORS,
          },
          (msg) => {
            dispatch({
              type: EnumStateTypes.fetchAllError,
              errorList: msg,
            });
          }
        );
      }
    });
  };

  useEffect(() => {
    getAllErrors();
  }, []);

  return (
    <div>
      <Flex justifyContent="space-between" m="6" ml="4" mr="4">
        <Box>
          <Heading
            size="md"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Warnings, Errors & Suggestions for Developers
          </Heading>
        </Box>
        <Box>
          <Button size="sm" colorScheme="teal" onClick={getAllErrors}>
            <RepeatIcon size="sm" />
          </Button>
        </Box>
      </Flex>
      {state.errorList?.length ? (
        <>
          {state?.errorList.map((errorItem, i) => {
            console.log(`errorItem`, errorItem);
            return (
              <Box
                p={4}
                borderWidth={1}
                marginTop={6}
                borderRadius={10}
                key={i}
              >
                <Heading
                  size="lg"
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  Issues with{' '}
                  {rationalizeTagInformation(errorItem.tag).mendixName}
                </Heading>
                {errorItem.errors.map((error, key) => {
                  return (
                    <div key={key}>
                      <DisplayWarnings
                        tag={errorItem.tag}
                        error={error}
                        showButtons={
                          rationalizeTagInformation(errorItem.tag).showButtons
                        }
                      />
                    </div>
                  );
                })}
              </Box>
            );
          })}
        </>
      ) : (
        <>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </>
      )}
    </div>
  );
};

export default Developers;
