import { Chart } from 'react-charts';
import { Box, Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../../constants/theme';
import { data } from './data';

export const SalesCard = () => {
  return (
    <>
      <Flex minH='342px' flexDir='column'>
        <Text mb={8} fontSize='16px' fontWeight='500' lineHeight='24px'>
          Vendas Concluídas
        </Text>
        <Box minH='240px' flexDir='column'>
          <Chart
            options={{
              data,
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
                    fill: THEME.primary,
                    stroke: THEME.primary,
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
      </Flex>
    </>
  );
};
