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

import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

import { auth, db, googleProvider } from '../../config/firebase.config'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginForm>()

  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const useCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log(useCredentials)
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' })
      }
      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' })
      }
    }
  }

  const handleSignInWithGooglePress = async () => {
    try {
      const useCredentials = await signInWithPopup(auth, googleProvider)

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', useCredentials.user.uid)
        )
      )
      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        const firstName = useCredentials.user.displayName?.split(' ')[0]
        const lastName = useCredentials.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: useCredentials.user.uid,
          email: useCredentials.user.email,
          firstName,
          lastName,
          provider: 'google'
        })
      }
    } catch (error) {}
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>sign in</LoginHeadline>
          <CustomButton
            startIcon={<BsGoogle size={18} />}
            onClick={handleSignInWithGooglePress}>
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
            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>email not found</InputErrorMessage>
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
            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>Invalid password</InputErrorMessage>
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
