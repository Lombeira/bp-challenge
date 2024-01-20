import { Box, Button, Flex, Image, Progress, Text } from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import Brasil from '../../assets/icons/brasil.svg';
import { states } from './states.data';
import { useState } from 'react';

interface IStateChart {
  src: string;
  label: string;
  generated: number;
}

const StateChart = ({ src, label, generated }: IStateChart) => {
  const GOAL = 50;

  return (
    <Flex flexDir='column' gap='10px'>
      <Flex justifyContent='space-between' minW='234px'>
        <Flex gap={2}>
          <Image src={src} />
          <Text fontSize='12px' fontWeight={500}>
            {label}
          </Text>
        </Flex>
        <Flex gap={2} justifyContent='space-between'>
          <Text fontSize='11px' fontWeight={500} color={THEME.detail}>
            {`${generated}/${GOAL}`}
          </Text>
          <Text fontSize='11px' fontWeight={500}>
            {(generated * 100) / GOAL}%
          </Text>
        </Flex>
      </Flex>
      <Progress
        minW='244px'
        value={generated}
        min={0}
        size='lg'
        max={GOAL}
        borderRadius={24}
        sx={{
          '& > div': {
            backgroundColor: THEME.iconFeatured,
          },
        }}
      />
    </Flex>
  );
};

export const MapChart = () => {
  const [type, setType] = useState<'generated' | 'ended'>('generated');
  const byGenerated = (a: any, b: any) => {
    if (a.generated < b.generated) {
      return 1;
    }
    if (a.generated > b.generated) {
      return -1;
    }
    return 0;
  };

  return (
    <Box
      flexDir='column'
      bg='white'
      p={4}
      borderRadius={8}
      boxShadow='-5px 0px 5px 0px rgba(0, 0, 0, 0.05), 5px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px -5px 4px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05)'
    >
      <Flex justifyContent='space-between' alignItems='center' mb={8}>
        <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
          Alcance pelo Brasil
        </Text>
        <Flex gap={3}>
          <Button
            px={3}
            py={2}
            fontSize='11px'
            borderColor={THEME.iconFeatured}
            borderRadius='24px'
            variant='outline'
            color={THEME.iconFeatured}
            onClick={() => setType('generated')}
          >
            Propostas Geradas
          </Button>
          <Button
            px={3}
            py={2}
            fontSize='11px'
            borderColor={THEME.iconFeatured}
            variant='outline'
            borderRadius='24px'
            color={THEME.iconFeatured}
            onClick={() => setType('ended')}
          >
            Propostas Finalizadas
          </Button>
        </Flex>
      </Flex>
      <Flex justifyContent='space-between'>
        <Box w='50%'>
          <Image src={Brasil} />
        </Box>
        <Flex w='50%' flexDir='column' gap='3' p='2'>
          {states[type].sort(byGenerated).map((state) => (
            <StateChart
              key={state.id}
              src={state.icon}
              label={state.name}
              generated={state.generated}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
