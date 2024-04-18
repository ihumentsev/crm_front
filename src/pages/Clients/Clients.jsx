import { ContentBox, ListItem } from './Clients.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from 'components/Header/Header';
import ClientItem from 'components/ClientItem/ClientItem';

export default function Clients() {
  const [clients, setClients] = useState([]);
  
console.log(clients);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://back-crm-fb781da88f45.herokuapp.com/clients`);
        // const response = await axios.get(`http://localhost:4545/clients`);
        setClients(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Header
        textHead="Клієнти"
        textBtn="Додати нового клієнта"
        handler={() => console.log('btn')}
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
          {/* <li className="item-header">Телефон</li> */}
          <li className="item-header">Компанія</li>
          <li className="item-header">Кількість замовлень</li>
          {/* <li className="item-header">Останнє замовлення</li> */}
          <li className="item-header">Створено</li>
          <li className="item-header">Менеджер</li>
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
