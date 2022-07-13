import React from 'react'
import { LayoutProps } from '../../models/layout'

const LayOutAdmin = ({children}: LayoutProps) => {
  return (
    <div>
        <div className='grid grid-cols-[200px,auto]'>
            <div>
                Sidebar
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default LayOutAdmin