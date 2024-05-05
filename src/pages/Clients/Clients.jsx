import { ContentBox, ListItem } from './Clients.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from 'components/Header/Header';
import ClientItem from 'components/ClientItem/ClientItem';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [active, setActive] = useState(false);
  const [sort, setSort] = useState("newest");
  const [selectedManager, setSelectedManager] = useState("");
  const [search, setSearch] = useState("")
  
console.log(clients);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("selectedManager", selectedManager);
        const response = await axios.get(`https://back-crm-fb781da88f45.herokuapp.com/clients?manager=${selectedManager}&sort=${sort}&search=${search}`);
        // const response = await axios.get(`http://localhost:4545/clients?manager=${selectedManager}&sort=${sort}&search=${search}`);
        setClients(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };

    fetchData();
  }, [sort, selectedManager, search]);

const filterHandler = () =>{
  setActive(!active)
};

const handleSortClick = () => {
  setSort(sort === 'newest' ? 'oldest' : 'newest');
};

const handleManagerClick = (manager) => {
  setSelectedManager(manager);
  setActive(!active)
};
  return (
    <>
      <Header
        textHead="Клієнти"
        textBtn="Додати нового клієнта"
        handler={() => console.log('btn')}
        inputValue={search} 
        setValue={setSearch}
      />
      
      <ContentBox>
        
        <ListItem className="list-header">
          <li className="item-header">
            <label htmlFor="all"> Вибрати всі</label>
            <input className="check-header" type="checkbox" id="all" />
          </li>
          <li className="item-header">ОР</li>
          <li className="item-header">ФІО</li>
          <li className="item-header">Email</li>
          <li className="item-header">Компанія</li>
          <li className="item-header">Кількість замовлень</li>
          <li className="item-header filter" onClick={handleSortClick}>Створено
          <div>
            <svg className={`filter-icon ${sort === 'oldest' ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 7" fill="none">
                <path d="M4 7L0 0L8 7.0663e-07L4 7Z" fill={sort === 'oldest' ? '#2173EF' : '#C3D9F9'}/>
            </svg>
          </div>
          </li>
          <li className="item-header filter" onClick={filterHandler}>Менеджер
            <svg className={ `filter-icon  ${selectedManager !== "" ?"active" : ""}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 7" fill="none">
                <path d="M4 7L0 0L8 7.0663e-07L4 7Z" fill={selectedManager !== "" ? '#2173EF' : '#C3D9F9'}/>
            </svg>
            <div className={`dropdown ${active ? "active" : ""}` }>
              <ul className='list'>
                <li onClick={() => handleManagerClick("") }>Зкинути</li>
                <li onClick={() => handleManagerClick('Игуменцев Андрей')}>Игуменцев Андрей</li>
                <li onClick={() => handleManagerClick('Фролова Антонина')}>Фролова Антонина</li>
                <li onClick={() => handleManagerClick('не призначено')}>Без менеджера</li>
              </ul>
            </div>
          </li>
        </ListItem>

        <ul className="order-list">
          {clients.map(client => (
            <ClientItem key={client.id} client={client} />
          ))}
        </ul>
      </ContentBox>
    </>
  );
}
