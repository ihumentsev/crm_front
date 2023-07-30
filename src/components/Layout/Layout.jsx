import { SideBar } from 'components/Header/SideBar';
import { Outlet } from 'react-router-dom';
import { ContentWraper, MainBox } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <ContentWraper>
        <SideBar />
        <MainBox>
          <Outlet />
        </MainBox>
      </ContentWraper>
    </>
  );
}
