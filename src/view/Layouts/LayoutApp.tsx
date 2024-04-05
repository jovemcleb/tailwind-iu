import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Components/Sidebar';

export default function LayoutApp() {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Sidebar />
      <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-4 lg:pb-12 lg:pt-8">
        <Outlet />
      </main>
    </div>
  );
}
