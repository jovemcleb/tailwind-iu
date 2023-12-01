import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Components/Sidebar'

export default function LayoutApp() {
  return (
    <div className="grid-cols-app grid min-h-screen">
      <Sidebar />
      <main className="px-4 pb-12 pt-8">
        <Outlet />
      </main>
    </div>
  )
}
