import CloseBtn from 'components/Btn/closeBtn';
import { ModalContent, OrderHeader } from './OrderModal.styled';
import BlueBtn from 'components/Btn/BlueBtn';
import { OrderBox } from 'components/OrderItem/OrderItem.styled';
import ProductModal from './ProductModal';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const products = [
  {
      "id": 9,
      "product_name": "Плакат",
      "quantity": 10,
      "price_per_item": 25,
      "total_price": 250,
      "status_develop": "на виробництво"
  },
  {
      "id": 10,
      "product_name": "Наліпка",
      "quantity": 20,
      "price_per_item": 5,
      "total_price": 100,
      "status_develop": "на виробництво"
  }
]

const orderInitial = {
  "owner": 1,
  "total_amount": 0,
  "source": "site",
  "products": []
}
export default function OrderModal({ toggelModal }) {

  const [visibleModal, setVisibleModal] = useState(false);
  const [order, setOrder] = useState(orderInitial)
  console.log(order);

  const toggelVisibleModal =()=>{
    setVisibleModal(!visibleModal)
  }

  const orderHandler = (e)=>{
    setOrder((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    console.log("useEfect");
    // Вычислить общую сумму на основе products и обновить состояние
    const updatedTotalAmount = order.products.reduce((total, product) => {
      return total + product.price_per_item * product.quantity;
    }, 0);

  console.log("updatedTotalAmount",updatedTotalAmount);
  
    setOrder((prevOrder) => ({
      ...prevOrder,
      total_amount: updatedTotalAmount,
    }));
  }, [order.products]);

  const sentOrder =async()=>{
    await axios.post("http://localhost:4444/orders", order);
    toggelModal();
  
  }
  return (
    <ModalContent>
      <h2>Додати нове замовлення</h2>
      <CloseBtn toggelModal={toggelModal}>Закрыть</CloseBtn>
      <OrderHeader>
        <p>Основна інформація</p>
        <div className='info-wraper'>
        <div className='input-wraper'>
          <label>* Джерело</label>
          <select name='source' onChange={orderHandler}>
            <option value="site" >Сайт</option>
            <option value="email">Почта</option>
            <option value="phone">Телефон</option>
          </select>
        </div>
        <div className='input-wraper'>
          <label> Менеджер</label>
          <select name='manager' onChange={orderHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className='input-wraper'>
        <label>Клієнт</label>
        <select name='owner' onChange={orderHandler}>
          <option>1</option>
          <option>2</option>
        </select>
        </div>
        <div className='input-wraper'>
        <label>Спосіб оплати</label>
        <select >
          <option>Готівка</option>
          <option>Оплата на карту</option>
          <option>Рахунок ФОП</option>
          <option>Рахунок ТОВ</option>
        </select>
        </div>
        <div className='input-wraper'>
          <label> Коментар</label>
          <textarea placeholder="Введіть текст" ></textarea>
        </div>
        </div>
        <div>
          <p>Сумма замовлення: {order.total_amount}</p>
        </div>
      </OrderHeader>
      <OrderBox>
          <div className="section-title">
            <div className="text-wraper">
              <p>Продукція</p>
            </div>
            <div className="border-line"></div>
            <div className="btn-wraper">
              <BlueBtn text="Додати" handler= {toggelVisibleModal} ></BlueBtn>
            </div>
          </div>
          <div>
            <ul className="head-list">
              <li className="head-item">Акртикул</li>
              <li className="head-item">Назва</li>
              <li className="head-item">Коментар</li>
              <li className="head-item">Властивості</li>    
              <li className="head-item">Кількість</li>
              <li className="head-item">Ціна закупівлі</li>
              <li className="head-item">ціна товару</li>
              <li className="head-item">Знижка</li>
              <li className="head-item">Ціна продажу</li>
            </ul>
          </div>
          <div>
            <ul className="item-list">
              {order.products.length > 0 ? (order.products.map(product => (
                <li key={product.id}>
                  <span className="item-wraper">#</span>
                  <span className="item-wraper">{product.product_name}</span>
                  <span className="item-wraper">-</span>
                  <span className="item-wraper">-</span>
                  
                  
                  <span className="item-wraper">{product.quantity} шт</span>
                  <span className="item-wraper">
                    {product.price_per_item} грн
                  </span>
                  <span className="item-wraper">
                    {product.price_per_item} грн
                  </span>
                  <span className="item-wraper">- </span>
                  <span className="item-wraper">{product.price_per_item * product.quantity} грн</span>
                </li>
              ))) : (<li>Список продуктов пуст</li>)}
            </ul>
          </div>
        </OrderBox>
<button onClick={sentOrder}>Зберегти замовлення</button>
      
      
       { visibleModal && <ProductModal visibleHandler={toggelVisibleModal} product={order.products} setProduct={setOrder}/>}
        
    </ModalContent>
  );
}
