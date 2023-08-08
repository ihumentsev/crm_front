import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Clients from 'pages/Clients/Clients';
import Production from 'pages/Production/Production';
import Dashboard from 'pages/Dashboard/Dashboard';
import Analitics from 'pages/Analitics/Analitics';
import Chat from 'pages/Chat/Chat';
const Orders = lazy(() => import('pages/Home/Orders'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/analytic" element={<Analitics/>} />
          <Route path="/production" element={<Production/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/options" element={<div>options</div>} />
          <Route path="*" element={<Orders />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
