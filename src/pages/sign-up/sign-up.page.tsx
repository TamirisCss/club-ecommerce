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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpForm>()

  const handleSubmitPress = (data: SignUpForm) => {
    console.log({ data })
  }
  console.log({ errors })

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Create your account</SignUpHeadline>

          <SignUpInputContainer>
            <p>Name</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="type your name"
              {...register('name', { required: true })}
            />
            {errors?.name?.type === 'required' && <p>name required</p>}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Second Name</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="second name"
              {...register('lastName', { required: true })}
            />
            {errors?.lastName?.type === 'required' && <p>last Name required</p>}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="type your email"
              {...register('email', { required: true })}
            />
            {errors?.email?.type === 'required' && <p>email required</p>}
            {errors?.email?.type === 'validate' && <p>use a valid email</p>}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="type your password"
              type="password"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && <p>password required</p>}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirm your Password</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="confirm your password"
              type="password"
              {...register('password', { required: true })}
            />
            {errors?.passwordConfirmation?.type === 'required' && (
              <p>confirmation of password is required</p>
            )}
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
