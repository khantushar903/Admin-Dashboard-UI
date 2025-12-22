import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import {
  CWidgetStatsA,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import { CChartLine, CChartBar } from '@coreui/react-chartjs'

const StatCard = ({
  title,
  value,
  percentage,
  color = 'primary',
  chartType = 'line', // 'line' | 'bar'
  chartData,
  chartOptions,
}) => {
  const ChartComponent = chartType === 'bar' ? CChartBar : CChartLine

  return (
    <CWidgetStatsA
      className="mb-4"
      color={color}
      title={title}
      value={
        <>
          {value}{' '}
          {percentage && (
            <span className="fs-6 fw-normal">
              ({percentage} <CIcon icon={cilArrowTop} />)
            </span>
          )}
        </>
      }
      action={
        <CDropdown alignment="end">
          <CDropdownToggle
            color="transparent"
            caret={false}
            className="p-0"
          >
            <CIcon icon={cilOptions} className="text-white" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem disabled>Disabled</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
      chart={
        <ChartComponent
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          data={chartData}
          options={chartOptions}
        />
      }
    />
  )
}

export default StatCard
