import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NOTIFICATION_DATA } from './notification.data';

interface IAccordion {
  data: typeof NOTIFICATION_DATA;
}

export const Accordion = ({ data }: IAccordion) => {
  return (
    <ChakraAccordion defaultIndex={[0]} allowMultiple w='400px' boxShadow='2xl'>
      {data.map(({ label, date, hour, message, type }) => (
        <AccordionItem key={label}>
          <AccordionButton>
            <Flex
              as='span'
              flex='1'
              textAlign='left'
              justifyContent='space-around'
            >
              <Text fontSize={14} textAlign='center' alignSelf={'center'}>
                {`${label} - ${type}`}
              </Text>
              <Flex flexDir='column'>
                <Text fontSize={14} textAlign='center' color='GrayText'>
                  {date}
                </Text>
                <Text fontSize={14} textAlign='center' color='GrayText'>
                  {hour}
                </Text>
              </Flex>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex flexDir='column' gap='2'>
              <Text fontSize={14} textAlign='center' color='GrayText'>
                {message}
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
};
