import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

import {
  LoginContainer,
  LoginHeadline,
  LoginContent,
  LoginSubtitle,
  LoginInputContainer
} from './login.style'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>sign in</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Login whit Google
          </CustomButton>
          <LoginSubtitle>or use email</LoginSubtitle>
          <LoginInputContainer>
            <p>Email</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="email"
              {...register('email', {
                required: true
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>email needed</InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="password"
              type="password"
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>password needed</InputErrorMessage>
            )}
          </LoginInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Sign In
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
