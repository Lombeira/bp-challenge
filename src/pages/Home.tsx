import { SimpleGrid } from '@chakra-ui/react';
import { WelcomeCard } from '../components/Welcome';
import { SalesGraph } from '../components/Sales/Graph';
import { ProposalsStats } from '../components/Proposals/Stats';
import { ProposalsGraph } from '../components/Proposals/Graph';
import { SalesGoals } from '../components/Sales/Goals';
import { MapChart } from '../components/Range';

export const Home = () => (
  <SimpleGrid columns={{ sm: 1, lg: 2 }} spacing={10}>
    <WelcomeCard />
    <ProposalsStats />
    <SalesGraph />
    <ProposalsGraph />
    <SalesGoals />
    <MapChart />
  </SimpleGrid>
);
