import React from 'react';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';

import { send } from '@services/contact'

import useForm from '@hooks/useForm';
import Input from '@components/Input'
import Button from '@components/Button';
import Container from '@components/Container';

import { Main, Form, Text } from './styles';

const SingUp: React.FC = () => {

  const scheme = Yup.object({
    name: Yup.string().required('Item obrigatório'),
    phone: Yup.string().required('Item obrigatório'),
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
      await send(data);
      toast.info('Cadastro realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        draggable: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      reset({ name: '', phone: '', email: '' })
      getOpen(process.env.NEXT_PUBLIC_BASE_URL_RESERVE);
    } catch (error) {
      console.log(error)
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
    <Container>
      <Main>
        <Text><strong>Cadastre-se</strong>para saber mais</Text>
        <Form>
          <Input label='Nome' {...register("name")} />
          <Input label='Email' {...register("email")} />
          <InputMask mask="(99) 9 9999-9999" {...register("phone")}>
            {(inputProps) => <Input {...inputProps} label='Telefone' />}
          </InputMask>
          <Button secondary onClick={handleSubmit(onSubmit)}>Cadastrar</Button>
        </Form>
      </Main>
    </Container>
  )
}

export default SingUp;