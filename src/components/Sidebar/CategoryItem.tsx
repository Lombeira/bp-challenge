import { Flex, Text } from '@chakra-ui/react';
import { THEME } from '../../constants/theme';
import { useMenuStore } from '../../store/useMenu';
import { MinusIcon } from '@chakra-ui/icons';

interface ICategoryItem {
  label: string;
}

export const CategoryItem = ({ label }: ICategoryItem) => {
  const { isMenuOpen } = useMenuStore();

  return (
    <Flex
      justifyContent={isMenuOpen ? 'flex-start' : 'center'}
      alignItems='center'
      p={3}
      pt={6}
    >
      {isMenuOpen ? (
        <Text fontSize='14px' fontWeight='500' color={THEME.fontSecondary}>
          {label}
        </Text>
      ) : (
        <MinusIcon color={THEME.fontSecondary} />
      )}
    </Flex>
  );
};
