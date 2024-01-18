import {
  Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
} from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';
import { THEME } from '../constants/theme';

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box
      h='100vh'
      w='100vw'
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={THEME.primary}
      flexDir={'column'}
      gap={4}
    >
      <Card h='400px' p='8'>
        <Image
          src={
            'https://irp-cdn.multiscreensite.com/a1b80395/dms3rep/multi/logo-bemprotege.svg'
          }
          cursor='pointer'
          mb={8}
        />
        <Flex as='form' flexDir='column' onSubmit={handleSubmit} gap='4'>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name='email' type='email' />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input name='password' type='password' />
          </FormControl>
          <Button
            onClick={() => navigate('/dashboard/home')}
            color={THEME.fontPrimary}
            bgColor={THEME.primary}
            w='full'
            type='submit'
            mt='12'
          >
            Entrar
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};
