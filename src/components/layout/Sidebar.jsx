import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
  CNavTitle,
} from '@coreui/react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Settings } from 'lucide-react'

const Sidebar = ({ visible, setVisible }) => {
  return (
    <CSidebar
      breakpoint="lg"
      visible={visible}
      onVisibleChange={setVisible}
      className="border-end"
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand className="fw-bold text-decoration-none">
          Admin Panel
        </CSidebarBrand>
      </CSidebarHeader>

      <CSidebarNav>
        <CNavTitle>Navigation</CNavTitle>

        <CNavItem>
          <NavLink to="/" className="nav-link d-flex align-items-center gap-2">
            <LayoutDashboard size={18} className="nav-icon" />
            Dashboard
          </NavLink>
        </CNavItem>

        <CNavItem>
          <NavLink to="/users" className="nav-link d-flex align-items-center gap-2">
            <Users size={18} className="nav-icon" />
            Users
          </NavLink>
        </CNavItem>

        <CNavItem>
          <NavLink to="/settings" className="nav-link d-flex align-items-center gap-2">
            <Settings size={18} className="nav-icon" />
            Settings
          </NavLink>
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  )
}

export default Sidebar
