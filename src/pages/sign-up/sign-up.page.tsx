import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

import CustomButton from '../../components/custom-button/custom-button.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../config/firebase.config'

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
    watch,
    formState: { errors }
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        firstName: data.name,
        lastName: data.lastName,
        email: userCredentials.user.email
      })
    } catch (error) {
      console.log(error)
    }
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
              hasError={!!errors?.name}
              placeholder="type your name"
              {...register('name', { required: true })}
            />
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>name required</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Second Name</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="second name"
              {...register('lastName', { required: true })}
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>last Name required</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="type your email"
              {...register('email', { required: true })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>email required</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>use a valid email</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Password</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="type your password"
              type="password"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>password required</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirm your Password</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              placeholder="confirm your password"
              type="password"
              {...register('password', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />
            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                confirmation of password is required
              </InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                confirmation of password is not the same
              </InputErrorMessage>
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
