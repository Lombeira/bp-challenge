import { Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../../constants/theme';

export interface INotificationsMenu {
  hasNotification?: number | null;
  isAbsolute?: boolean;
}

export const NotificationBadge = ({
  hasNotification = null,
  isAbsolute = false,
}: INotificationsMenu) => {
  return (
    <Flex
      w='15px'
      h='15px'
      borderRadius='full'
      bgColor='red.600'
      alignItems='center'
      justifyContent='center'
      {...(isAbsolute && {
        position: 'absolute',
        top: '0px',
        right: '-10px',
      })}
    >
      <Text fontSize='10px' color={THEME.fontPrimary}>
        {hasNotification}
      </Text>
    </Flex>
  );
};
