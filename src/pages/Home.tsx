import { SimpleGrid } from '@chakra-ui/react';
import { WelcomeCard } from '../components/Cards/Welcome';
import { THEME } from '../constants/theme';
import { SalesCard } from '../components/Cards/Sales';
import { ProposalsStats } from '../components/Cards/Proposals/ProposalsStats';
import { ProposalsGraph } from '../components/Cards/Proposals/ProposalsGraph';

export const Home = () => (
  <SimpleGrid columns={2} spacing={10} bgColor={THEME.dashboardBg}>
    <WelcomeCard />
    <ProposalsStats />
    <SalesCard />
    <ProposalsGraph />
  </SimpleGrid>
);
