import { FunctionComponent } from 'react'

interface AppProps {
  message?: string
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return <div>App</div>
}

export default App
