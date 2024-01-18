import { Chart } from 'react-charts';
import { Box, Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../../constants/theme';
import { data } from './graph.data';

export const ProposalsGraph = () => {
  return (
    <>
      <Flex minH='342px' flexDir='column'>
        <Text mb={8} fontSize='16px' fontWeight='500' lineHeight='24px'>
          Tipos de proposta
        </Text>
        <Box minH='240px' flexDir='column'>
          <Chart
            options={{
              data,
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
                console.log(datum);
                return {
                  fill: THEME.primary,
                  stroke: THEME.primary,
                  strokeWidth: 2,
                  rx: 6,
                  content: datum.secondaryValue,
                };
              },
            }}
          />
        </Box>
      </Flex>
    </>
  );
};
