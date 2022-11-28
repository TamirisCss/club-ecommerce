import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCheckCircle, AiOutlineHome } from 'react-icons/ai'

//Components
import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.component'

//Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-confirmation.style'

const PaymentConfirmationPage: FunctionComponent = () => {
  const navigate = useNavigate()

  const handleGoToHomePage = () => {
    navigate('/')
  }

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          <AiOutlineCheckCircle size={120} style={{ color: 'green' }} />
          <p>Success Purchase</p>
          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePage}>
            Go to Home Page
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
