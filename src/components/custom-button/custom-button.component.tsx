import { ReactNode } from 'react'

import { CustomButtonContainer, IconContainer } from './custom-button.style'

interface CustomButtonProps {
  children: ReactNode
  startIcon?: ReactNode
}

const CustomButton = ({ children, startIcon }: CustomButtonProps) => {
  return (
    <CustomButtonContainer>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
