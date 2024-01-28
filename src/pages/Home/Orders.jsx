import OrderItem from 'components/OrderItem/OrderItem';
import { ContentBox, PaginationBox, PaginationWraper, WraperFiter } from './Orders.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ModalPortal from 'components/Portal/ModalPortal';
import OrderModal from 'components/Modal/OrderModal';
import Header from 'components/Header/Header';
import DatePicker from 'react-datepicker';
import uk from "date-fns/locale/uk";
import { format } from "date-fns";
import WhiteBtn from 'components/Btn/WhiteBtn';
import BlueBtn from 'components/Btn/BlueBtn';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState("10");
  const [selectedDateStart, setSelectedDateStart] = useState(new Date(new Date().getFullYear(),0, 1, 0, 0, 0, 0));
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const [selectedDateEnd, setSelectedDateEnd] = useState(currentDate);
  console.log(orders);
  const formattedStartDate = selectedDateStart.toISOString().split('T')[0];
  const formattedEndDate = selectedDateEnd.toISOString().split('T')[0];

  const ToggelModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://back-crm-fb781da88f45.herokuapp.com/allorders?page=${page}&pageSize=${pageSize}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`
          // `http://localhost:4545/allorders?page=${page}&pageSize=${pageSize}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };

    fetchData();
  }, [pageSize, page, formattedStartDate, formattedEndDate]);


  const handleDateStartChange = (date) => {
    setSelectedDateStart(date);
  };
  const handleDateEndChange = (date) => {
    setSelectedDateEnd(date);
  };
 

  return (
    <>
      <Header textHead = "Замовлення" textBtn="Нове замовлення" handler={ToggelModal} />
      <ContentBox>
        <PaginationWraper>
      <WraperFiter >
          <div className="input-box">
            <div className="wraper-input">
              <label>Показати з:</label>
              <DatePicker
                selected={selectedDateStart}
                onChange={handleDateStartChange}
                dateFormat="dd, MMMM, yyyy"
                locale={uk}
                value={
                  selectedDateStart
                    ? format(selectedDateStart, "dd MMMM yyyy", { locale: uk })
                    : ""
                }
              />
            </div>
            <div className="wraper-input end">
              <label>До:</label>
              <DatePicker
                selected={selectedDateEnd}
                onChange={handleDateEndChange}
                dateFormat="dd, MMMM, yyyy"
                locale={uk}
                value={
                  selectedDateEnd
                    ? format(selectedDateEnd, "dd MMMM yyyy", { locale: uk })
                    : ""
                }
              />
            </div>
          </div>

          <div className="btn-wraper">
            <BlueBtn styleClass="find-btn" text="Показати"></BlueBtn>
            <BlueBtn styleClass="reset-btn" text="Скинути"></BlueBtn>
          </div>
        </WraperFiter>
        <PaginationBox>
            <div className="wraper-select">
              <label>Записи</label>
              <select defaultValue="10"
                onChange={(e) => {
                  setPageSize(e.target.value);
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15"> 15</option>
                <option value="20">20</option>
              </select>
            </div>

            <div className="change-pagination">
              <div
                className="prev"
                onClick={() => {
                  setPage((prevForm) => (prevForm > 1 ? prevForm - 1 : 1));
                }}
              ></div>
              <div
                className="next"
                onClick={() => {
                  setPage((prevForm) => prevForm + 1);
                }}
              ></div>
            </div>
          </PaginationBox>
          </PaginationWraper>
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
          {/* <li className="item-header">Продукція</li> */}
          <li className="item-header">Вартість</li>
          <li className="item-header">Додатково</li>
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
