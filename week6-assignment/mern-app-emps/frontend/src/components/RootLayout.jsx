import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='min-h-screen bg-gray-100'>
        <div className='mx-auto max-w-6xl p-10 sm:p-16'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default RootLayout