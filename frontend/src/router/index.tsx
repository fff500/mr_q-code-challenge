import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

const SymbolsView = lazy(() => import('@/components/SymbolsView'));
const StatementsView = lazy(() => import('@/components/StatementsView'));
const ProfileView = lazy(() => import('@/components/ProfileView'));

const Layout = () => (
  <Suspense fallback={<div>Content is loading...</div>}>
    <Outlet />
  </Suspense>
);

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<SymbolsView />} />
      <Route path="profile" element={<ProfileView />} />
      <Route path="statements" element={<StatementsView />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
);

export default Router;
