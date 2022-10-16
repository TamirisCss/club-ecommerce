import { FunctionComponent, ReactNode } from 'react'

import { InputErrorMessageContainer } from './input-error-message.style'

type InputErrorMessageProps = {
  children: React.ReactNode // 👈️ added type for children
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
