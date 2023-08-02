// import css from '../Home/Home.module.css';
// import { useNavigate } from 'react-router-dom';
// import Btn from 'components/Btn/Btn';
import OrderItem from 'components/OrderItem/OrderItem';
import { BtnWraper, ContentBox } from './Orders.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://back-crm-fb781da88f45.herokuapp.com/orders'
        );
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
        <div>Замовлення</div>
        <button className="btn">Нове замовлення</button>
      </BtnWraper>
      <ContentBox>
        <ul className="list-header">
          <li className="item-header">
            <label htmlFor="all"> Вибрати всі</label>
            <input className="check-header" type="checkbox" id="all" />
          </li>

          <li className="item-header">№ замовлення</li>
          <li className="item-header">Замовник</li>
          <li className="item-header">Джерело</li>
          <li className="item-header">Створено</li>
          <li className="item-header">Статус</li>
          <li className="item-header">Продукція</li>
          <li className="item-header">Вартість</li>
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
