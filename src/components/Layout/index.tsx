import { Box, Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { THEME } from '../../constants/theme';

export const Layout = () => {
  return (
    <>
      <Grid
        templateRows='57px 1fr'
        templateColumns='300px 1fr'
        templateAreas={`"header header"
                  "nav main"`}
        background={THEME.primary}
      >
        <Header />

        <Sidebar />

        <Box
          as='main'
          gridArea='main'
          paddingX='8'
          paddingY='7'
          overflowX='hidden'
          bg='white'
          borderTopLeftRadius={16}
        >
          <Outlet />
        </Box>
      </Grid>
    </>

    //   <div>
    //     <Flex
    //       as='nav'
    //       justifyContent={'space-between'}
    //       px='8'
    //       bgColor={THEME.primary}
    //     >
    //       <Flex>Logo</Flex>
    //       <Flex gap='1rem'>
    //         <Flex>Notification</Flex>
    //         <Center height='50px'>
    //           <Divider orientation='vertical' color='black' />
    //         </Center>
    //         <Flex>Avatar</Flex>
    //       </Flex>
    //     </Flex>
    //     <Sidebar />
    //     <Outlet />
    //   </div>
  );
};
