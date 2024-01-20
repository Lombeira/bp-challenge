import {
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { THEME } from '../../../constants/theme';
import { INotificationsMenu, NotificationBadge } from '../Badge';
import { Accordion } from './accordion';
import { NOTIFICATION_DATA } from './notification.data';

export const NotificationsMenu = ({
  hasNotification = null,
}: INotificationsMenu) => {
  return (
    <Menu placement='bottom-end'>
      <MenuButton as='button'>
        <Flex
          align='center'
          gap='1'
          w='8'
          h='8'
          alignItems='center'
          justifyContent='center'
          borderRadius='full'
          backgroundColor={THEME.headerButtons}
          position='relative'
        >
          <BellIcon boxSize={5} color={THEME.fontPrimary} />
          {hasNotification && (
            <NotificationBadge hasNotification={hasNotification} isAbsolute />
          )}
        </Flex>
      </MenuButton>
      <MenuList
        pt={0}
        boxShadow='-5px 0px 10px 0px rgba(0, 0, 0, 0.15), 5px 0px 10px 0px rgba(0, 0, 0, 0.15), 0px -5px 10px 0px rgba(0, 0, 0, 0.15), 0px 5px 10px 0px rgba(0, 0, 0, 0.15);'
      >
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          gap={2}
          bgColor={THEME.iconFeatured}
          borderTopRadius={8}
          p='4'
        >
          <Text
            fontSize='12px'
            fontWeight='500'
            textAlign='center'
            alignSelf={'center'}
            color={THEME.fontPrimary}
            borderRadius={8}
          >
            Atualizações
          </Text>
          {hasNotification && (
            <NotificationBadge hasNotification={hasNotification} />
          )}
        </Flex>
        <Divider h='2px' bgColor={'black'} />
        <Accordion data={NOTIFICATION_DATA} />
      </MenuList>
    </Menu>
  );
};
