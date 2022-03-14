/// <reference types="chrome"/>
import React, { useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Text,
  TabPanel,
  extendTheme,
  theme as chakraTheme,
} from '@chakra-ui/react';
import Developers from '../components/pages/Developers';
import { AppStateContext } from '../state/AppStateContext';
import { initialState, reducer } from '../state/popupReducer';
import Topbar from '../components/components/Topbar';
import { DeveloperProvider } from '../components/context/DeveloperProvider';
import Designers from '../components/pages/Designers';
import { ENUM_VIEW_TYPE, MAIN_VIEW_TYPE } from '../utils/types';

const Popup = ({ type }: MAIN_VIEW_TYPE) => {
  return (
    <>
      <DeveloperProvider>
        <Topbar type={type} />
        <Tabs
          variant="enclosed"
          colorScheme="teal"
          w={type === ENUM_VIEW_TYPE.POPUP ? '600px' : 'auto'}
        >
          <TabList>
            <Tab>
              <Text display="flex">Developers</Text>
            </Tab>
            <Tab>
              <Text display="flex">Designers</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Developers />
            </TabPanel>
            <TabPanel>
              <Designers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DeveloperProvider>
    </>
  );
};

const config = {
  fonts: {
    ...chakraTheme.fonts,
    heading: 'Open Sans',
    body: 'Raleway',
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export const Index = ({ type }: MAIN_VIEW_TYPE) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <AppStateContext.Provider value={{ state, dispatch }}>
        <ChakraProvider theme={theme}>
          <Popup type={type} />
        </ChakraProvider>
      </AppStateContext.Provider>
    </div>
  );
};
