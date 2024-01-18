import {
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { THEME } from '../../constants/theme';
import { INotificationsMenu } from '../NotificationBadge/interface';
import { NotificationBadge } from '../NotificationBadge';
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
      <MenuList pt={0} bgColor={'white'}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          gap={2}
          bgColor={THEME.iconFeatured}
        >
          <Text
            fontSize={14}
            textAlign='center'
            alignSelf={'center'}
            py='4'
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
