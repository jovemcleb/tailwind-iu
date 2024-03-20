import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LayoutApp from '../view/Layouts/LayoutApp';
import { Main } from '../view/Pages/Main';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutApp />}>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
