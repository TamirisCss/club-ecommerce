import { FunctionComponent } from 'react'
import { LoadingContainer } from './loading.styles'
import { PacmanLoader } from 'react-spinners'

const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <PacmanLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
