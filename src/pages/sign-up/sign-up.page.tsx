import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'

import {
  SignUpContainer,
  SignUpHeadline,
  SignUpContent,
  SignUpInputContainer
} from './sign-up.style'

interface SignUpForm {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<SignUpForm>()

  const handleSubmitPress = (data: SignUpForm) => {
    console.log(data)
  }

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Create your account</SignUpHeadline>

          <SignUpInputContainer>
            <p>Name</p>
            <CustomInput
              placeholder="type your name"
              {...register('name', { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Second Name</p>
            <CustomInput
              placeholder="second name"
              {...register('lastName', { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              placeholder="type your email"
              {...register('email', { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Password</p>
            <CustomInput
              placeholder="type your password"
              type="password"
              {...register('password', { required: true })}
            />
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirm your Password</p>
            <CustomInput
              placeholder="confirm your password"
              type="password"
              {...register('password', { required: true })}
            />
          </SignUpInputContainer>

          <CustomButton
            onClick={() => handleSubmit(handleSubmitPress)()}
            startIcon={<FiLogIn size={18} />}>
            Sign Up
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
