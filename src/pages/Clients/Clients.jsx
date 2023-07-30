// import css from '../Home/Home.module.css';
// import { useNavigate } from 'react-router-dom';
// import Btn from 'components/Btn/Btn';
import OrderItem from 'components/OrderItem/OrderItem';
import {
  BtnWraper,
  ContentBox,
} from './Clients.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Clients() {
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get('http://localhost:4444/orders');
       setOrders(response.data);
     } catch (error) {
       console.error('Ошибка при получении данных', error);
     }
   };

   fetchData();
  }, []);


  // const navigate = useNavigate();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   navigate('/tweets', { replace: true });
  // };

  return (
    <>
      <BtnWraper>
        <div>Клієнти</div>
        <button className="btn">Новий клієнт</button>
      </BtnWraper>
      <ContentBox>
        <ul className="list-header">
          <li className="item-header">
            <label htmlFor="all"> Вибрати всі</label>
            <input className="check-header" type="checkbox" id="all" />
          </li>

          <li className="item-header">ФІО</li>
          <li className="item-header">Email</li>
          <li className="item-header">Телефон</li>
          <li className="item-header">Компанія</li>
          <li className="item-header">Кількість замовлень</li>
          <li className="item-header">Останнє замовлення</li>
          <li className="item-header">Створено</li>
          <li className="item-header">Менеджер</li>
        </ul>

        <ul className="order-list">
          {orders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </ul>
      </ContentBox>
    </>
  );
}
