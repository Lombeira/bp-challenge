import { Button, Flex, Progress, Text } from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { HEADERS, goalsData } from './goals.data';
import { Dispatch, SetStateAction, useState } from 'react';

type IType = 'division' | 'regional' | 'consultant';

interface IControls {
  setType: Dispatch<SetStateAction<IType>>;
}

const Controls = ({ setType }: IControls) => {
  return (
    <Flex justifyContent='space-between' alignItems='center' mb={8}>
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
          onClick={() => setType('division')}
        >
          Divisão
        </Button>
        <Button
          px={3}
          py={2}
          fontSize='11px'
          borderColor={THEME.iconFeatured}
          variant='outline'
          borderRadius='24px'
          color={THEME.iconFeatured}
          onClick={() => setType('regional')}
        >
          Regional
        </Button>
        <Button
          px={3}
          py={2}
          fontSize='11px'
          borderColor={THEME.iconFeatured}
          variant='outline'
          borderRadius='24px'
          color={THEME.iconFeatured}
          onClick={() => setType('consultant')}
        >
          Consultor
        </Button>
      </Flex>
    </Flex>
  );
};

export const SalesGoals = () => {
  const [type, setType] = useState<IType>('division');

  return (
    <Flex
      minH='342px'
      flexDir='column'
      borderRadius={8}
      bg='white'
      p={4}
      boxShadow='-5px 0px 5px 0px rgba(0, 0, 0, 0.05), 5px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px -5px 4px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05)'
    >
      <Controls setType={setType} />
      <Flex flexDir='column' gap='24px'>
        <Flex justifyContent='space-between' alignItems={'center'}>
          {HEADERS.map((header) => (
            <Text
              key={header.label}
              minW={header.width}
              fontSize='14px'
              fontWeight='500'
            >
              {header.label}
            </Text>
          ))}
        </Flex>
        {goalsData[type].map((item) => (
          <Flex
            key={item.label}
            justifyContent='space-between'
            alignItems={'center'}
          >
            <Text minW='90px' fontSize='12px'>
              {item.label}
            </Text>
            <Text minW='55px' fontSize='12px'>
              {item.sales}
            </Text>
            <Text minW='55px' fontSize='12px'>
              {item.goal}
            </Text>
            <Progress
              minW='244px'
              value={item.sales}
              min={0}
              size='lg'
              max={item.goal}
              borderRadius={24}
              sx={{
                '& > div': {
                  backgroundColor: THEME.iconFeatured,
                },
              }}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
