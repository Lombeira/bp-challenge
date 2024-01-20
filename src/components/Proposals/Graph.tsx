import { Chart } from 'react-charts';
import { Box, Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { originData, proposalData } from './graph.data';

export const ProposalsGraph = () => {
  return (
    <Flex flexDir='column' minH='342px' gap={4}>
      <Flex
        flexDir='column'
        bg='white'
        p={4}
        boxShadow='-5px 0px 5px 0px rgba(0, 0, 0, 0.05), 5px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px -5px 4px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05)'
      >
        <Text mb={4} fontSize='16px' fontWeight='500' lineHeight='24px'>
          Tipos de proposta
        </Text>
        <Box minH='112px' flexDir='column'>
          <Chart
            options={{
              data: proposalData,
              primaryAxis: {
                position: 'left',
                getValue: (datum) => datum.primary,
              },
              secondaryAxes: [
                {
                  position: 'bottom',
                  show: false,
                  getValue: (datum) => datum.secondary,
                  min: 0,
                  max: 25,
                },
              ],
              defaultColors: [THEME.iconFeatured],
              getDatumStyle: (datum) => {
                return {
                  fill: THEME.iconFeatured,
                  stroke: THEME.iconFeatured,
                  strokeWidth: 2,
                  rx: 6,
                  content: datum.secondaryValue,
                };
              },
            }}
          />
        </Box>
      </Flex>
      <Flex
        flexDir='column'
        bg='white'
        p={4}
        boxShadow='-5px 0px 5px 0px rgba(0, 0, 0, 0.05), 5px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px -5px 4px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05)'
      >
        <Text mb={4} fontSize='16px' fontWeight='500' lineHeight='24px'>
          Origem
        </Text>
        <Box minH='112px' flexDir='column'>
          <Chart
            options={{
              data: originData,
              primaryAxis: {
                position: 'left',
                getValue: (datum) => datum.primary,
              },
              secondaryAxes: [
                {
                  position: 'bottom',
                  show: false,
                  getValue: (datum) => datum.secondary,
                  min: 0,
                  max: 25,
                },
              ],
              defaultColors: [THEME.iconFeatured],
              getDatumStyle: (datum) => {
                return {
                  fill: THEME.iconFeatured,
                  stroke: THEME.iconFeatured,
                  strokeWidth: 2,
                  rx: 6,
                  content: datum.secondaryValue,
                };
              },
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
