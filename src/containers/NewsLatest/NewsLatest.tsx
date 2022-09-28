import React from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { newsLatest } from '@services/contact'

import useForm from '@hooks/useForm';
import Input from '@components/Input'
import Button from '@components/Button';

import { Main, Box, Form, Text, Image } from './styles';

import image from '@public/icons/wave-3.svg'

const NewsLatest: React.FC = () => {

  const scheme = Yup.object({
    name: Yup.string().required('Item obrigatório'),
    email: Yup.string().email('e-mail incorreto').required('Item obrigatório'),
  });

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
    resolver: scheme,
  });

  const getOpen = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('target', '_blank');
    a.click();
  }

  const onSubmit = async (data): Promise<void> => {
    try {
      await newsLatest(data);
      reset({ name: '', email: '' })
      toast.info('Cadastro realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        draggable: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      getOpen(process.env.NEXT_PUBLIC_BASE_URL_RESERVE);
    } catch (error) {
            toast.error('Erro ao realizar cadastro!', {
        position: "top-right",
        autoClose: 5000,
        draggable: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };
  return (
    <Main>
      <Box>
        <Image
          src={image}
          height={30}
        />
        <Text>Fique por dentro das nossas promoções e disponibilidade</Text>
      </Box>
      <Form>
        <Input label='Nome' {...register("name")} />
        <Input label='Email' {...register("email")} />
        <Button onClick={handleSubmit(onSubmit)}>Enviar</Button>
      </Form>
    </Main>
  )
}

export default NewsLatest;