import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutApp from '../view/Layouts/LayoutApp'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutApp />}>
          <Route path="/" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
