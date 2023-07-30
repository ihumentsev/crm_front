// import css from '../Home/Home.module.css';
// import { useNavigate } from 'react-router-dom';
// import Btn from 'components/Btn/Btn';
import OrderItem from 'components/OrderItem/OrderItem';
import { BtnWraper, ContentBox } from './Production.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProductionItem from 'components/ProductionItem/ProductionItem';

export default function Production() {
  const [developProducts, setDevelopProducts] = useState([]);
console.log(developProducts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4444/products?status=на виробництво'
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
      <BtnWraper>
        <div>Виробництво</div>
        {/* <button className="btn">Нове замовлення</button> */}
      </BtnWraper>
      <ContentBox>
        <ul className="list-header">
          <li className="item-header">
            <label htmlFor="all"> Вибрати всі</label>
            <input className="check-header" type="checkbox" id="all" />
          </li>
          <li className="item-header">№ в-ва</li>
          <li className="item-header">Створено</li>
          {/* <li className="item-header">Макет</li> */}
          <li className="item-header">Товар</li>
          <li className="item-header">Опис</li>
          <li className="item-header">Кількість</li>
          <li className="item-header">№ замовлення</li>
          <li className="item-header">Замовник</li>
          <li className="item-header">Менеджер</li>
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
