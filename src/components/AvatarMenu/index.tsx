import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { NotAllowedIcon } from '@chakra-ui/icons';

export const AvatarMenu = () => {
  const dropdownItems = [
    {
      label: 'Sair',
      color: 'danger.500',
      fontWeight: 'bold',
      icon: <NotAllowedIcon />,
      onClick: () => console.log('sair'),
    },
  ];
  return (
    <Menu>
      <MenuButton as='button'>
        <Flex align='center' gap='1'>
          <Avatar
            name=''
            size='sm'
            cursor='pointer'
            bgColor={THEME.headerButtons}
            color='neutral.800'
            border={`1px solid ${THEME.headerButtons}`}
          />
        </Flex>
      </MenuButton>
      <MenuList>
        {dropdownItems.map(({ label, icon, fontWeight, color, onClick }) => (
          <MenuItem
            key={label}
            onClick={onClick}
            gap='4'
            h='12'
            fontWeight={fontWeight}
            color={color}
            _hover={{ bgColor: 'neutral.200' }}
          >
            {icon && <NotAllowedIcon />}
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
