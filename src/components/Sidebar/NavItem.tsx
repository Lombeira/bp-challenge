import { Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { THEME } from '../../constants/theme';
import { useMenuStore } from '../../store/useMenu';

interface INavItem {
  icon: string;
  label: string;
  to: string;
}

export const NavItem = ({ icon, label, to }: INavItem) => {
  const { isMenuOpen } = useMenuStore();

  const isSelected = window.location.pathname === to;

  return isMenuOpen ? (
    <Flex
      as={Link}
      gap={2}
      to={to}
      p={3}
      justifyContent={isMenuOpen ? 'flex-start' : 'center'}
      alignItems='center'
      borderRadius={8}
      bg={isSelected ? THEME.mainHover : 'transparent'}
      _hover={{
        backgroundColor: THEME.mainHover,
        color: THEME.fontPrimary,
        transition: 'all 0.2s',
      }}
    >
      <Image src={icon} color={THEME.fontPrimary} />
      <Text fontSize='14px' fontWeight='500' color={THEME.fontPrimary}>
        {label}
      </Text>
    </Flex>
  ) : (
    <Tooltip label={label} placement='right' hasArrow gutter={30}>
      <Flex
        as={Link}
        gap={2}
        to={to}
        p={3}
        justifyContent={isMenuOpen ? 'flex-start' : 'center'}
        alignItems='center'
        borderRadius={8}
        bg={isSelected ? THEME.mainHover : 'transparent'}
        _hover={{
          backgroundColor: THEME.mainHover,
          color: THEME.fontPrimary,
          transition: 'all 0.2s',
        }}
      >
        <Image src={icon} color={THEME.fontPrimary} />
        {isMenuOpen && (
          <Text fontSize='14px' fontWeight='500' color={THEME.fontPrimary}>
            {label}
          </Text>
        )}
      </Flex>
    </Tooltip>
  );
};
