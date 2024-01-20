import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import { NOTIFICATION_DATA } from './notification.data';
import { THEME } from '../../../constants/theme';

interface IAccordion {
  data: typeof NOTIFICATION_DATA;
}

export const Accordion = ({ data }: IAccordion) => {
  return (
    <ChakraAccordion
      defaultIndex={[0]}
      allowMultiple
      w='349px'

      p={1}
    >
      {data.map(({ label, date, hour, message, type }) => (
        <AccordionItem key={label}>
          <AccordionButton>
            <Flex as='span' flex='1'>
              <Text
                fontSize={12}
                textAlign='left'
                flex='1'
                alignSelf={'center'}
              >
                {`${label} - ${type}`}
              </Text>
              <Flex flexDir='column' mr={3}>
                <Text fontSize={10} textAlign='center' color='GrayText'>
                  {date}
                </Text>
                <Text fontSize={10} textAlign='center' color='GrayText'>
                  {hour}
                </Text>
              </Flex>
            </Flex>
            <Flex
              w='6'
              h='6'
              bgColor={THEME.primary}
              borderRadius='full'
              justifyContent='center'
              alignItems='center'
            >
              <AccordionIcon color={THEME.fontPrimary} />
            </Flex>
          </AccordionButton>
          <AccordionPanel bgColor='white' p={0}>
            <Flex
              flexDir='column'
              bgColor={THEME.notification}
              p={3}
              borderRadius={4}
            >
              <Text fontSize={12} textAlign='center' color='GrayText'>
                {message}
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
};
