import { Chart } from 'react-charts';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { graphData } from './graph.data';
import { Dispatch, SetStateAction, useState } from 'react';

type IType = 'first' | 'mensal';

interface IControls {
  setType: Dispatch<SetStateAction<IType>>;
}

const ColoredDot = ({ color }: { color: string }) => (
  <Box w='4' h='4' borderRadius='full' bg={color} />
);

const Subtitle = () => {
  return (
    <Flex
      maxW='287px'
      p={3}
      alignItems='center'
      gap='4'
      borderRadius={8}
      border={`1px solid ${THEME.detail}`}
    >
      <Flex gap='2'>
        <ColoredDot color={THEME.iconFeatured} />
        <Text fontSize='12px'>Produção Mensal</Text>
      </Flex>
      <Flex gap='2'>
        <ColoredDot color={THEME.fontPrimary} />
        <Text fontSize='12px'>Projeção Mensal</Text>
      </Flex>
    </Flex>
  );
};

const Controls = ({ setType }: IControls) => {
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Text fontSize='16px' fontWeight='500' lineHeight='24px'>
        Vendas
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
          onClick={() => setType('first')}
        >
          Primeira Parcela
        </Button>
        <Button
          px={3}
          py={2}
          fontSize='11px'
          borderColor={THEME.iconFeatured}
          variant='outline'
          borderRadius='24px'
          color={THEME.iconFeatured}
          onClick={() => setType('mensal')}
        >
          Valor Mensal
        </Button>
      </Flex>
    </Flex>
  );
};

export const SalesGraph = () => {
  const [type, setType] = useState<IType>('first');
  return (
    <Flex
      minH='342px'
      flexDir='column'
      borderRadius={8}
      bg='white'
      gap={6}
      p={4}
      boxShadow='-5px 0px 5px 0px rgba(0, 0, 0, 0.05), 5px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px -5px 4px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05)'
    >
      <Controls setType={setType} />
      <Box minH='216px' flexDir='column'>
        <Chart
          options={{
            data: graphData[type],
            primaryAxis: {
              getValue: (datum) => datum.primary,
            },
            secondaryAxes: [
              {
                getValue: (datum) => datum.secondary,
                min: 0,
                max: 250,
              },
            ],
            defaultColors: [THEME.iconFeatured],
            getDatumStyle: (datum) => {
              if (datum.index === 0) {
                return {
                  fill: THEME.iconFeatured,
                  stroke: THEME.iconFeatured,
                  strokeWidth: 2,
                  rx: 6,
                };
              }
              return {
                fill: THEME.fontPrimary,
                stroke: THEME.fontPrimary,
                strokeWidth: 2,
                rx: 6,
              };
            },
          }}
        />
      </Box>
      <Subtitle />
    </Flex>
  );
};
