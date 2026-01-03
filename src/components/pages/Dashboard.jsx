import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowTop,
  cilDollar,
  cilCart,
  cilUser,
  cilSpeedometer,
  cilChartPie,
  cilEnvelopeOpen,
  cilBasket,
} from '@coreui/icons'
import { CRow, CCol, CWidgetStatsA, CWidgetStatsC } from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'

const Dashboard = () => {
  return (
    <div>
      <CRow>
        {/* Widget 1: Revenue */}
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4 p-2"
            color="primary"
            title={<span className="fs-5 fw-bold">Revenue</span>}
            value={
              <div className="d-flex align-items-center gap-2">
                <CIcon icon={cilDollar} style={{ width: '1.5em', height: '1.5em' }} />
                <span className="fs-2 fw-bold">9,000</span>
                <span className="fs-6 fw-normal">(40.9% <CIcon icon={cilArrowTop} />)</span>
              </div>
            }
            chart={
              <CChartLine
                className="mt-2"
                style={{ height: '50px' }}
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                  datasets: [
                    {
                      label: 'Revenue',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: '#ffffff',
                      data: [65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false, scales: { x: { display: false }, y: { display: false } } }}
              />
            }
          />
        </CCol>

        {/* Widget 2: Orders */}
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4 p-2"
            color="warning"
            title={<span className="fs-5 fw-bold">Orders</span>}
            value={
              <div className="d-flex align-items-center gap-2">
                <CIcon icon={cilCart} style={{ width: '1.5em', height: '1.5em' }} />
                <span className="fs-2 fw-bold">1,200</span>
                <span className="fs-6 fw-normal">(12% <CIcon icon={cilArrowTop} />)</span>
              </div>
            }
            chart={
              <CChartLine
                className="mt-2"
                style={{ height: '50px' }}
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                  datasets: [
                    {
                      label: 'Orders',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: '#ffffff',
                      data: [12, 19, 3, 5, 2, 3, 7],
                    },
                  ],
                }}
                options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false, scales: { x: { display: false }, y: { display: false } } }}
              />
            }
          />
        </CCol>

        {/* Widget 3: Users */}
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4 p-2"
            color="danger"
            title={<span className="fs-5 fw-bold">Users</span>}
            value={
              <div className="d-flex align-items-center gap-2">
                <CIcon icon={cilUser} style={{ width: '1.5em', height: '1.5em' }} />
                <span className="fs-2 fw-bold">320</span>
                <span className="fs-6 fw-normal">(5% <CIcon icon={cilArrowTop} />)</span>
              </div>
            }
            chart={
              <CChartLine
                className="mt-2"
                style={{ height: '50px' }}
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                  datasets: [
                    {
                      label: 'Users',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: '#ffffff',
                      data: [5, 9, 7, 10, 8, 12, 6],
                    },
                  ],
                }}
                options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false, scales: { x: { display: false }, y: { display: false } } }}
              />
            }
          />
        </CCol>

        {/* Widget 4: Performance */}
        <CCol sm={3}>
          <CWidgetStatsA
            className="mb-4 p-2"
            color="success"
            title={<span className="fs-5 fw-bold">Performance</span>}
            value={
              <div className="d-flex align-items-center gap-2">
                <CIcon icon={cilSpeedometer} style={{ width: '1.5em', height: '1.5em' }} />
                <span className="fs-2 fw-bold">89%</span>
                <span className="fs-6 fw-normal">(10% <CIcon icon={cilArrowTop} />)</span>
              </div>
            }
            chart={
              <CChartLine
                className="mt-2"
                style={{ height: '50px' }}
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                  datasets: [
                    {
                      label: 'Performance',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: '#ffffff',
                      data: [75, 80, 70, 85, 90, 88, 89],
                    },
                  ],
                }}
                options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false, scales: { x: { display: false }, y: { display: false } } }}
              />
            }
          />
        </CCol>
      </CRow>

      <CRow>
        {/* Widget 5 */}
        <CCol xs={6} sm={3}>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilChartPie} height={36} />}
            color="info"
            title="Market Share"
            value="75%"
            progress={{ color: 'success', value: 75 }}
          />
        </CCol>

        {/* Widget 6 */}
        <CCol xs={6} sm={3}>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilEnvelopeOpen} height={36} />}
            color="success"
            title="Messages"
            value="1,240"
            progress={{ color: 'info', value: 60 }}
          />
        </CCol>

        {/* Widget 7 */}
        <CCol xs={6} sm={3}>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilBasket} height={36} />}
            color="primary"
            title="Sales"
            value="$8,450"
            progress={{ color: 'danger', value: 45 }}
          />
        </CCol>

        {/* Widget 8 */}
        <CCol xs={6} sm={3}>
          <CWidgetStatsC
            className="mb-3"
            icon={<CIcon icon={cilUser} height={36} />}
            color="info"
            title="New Users"
            value="320"
            progress={{ color: 'primary', value: 80 }}
          />
        </CCol>
      </CRow>
    </div>
  )
}

export default Dashboard
