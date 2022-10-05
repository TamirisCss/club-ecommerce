import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'

import {
  LoginContainer,
  LoginHeadline,
  LoginContent,
  LoginSubtitle,
  LoginInputContainer
} from './login.style'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

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
              {...register('email', { required: true })}
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="password"
              {...register('password', { required: true })}
            />
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
