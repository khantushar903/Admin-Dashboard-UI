import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const MainLayout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(
    window.matchMedia('(min-width: 992px)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 992px)')

    const handleChange = (e) => {
      setSidebarVisible(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <div className="d-flex">
      <Sidebar
        visible={sidebarVisible}
        setVisible={setSidebarVisible}
      />

      <div className="flex-grow-1 d-flex flex-column">
        <Header setSidebarVisible={setSidebarVisible} />

        <main className="p-4 flex-grow-1">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
