import {
  Image,
  Flex,
  Divider,
  Text,
  Stack,
  // Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { THEME } from '../../constants/theme';
import { AvatarMenu } from '../AvatarMenu';
import { NotificationsMenu } from '../NotificationsMenu';

export function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

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
      <Stack direction='row' h='70%' gap={4}>
        <NotificationsMenu hasNotification={2} />

        <Divider ml={2} orientation='vertical' color={THEME.fontPrimary} />
        <Text color={THEME.fontPrimary} alignSelf={'center'}>
          Olá, João Victor
        </Text>
        <AvatarMenu />
      </Stack>
    </Flex>
  );
}
