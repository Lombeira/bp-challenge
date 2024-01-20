import { Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { PROPOSALS_DATA } from './proposals.data';

interface IProposal {
  title: string;
  value: number;
  detail?: string;
  color: string;
}

export const ProposalStatsCard = ({
  title,
  value,
  color,
  detail = '',
}: IProposal) => {
  const getDetailColor = (detail: string) => {
    if (detail.includes('-')) {
      return 'red.500';
    }
    if (detail.includes('+')) {
      return 'green.500';
    }
    return 'gray.500';
  };

  return (
    <Flex
      flexDir='column'
      gap={3}
      bgColor='white'
      minH='116px'
      p={3}
      borderLeft={`4px solid ${color}`}
      borderRadius='8px'
      boxShadow='-5px 0px 5px 0px rgba(0, 0, 0, 0.05), 5px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px -5px 4px 0px rgba(0, 0, 0, 0.05), 0px 5px 5px 0px rgba(0, 0, 0, 0.05);'
    >
      <Text fontSize='16px' lineHeight='24px' fontWeight='500'>
        {title}
      </Text>
      <Text fontSize='22px' lineHeight='28px'>
        {String(value)}
      </Text>
      <Text color={getDetailColor(detail)}>{detail}</Text>
    </Flex>
  );
};

export const ProposalsStats = () => {
  return (
    <SimpleGrid columns={2} gap={8}>
      {PROPOSALS_DATA.map(({ id, title, value, color, detail }) => (
        <ProposalStatsCard
          key={id}
          title={title}
          value={value}
          color={color}
          detail={detail}
        />
      ))}
    </SimpleGrid>
  );
};
