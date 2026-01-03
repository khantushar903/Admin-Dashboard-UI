import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './components/pages/Dashboard'
import Users from './components/pages/Users'
import Settings from './components/pages/Settings'
import Profile from './components/pages/Profile'


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
