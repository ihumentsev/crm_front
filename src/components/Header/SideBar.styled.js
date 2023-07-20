import { NavLink } from 'react-router-dom/dist';
import styled from 'styled-components';
import icon from '../../images/dashboard.svg';
import deals from '../../images/deals.svg';
import chat from '../../images/chat.svg';
import email from '../../images/email.svg';
import tasks from '../../images/tasks.svg';
import settings from '../../images/settings.svg';
import contacts from '../../images/contacts-active.svg';

const SideBarBox = styled.div`
  height: 100%;
  z-index: 100;
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
`;
const NavWraper = styled.nav`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--secondary-white, #fff);
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
  width: 180px;
  height: 100%;
  flex-shrink: 0;
  /* padding: 24px; */
  & .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    /* padding: 17px 24px; */
    color: #109cf1;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-bottom: solid 2px var(--divider, #ebeff2);
    /* margin-bottom: 20px; */
  }
  & .link-wraper {
    padding: 30px 10px;
  }
  & .head {
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 34px;
    margin-bottom: 20px;
  }
  & .order {
    background-image: url(${tasks});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 34px;
    margin-bottom: 20px;
  }
  & .clients {
    background-image: url(${contacts});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 34px;
    margin-bottom: 20px;
  }
  & .analytic {
    background-image: url(${email});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 34px;
    margin-bottom: 20px;
  }
  & .production {
    background-image: url(${deals});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 34px;
    margin-bottom: 20px;
  }
  & .chat {
    background-image: url(${chat});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 34px;
    margin-bottom: 20px;
  }
  & .options {
    background-image: url(${settings});
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 34px;
    margin-bottom: 20px;
  }
`;
const ImageLogo = styled.img`
  width: 50px;
`;

const PageLink = styled(NavLink)`
  color: var(--secondary-dark-blue, #334d6e);
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.13px;

  text-decoration: none;
  &:hover {
    color: var(--main-accent-blue, #109cf1);
  }
`;
export { SideBarBox, NavWraper, ImageLogo, PageLink };
