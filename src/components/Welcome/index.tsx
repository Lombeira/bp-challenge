import { Card, Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { SunIcon } from '@chakra-ui/icons';

const IconFeatured = () => (
  <Flex
    h='16'
    w='16'
    bgColor={THEME.iconFeatured}
    borderRadius='full'
    alignItems='center'
    justifyContent='center'
    mb={2}
  >
    <SunIcon color={THEME.fontPrimary} boxSize={6} />
  </Flex>
);

export const WelcomeCard = () => {
  return (
    <Card
      position='relative'
      display='flex'
      justifyContent='center'
      alignItems='center'
      boxShadow='lg'
      p='8'
      borderRadius='8'
    >
      <IconFeatured />
      <Text mb='4' fontSize={20}>
        Parabéns João Victor
      </Text>
      <Flex flexDir='column' gap='2'>
        <Text fontSize={16} fontWeight='semibold'>
          Sua taxa de Conversão aumentou em 20%
        </Text>
        <Text fontSize={14} textAlign='center' color='GrayText'>
          *Em relação a dezembro/2023
        </Text>
      </Flex>
    </Card>
  );
};
