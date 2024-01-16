import { Box, SimpleGrid } from '@chakra-ui/react';
import { useMenuStore } from './store/useMenu';

function App() {
  const { closeMenu } = useMenuStore();

  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  );
}

export default App;
