import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthGuard } from './guards'
import { PrivateRoutes, PublicRoutes } from './model'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path='*' element={<>NOT FOUND</>} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}`} element={<Dashboard />} />
          </Route>         
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
