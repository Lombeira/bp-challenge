import { Flex } from '@chakra-ui/react';
import { menuData } from './menu.data';
import { THEME } from '../../constants/theme';

export const Sidebar = () => {
  return (
    <Flex
      minH='100vh'
      color='black'
      bgColor={THEME.primary}
      flexDir='column'
    >
      {menuData.map((item) => (
        <Flex flexDir='column'>
          <Flex color={THEME.fontPrimary}>{item.label}</Flex>
          <Flex flexDir='column'>
            {item.items.map((item) => (
              <Flex>{item.title}</Flex>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
