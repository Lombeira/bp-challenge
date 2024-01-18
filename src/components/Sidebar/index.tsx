import { Flex, IconButton, Text } from '@chakra-ui/react';
import { menuData } from './menu.data';
import { THEME } from '../../constants/theme';
import { SidebarIcon } from '../../assets/icons/sidebar-icon';

export const Sidebar = () => {
  return (
    <Flex
      minH='100vh'
      color='black'
      bgColor={THEME.primary}
      flexDir='column'
      gap={4}
      px='8'
    >
      <Flex justifyContent={'flex-end'}>
        <IconButton aria-label='toggle-sidebar' bgColor={THEME.primary}>
          <SidebarIcon />
        </IconButton>
      </Flex>
      {menuData.map((item) => (
        <Flex flexDir='column' key={Math.random()}>
          <Text color={THEME.fontPrimary}>{item.label}</Text>
          <Flex flexDir='column'>
            {item.items.map((item) => (
              <Text color={THEME.fontPrimary} key={item.id}>
                {item.title}
              </Text>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
