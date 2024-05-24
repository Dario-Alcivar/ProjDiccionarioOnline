import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>        
        <span className="ms-1">&copy; 2024</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">By Grupo 2 - Software 9-4</span>        
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
