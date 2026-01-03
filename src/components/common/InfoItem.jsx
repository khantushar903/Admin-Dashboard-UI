import { CBadge } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const InfoItem = ({ icon, label, value, badge }) => {
  return (
    <div className="d-flex gap-2">
      <CIcon icon={icon} className="mt-1" />
      <div>
        <small className="text-muted">{label}</small>
        <div>
          {value}
          {badge && (
            <CBadge color="success" className="ms-2">
              {badge}
            </CBadge>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoItem
