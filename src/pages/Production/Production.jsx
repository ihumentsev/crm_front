// import css from '../Home/Home.module.css';
// import { useNavigate } from 'react-router-dom';
// import Btn from 'components/Btn/Btn';
import { ContentBox } from './Production.styled';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProductionItem from 'components/ProductionItem/ProductionItem';
import Header from 'components/Header/Header';

export default function Production() {
  const [developProducts, setDevelopProducts] = useState([]);
  console.log(developProducts);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_BACK}/products`
      );
      setDevelopProducts(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 10 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [fetchData]);

  const handleForceRefresh = () => {
    fetchData();
  };

  return (
    <>
      <Header
        textHead="Виробництво"
        textBtn="Оновити данні"
        handler={handleForceRefresh}
      />
      <ContentBox>
        <ul className="list-header">
          <li className="item-header">
            <label htmlFor="all"> Вибрати всі</label>
            <input className="check-header" type="checkbox" id="all" />
          </li>
          <li className="item-header">№ в-ва</li>
          <li className="item-header">Створено</li>
          <li className="item-header">Товар</li>
          <li className="item-header">Статус</li>
          <li className="item-header">Замовник</li>
          <li className="item-header">Пріорітет</li>
          <li className="item-header">Додатково</li>
        </ul>

        <ul className="order-list">
          {developProducts
            .filter(order => order.status_develop !== 'очікує підтвердження')
            .map(order => (
              <ProductionItem
                products={order}
                key={order.id}
                ordersUpdate={fetchData}
              />
            ))}
        </ul>
      </ContentBox>
    </>
  );
}
