import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function Layout(props) {
  return (
    <div className='flex h-screen overflow-hidden'>

      <aside className='w-[250px] h-screen sticky top-0 border-r border-[#d3d3d3a6]'>
        <Sidebar />
      </aside>

      <div className='flex-1 flex flex-col h-screen'>

        <div className='sticky top-0 z-10'>
          <Navbar />
        </div>

        <div className='flex-1 overflow-y-auto'>
          {props.children}
        </div>

      </div>
    </div>
  )
}

export default Layout