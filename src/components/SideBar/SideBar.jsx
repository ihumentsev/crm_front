
import { NavWraper, PageLink, SideBarBox } from './SideBar.styled';

export const SideBar = () => {
  // const [filter, setFilter] = useState('all');
  // const dispatch = useDispatch();

  // const filterHandler = e => {
  //   setFilter(e.target.value);
  // };

  // useEffect(() => {
  //   dispatch(filterUser(filter));
  // }, [dispatch, filter]);

  return (
    <SideBarBox>
      <NavWraper>
        <div className="logo "> AI CRM</div>
        <div className="link-wraper">
          <PageLink end to="/">
            <div className="head link-container">Головна</div>
          </PageLink>

          <PageLink end to="/orders">
            <div className="order link-container">Замовлення</div>
          </PageLink>

          <div className="clients link-container">
            <PageLink end to="/clients">
              Клієнти
            </PageLink>
          </div>
          <div className="analytic link-container">
            <PageLink end to="/analytic">
              Аналітика
            </PageLink>
          </div>
          <div className="production link-container">
            <PageLink end to="/production">
              Виробництво
            </PageLink>
          </div>
          <div className="chat link-container">
            <PageLink end to="/chat">
              Чат
            </PageLink>
          </div>
          <div className="options link-container">
            <PageLink end to="/options">
              Налаштування
            </PageLink>
          </div>
        </div>
      </NavWraper>
    </SideBarBox>
  );
};
