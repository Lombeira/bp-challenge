import {
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
  Flex,
  // Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { THEME } from '../../constants/theme';
import { AvatarMenu } from '../AvatarMenu';

export function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }

  function goHome() {
    navigate('/');
  }

  const dropdownItems = [
    // {
    //   label: 'Item 1',
    //   icon: 'document-contract-edit-pen',
    //   onClick: () => console.log('item 1'),
    // },
    {
      label: 'Sair',
      color: 'danger.500',
      fontWeight: 'bold',
      icon: 'logout',
      onClick: handleLogout,
    },
  ];

  return (
    <Flex
      as='header'
      gridArea='header'
      width='100%'
      height='57px'
      borderBottom='1px'
      borderBottomColor='neutral.300'
      boxShadow='base'
      justifyContent='space-between'
      alignItems='center'
      bgColor={THEME.primary}
      zIndex='900'
      paddingX='6'
    >
      <Image
        src={
          'https://irp-cdn.multiscreensite.com/a1b80395/dms3rep/multi/logo-bemprotege.svg'
        }
        onClick={goHome}
        cursor='pointer'
      />

      <AvatarMenu />
    </Flex>
  );
}
