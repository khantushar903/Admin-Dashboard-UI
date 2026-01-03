import {
  CAvatar,
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilEnvelopeClosed,
  cilPhone,
  cilCalendar,
  cilLocationPin,
  cilSettings,
} from '@coreui/icons'
import InfoItem from '../common/InfoItem'


const Profile = () => {

  const user = {
    fullName: 'Graziele Lopes',
    email: 'graziele@gmail.com',
    phone: '(11) 9141-8888',
    dob: '05/02/1985',
    city: 'São Paulo',
    address: 'Avenida Giovanni 187',
    plan: 'Pro Plan',
    startDate: '27 Jan 2025',
  }

  return (
    <CContainer fluid className="p-0">
      {/* Top header section */}
      <div
        className="px-4 py-5"
        style={{
          background: 'linear-gradient(90deg, #7CF5E3, #C4F7A1)',
          borderRadius: '12px',
        }}
      >
        <CRow className="align-items-center">
          <CCol md={8} className="d-flex align-items-center gap-3">
            <CAvatar size="xl" src="https://plus.unsplash.com/premium_vector-1727955579176-073f1c85dcda?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div>
              <h4 className="mb-1">
                {user.fullName}{' '}
                <CBadge color="success">Verified Profile</CBadge>
              </h4>
              <small className="text-muted">
                Start Date: {user.startDate}
              </small>
            </div>
          </CCol>

          <CCol md={4} className="text-md-end mt-3 mt-md-0">
            <CButton color="light" variant="outline">
              <CIcon icon={cilSettings} className="me-2" />
              Edit Profile
            </CButton>
          </CCol>
        </CRow>
      </div>

      {/* Profile details */}
      <CContainer className="mt-4">
        <CCard>
          <CCardBody>
            <h5 className="mb-4">Profile details</h5>

            <CRow className="gy-4">
              <CCol md={4}>
                <InfoItem icon={cilUser} label="Full Name" value={user.fullName} />
              </CCol>

              <CCol md={4}>
                <InfoItem
                  icon={cilEnvelopeClosed}
                  label="Email"
                  value={user.email}
                  badge="Verified"
                />
              </CCol>

              <CCol md={4}>
                <InfoItem icon={cilCalendar} label="Date of birth" value={user.dob} />
              </CCol>

              <CCol md={4}>
                <InfoItem
                  icon={cilPhone}
                  label="Number"
                  value={user.phone}
                  badge="Verified"
                />
              </CCol>

              <CCol md={4}>
                <InfoItem icon={cilSettings} label="Plan" value={user.plan} />
              </CCol>

              <CCol md={6}>
                <InfoItem icon={cilLocationPin} label="Address" value={user.address} />
              </CCol>

              <CCol md={6}>
                <InfoItem icon={cilLocationPin} label="City" value={user.city} />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </CContainer>
  )
}

export default Profile
