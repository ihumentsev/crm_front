import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { DatePickerContainer } from './SalesChart.styled';
// import { format } from 'date-fns';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const YearChart = () => {
  const [orders, setOrders] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [annualTarget] = useState(4200000); // Установленный план на год

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

  const doughnutOptions = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Выполнение плана за ${selectedYear.getFullYear()} год`,
      },
    },
  };

  const data = {
    labels: ['Выполнение плана', 'Не выполнено'],
    datasets: [
      {
        label: 'Выполнение плана за год',
        data: [0, 100],
        backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
      },
    ],
  };

  //   Обработка данных для выполнения плана за год
  // const targetSalesForYear = orders.reduce((total, order) => {
  //   const orderYear = new Date(order.createdAt).getFullYear();
  //   if (orderYear === selectedYear.getFullYear()) {
  //     return total + order.total_amount;
  //   }
  //   return total;
  // }, 0);

  const actualSalesForYear = orders.reduce((total, order) => {
    const orderYear = new Date(order.createdAt).getFullYear();
    if (orderYear === selectedYear.getFullYear()) {
      return total + order.total_amount;
    }
    return total;
  }, 0);

  data.datasets[0].data = [
    (actualSalesForYear / annualTarget) * 100,
    100 - (actualSalesForYear / annualTarget) * 100,
  ];

  return (
    <div>
      <DatePickerContainer>
        <DatePicker
          selected={selectedYear}
          onChange={date => setSelectedYear(date)}
          dateFormat="yyyy"
          showYearPicker
        />
      </DatePickerContainer>
      <div>
        <Doughnut data={data} options={doughnutOptions} />
      </div>
    </div>
  );
};

export default YearChart;
