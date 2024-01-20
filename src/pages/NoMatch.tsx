import { Flex, Text } from '@chakra-ui/react';

export const NoMatch = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} h='400px'>
      <Text fontSize='22px' fontWeight={500}>
        Em desenvolvimento...
      </Text>
    </Flex>
  );
};
