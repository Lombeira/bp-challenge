import { Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { INotificationsMenu } from './interface';

export const NotificationBadge = ({
  hasNotification = null,
  isAbsolute = false,
}: INotificationsMenu) => {
  return (
    <Flex
      w='5'
      h='5'
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
      <Text fontSize='14' color={THEME.fontPrimary}>
        {hasNotification}
      </Text>
    </Flex>
  );
};
