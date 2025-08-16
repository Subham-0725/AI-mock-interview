
import { Outlet } from 'react-router-dom'

const generate = () => {
  return (
    <div className='flex-col md:px-12'>
      <Outlet />
    </div>
  )
}

export default generate
