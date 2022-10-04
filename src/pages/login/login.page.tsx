import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

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
            <CustomInput placeholder="email" />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Password</p>
            <CustomInput placeholder="password" />
          </LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={18} />}>
            Login in
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
