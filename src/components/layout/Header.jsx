import {
  CNavbar,
  CNavbarBrand,
  CButton,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'

const Header = ({ setSidebarVisible }) => {
  const navigate = useNavigate()

  return (
    <CNavbar className="border-bottom px-4 bg-white">
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-link d-lg-none text-decoration-none"
          onClick={() => setSidebarVisible(true)}
        >
          ☰
        </button>

        <CNavbarBrand className="fw-bold mb-0">
          Admin Dashboard
        </CNavbarBrand>
      </div>

      <div className="ms-auto d-flex gap-2">
        <CButton
          size="sm"
          color="secondary"
          onClick={() => navigate('/profile')}
        >
          Profile
        </CButton>

        <CButton size="sm" color="danger">
          Logout
        </CButton>
      </div>
    </CNavbar>
  )
}

export default Header
