import {
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormSwitch,
  CButton,
} from '@coreui/react'

const Settings = () => {
  return (
    <>
      <h2 className="mb-4">Settings</h2>

      <CCard className="shadow-sm" style={{ maxWidth: '500px' }}>
        <CCardBody>
          <CForm>
            <CFormInput
              label="Admin Name"
              placeholder="Enter name"
              className="mb-3"
            />

            <CFormInput
              label="Email"
              type="email"
              placeholder="Enter email"
              className="mb-3"
            />

            <CFormSwitch
              label="Enable notifications"
              className="mb-3"
            />

            <CButton color="primary">
              Save Changes
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Settings
