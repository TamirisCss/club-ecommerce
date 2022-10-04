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
          <div>button</div>
          <LoginSubtitle>or use email</LoginSubtitle>
          <LoginInputContainer>email input</LoginInputContainer>
          <LoginInputContainer>password input</LoginInputContainer>
          <div>button</div>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
