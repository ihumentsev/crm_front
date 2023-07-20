import { SideBar } from 'components/Header/SideBar';
import { Outlet } from 'react-router-dom';
import { ContentWraper, MainBox } from './Layout.styled';
import Container from 'components/Container/Container';

export default function Layout() {
  return (
    <>
      {/* <Container> */}
      <ContentWraper>
        <SideBar />
        <MainBox >
          <Outlet />
        </MainBox>
      </ContentWraper>
      {/* </Container> */}
    </>
  );
}
