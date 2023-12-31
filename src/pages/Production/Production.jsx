// import css from '../Home/Home.module.css';
// import { useNavigate } from 'react-router-dom';
// import Btn from 'components/Btn/Btn';
import {  ContentBox } from './Production.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProductionItem from 'components/ProductionItem/ProductionItem';
import Header from 'components/Header/Header';

export default function Production() {
  const [developProducts, setDevelopProducts] = useState([]);
console.log(developProducts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://back-crm-fb781da88f45.herokuapp.com/products?status=на виробництво'
        );
        setDevelopProducts(response.data);
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
      <Header
        textHead="Виробництво"
        textBtn="Створити нову задачу"
        handler={() => console.log('btn')}
      />
      <ContentBox>
        <ul className="list-header">
          <li className="item-header">
            <label htmlFor="all"> Вибрати всі</label>
            <input className="check-header" type="checkbox" id="all" />
          </li>
          <li className="item-header">№ в-ва</li>
          <li className="item-header">Створено</li>
          <li className="item-header">№ замовлення</li>
          <li className="item-header">Товар</li>
          <li className="item-header">Опис</li>
          <li className="item-header">Кількість</li>
          <li className="item-header">Статус</li>
          <li className="item-header">Замовник</li>
          {/* <li className="item-header">Менеджер</li> */}
          <li className="item-header">Пріорітет</li>
          {/* <li className="item-header">Статус</li> */}
          {/* <li className="item-header">Вартість</li>
          <li className="item-header">Менеджер</li> */}
        </ul>

        <ul className="order-list">
          {developProducts.map(order => (
            <ProductionItem order={order} />
          ))}
        </ul>
      </ContentBox>
    </>
  );
}
