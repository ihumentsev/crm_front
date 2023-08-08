
// import { useNavigate } from 'react-router-dom';

import OrderItem from 'components/OrderItem/OrderItem';
import { ContentBox } from './Orders.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ModalPortal from 'components/Portal/ModalPortal';
import OrderModal from 'components/Modal/OrderModal';
import Header from 'components/Header/Header';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(orders);


  const ToggelModal = () => {
    setShowModal(!showModal);
  };
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
      <Header textHead = "Замовлення" textBtn="Нове замовлення" handler={ToggelModal} />
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
      {showModal && (
        <ModalPortal>
          <OrderModal toggelModal={ToggelModal} />
        </ModalPortal>
      )}
    </>
  );
}
