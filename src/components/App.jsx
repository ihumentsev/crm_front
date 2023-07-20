import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Orders = lazy(() => import('pages/Home/Orders'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/clients" element={<div>clients</div>} />
          <Route path="/analytic" element={<div>analytic</div>} />
          <Route path="/production" element={<div>production</div>} />
          <Route path="/chat" element={<div>chat</div>} />
          <Route path="/options" element={<div>options</div>} />
          <Route path="*" element={<Orders />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
