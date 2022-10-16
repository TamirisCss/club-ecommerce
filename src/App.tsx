import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
