import { Flex, IconButton } from '@chakra-ui/react';
import { menuData } from './menu.data';
import { THEME } from '../../constants/theme';
import { SidebarIcon } from '../../assets/icons/sidebar-icon';
import { CategoryItem } from './CategoryItem';
import { NavItem } from './NavItem';
import { useMenuStore } from '../../store/useMenu';

const MenuToggle = () => {
  const { toggleMenu, isMenuOpen } = useMenuStore();

  return (
    <Flex justifyContent={isMenuOpen ? 'flex-end' : 'center'} mt={2}>
      <IconButton
        aria-label='toggle-sidebar'
        bgColor={THEME.primary}
        onClick={toggleMenu}
      >
        <SidebarIcon />
      </IconButton>
    </Flex>
  );
};

export const Sidebar = () => {
  const { isMenuOpen } = useMenuStore();

  return (
    <Flex
      minH='100vh'
      color='black'
      bgColor={THEME.primary}
      flexDir='column'
      gap={4}
      px={isMenuOpen ? 8 : 5}
      pb={8}
    >
      <MenuToggle />
      {menuData.map((item) => (
        <Flex flexDir='column' key={Math.random()}>
          {item.label && (
            <CategoryItem label={item.label} key={Math.random()} />
          )}

          <Flex flexDir='column' gap='2'>
            {item.items.map((item) => (
              <NavItem
                label={item.title}
                to={item.link}
                key={item.id}
                icon={item.icon}
              />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
