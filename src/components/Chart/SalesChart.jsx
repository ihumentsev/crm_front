// import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import { startOfMonth, endOfMonth, eachDayOfInterval, format } from 'date-fns';
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const SalesChart = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState(new Date());

//   const startOfMonthDate = startOfMonth(selectedMonth);
//   const endOfMonthDate = endOfMonth(selectedMonth);

//   const daysInMonth = eachDayOfInterval({
//     start: startOfMonthDate,
//     end: endOfMonthDate,
//   });

//   const totalTargetSales = daysInMonth.length * 10000;

//   const chartData = {
//     labels: daysInMonth.map(date => format(date, 'dd-MM')),
//     datasets: [
//       {
//         label: 'Целевые продажи',
//         data: daysInMonth.map(() => totalTargetSales),
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgb(255, 99, 132)',
//       },
//       {
//         label: 'Фактические продажи',
//         data: Array.from({ length: daysInMonth.length }, () => 0),
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgb(75, 192, 192)',
//       },
//     ],
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://back-crm-fb781da88f45.herokuapp.com/orders'
//         );
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Ошибка при получении данных', error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Обработка данных для фактических продаж
//   orders.forEach(order => {
//     const orderDate = new Date(order.createdAt);
//     if (orderDate >= startOfMonthDate && orderDate <= endOfMonthDate) {
//       const dayIndex = orderDate.getDate() - 1;
//       chartData.datasets[1].data[dayIndex] += order.total_amount;
//     }
//   });

//   const totalActualSales = chartData.datasets[1].data.reduce((total, actual) => total + actual, 0);
//   const totalPercentCompletion = (totalActualSales / totalTargetSales) * 100;

//   const options = {
//     responsive: true,
//     interaction: {
//       mode: 'index',
//       intersect: false,
//     },
//     stacked: false,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: `План продаж на ${format(selectedMonth, 'MMMM yyyy')}. Процент выполнения: ${totalPercentCompletion.toFixed(2)}%`,
//       },
//     },
//     scales: {
//       x: {
//         type: 'category',
//         labels: chartData.labels,
//       },
//       y: {
//         type: 'linear',
//         display: true,
//         position: 'left',
//       },
//     },
//   };

//   return (
//     <div>
//       <div>
//         <DatePicker
//           selected={selectedMonth}
//           onChange={(date) => setSelectedMonth(date)}
//           dateFormat="MM/yyyy"
//           showMonthYearPicker
//         />
//       </div>
//       <Line options={options} data={chartData} />
//     </div>
//   );
// };

// export default SalesChart;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  // differenceInDays,
} from 'date-fns';
import { uk } from 'date-fns/locale';
import { DatePickerContainer } from './SalesChart.styled';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = ({ orders }) => {
  // const [orders, setOrders] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [planSales] = useState(350000);

  const startOfMonthDate = startOfMonth(selectedMonth);
  const endOfMonthDate = endOfMonth(selectedMonth);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonthDate,
    end: endOfMonthDate,
  });

  const targetSalesPerDay = planSales / daysInMonth.length;
  const targetSalesArray = daysInMonth.map(
    (_, index) => (index + 1) * targetSalesPerDay
  );

  let totalActualSales = 0;
  const actualSalesArray = daysInMonth.map(date => {
    const totalAmount = orders
      .filter(order => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate >= startOfMonthDate &&
          orderDate <= endOfMonthDate &&
          orderDate.getDate() === date.getDate()
        );
      })
      .reduce((total, order) => total + Number(order.total_amount), 0);

    totalActualSales += totalAmount;
    return totalActualSales;
  });

  const chartData = {
    labels: daysInMonth.map(date => format(date, 'dd-MM')),
    datasets: [
      {
        label: 'Целевые продажи',
        data: targetSalesArray,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        fill: false,
        pointRadius: 0,
      },
      {
        label: 'Фактические продажи',
        data: actualSalesArray,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)',
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  // const handler = () => {
  //   setPlanSales();
  // }

  const totalPercentCompletion =
    (actualSalesArray[actualSalesArray.length - 1] /
      targetSalesArray[targetSalesArray.length - 1]) *
    100;

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `План продажів на ${format(selectedMonth, 'LLLL yyyy', {
          locale: uk,
        })}. Відсоток виконання плану: ${totalPercentCompletion.toFixed(2)}%`,
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: chartData.labels,
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
    },
  };

  return (
    <div>
      <DatePickerContainer>
        <DatePicker
          selected={selectedMonth}
          onChange={date => setSelectedMonth(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
      </DatePickerContainer>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default SalesChart;
