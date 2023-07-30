import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Clients from 'pages/Clients/Clients';
import Production from 'pages/Production/Production';
const Orders = lazy(() => import('pages/Home/Orders'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/analytic" element={<div>analytic</div>} />
          <Route path="/production" element={<Production/>} />
          <Route path="/chat" element={<div>chat</div>} />
          <Route path="/options" element={<div>options</div>} />
          <Route path="*" element={<Orders />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
