
import { NavWraper, PageLink, SideBarBox } from './SideBar.styled';

export const SideBar = () => {
 

  return (
    <SideBarBox>
      <NavWraper>
        <div className="logo "> AI CRM</div>
        <div className="link-wraper">
          <PageLink end to="/" className="nav-container">
            <div className="head link-container">Головна</div>
          </PageLink>

          <PageLink end to="/orders">
            <div className="order link-container">Замовлення</div>
          </PageLink>

         
            <PageLink end to="/clients">
            <div className="clients link-container">Клієнти</div> 
            </PageLink>
        
          
            <PageLink end to="/analytic">
            <div className="analytic link-container">Аналітика</div>
              
            </PageLink>
         
          
            <PageLink end to="/production">
            <div className="production link-container">Виробництво</div> 
            </PageLink>
          
          
            <PageLink end to="/chat">
            <div className="chat link-container">Чат</div>
            </PageLink>
          
          
            <PageLink end to="/options">
            <div className="options link-container">Налаштування</div>
            </PageLink>
          
        </div>
      </NavWraper>
    </SideBarBox>
  );
};
