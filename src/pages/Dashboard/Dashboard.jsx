import SalesChart from 'components/Chart/SalesChart';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import {
  CartWraper,
  ChartWraper,
  ContentBox,
  MenagerWraper,
  SectionWraper,
  YearChartWraper,
} from './Dashboard.styled';
import YearChart from 'components/Chart/YearChart';
import Header from 'components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimatedCounter from 'components/AnimatedCounter/AnimatedCounter';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date());
console.log(clients);
  // let ordersSum = 0;
  // let allOrders = 0;
  // orders.forEach(order => {
  //   console.log(order);
  //   ordersSum += Number(order.total_amount);
  //   allOrders += 1;
  // });

  const actualSalesForYear = orders.reduce((data, order) => {
    const orderYear = new Date(order.createdAt).getFullYear();
    if (orderYear === selectedYear.getFullYear()) {
      data.totalSales += Number(order.total_amount);
      data.totalOrders += 1;
    }
    return data;
  }, { totalSales: 0, totalOrders: 0 });
  const salesForYear = actualSalesForYear.totalSales;
  const numberOfOrdersForYear = actualSalesForYear.totalOrders;
  console.log(actualSalesForYear);
// const ordersSumFormated = ordersSum.toLocaleString('en-US', {
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2,
// });
//  console.log(ordersSumFormated); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4545/onlyorders'
        );
        setOrders(response.data);
         const res = await axios.get(
           'http://localhost:4545/clients'
         );
         setClients(res.data);
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header
        textHead="Головна"
        textBtn="Нове замовлення"
        handler={() => console.log('btn')}
      />
      <ContentBox>
        <p>Показники поточного року</p>
        <CartWraper>
          <div className="cart-item order">
            <AnimatedCounter value={numberOfOrdersForYear} text="Всього замовлень:" />
          </div>
          <div className="cart-item client">
            <AnimatedCounter value={clients.length} text="Клієнтів:" />
          </div>
          <div className="cart-item сash">
            <AnimatedCounter
              value={salesForYear.toFixed(2)}
              text="Замовлень на сумму:"
            />
          </div>

          <div className="cart-item chat">
            <AnimatedCounter value="3" text="Відкриті діалоги:" />
          </div>
        </CartWraper>
        <SectionWraper>
          <ChartWraper>
            <h2>Цілі на місяць</h2>
            <ErrorBoundary>
              <SalesChart orders={orders} />
            </ErrorBoundary>
          </ChartWraper>
          <YearChartWraper>
            <h2>Цілі на рік</h2>
            <ErrorBoundary>
              <YearChart />
            </ErrorBoundary>
          </YearChartWraper>
          <MenagerWraper>
            <h2>Лідери продажів</h2>
          </MenagerWraper>
        </SectionWraper>
        <SectionWraper>
          <div>
            <h2>Список завдань</h2>
          </div>
        </SectionWraper>
      </ContentBox>
    </>
  );
}
