import {
  Avatar,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { useNavigate } from 'react-router-dom';
import Logout from '../../assets/icons/log-out.svg';

export const AvatarMenu = () => {
  const navigate = useNavigate();
  const dropdownItems = [
    {
      label: 'Sair',
      color: 'danger.500',
      fontWeight: 'bold',
      icon: Logout,
      onClick: () => navigate('/'),
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
      <MenuList boxShadow='-5px 0px 10px 0px rgba(0, 0, 0, 0.15), 5px 0px 10px 0px rgba(0, 0, 0, 0.15), 0px -5px 10px 0px rgba(0, 0, 0, 0.15), 0px 5px 10px 0px rgba(0, 0, 0, 0.15);'>
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
            {icon && <Image src={icon} />}
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
