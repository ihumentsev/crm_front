import { useState } from 'react';
import {
  DefaultWraper,
  ItemBox,
  ListItem,
  OptionsBox,
  OrderBox,
  PayBox,
} from './OrderItem.styled';
import BlueBtn from 'components/Btn/BlueBtn';
import WhiteBtn from 'components/Btn/WhiteBtn';
import { format } from 'date-fns';
import {
  CopyBtn,
  PrintBtn,
} from 'components/ProductionItem/ProductionItem.styled';
import { createOrderDocument } from 'helpers/createOrderDocument';
import axios from 'axios';

export default function OrderItem({ order }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggelOpenItem = () => {
    setIsOpen(!isOpen);
  };
  const formatNumber = (number, length) => {
    return String(number).padStart(length, '0');
  };
  function getStatusClass(status) {
    switch (status) {
      case 'новий':
        return 'in-production';
      case 'передано у виробництво':
        return 'printing';
      case 'виготовлено':
        return 'completed';
      case 'відвантажено':
        return 'completed';
      case 'відхилино':
        return 'rejection';
      case 'на виробництво':
        return 'in-production';
      case 'друкується':
        return 'printing';
      default:
        return '';
    }
  }

  function getPriorityClass(priority) {
    switch (priority) {
      case null:
        return 'usual';
      case 'звичайний':
        return 'usual';
      case 'високий':
        return 'high';
      case 'терміново':
        return 'urgently';
      default:
        return '';
    }
  }

  const handlerStatus = async e => {
    try {
      await axios.patch(`https://back-crm-fb781da88f45.herokuapp.com/orders/${order.id}`, {
        status: e.target.value,
      });
    } catch (error) {
      console.error('Ошибка при получении данных', error);
    }
  };

  return (
    <>
      <ItemBox
        key={order.id}
        className={isOpen ? 'order-item active' : 'order-item'}
      >
        <div className={isOpen ? 'visible-box active' : 'visible-box '}>
          <ListItem>
            <li>
              <div className="toggle-btn" onClick={toggelOpenItem}></div>
              <input className="check-item" type="checkbox" />
            </li>
            <li>#{formatNumber(order.id, 5)}</li>
            <li>
              {order.client_company
                ? order.client_company
                : `${order.client_name} ${order.client_surname}`}
            </li>
            <li>{order.source ? order.source : 'не визначено'}</li>
            <li>{format(new Date(order.createdAt), 'dd-MM-yyyy')}</li>
            <li className={` status ${getStatusClass(order.status)}`}>
              {order.status}
            </li>
            <li>{order.total_amount}</li>
            <li>
              <PrintBtn
                onClick={() => {
                  createOrderDocument(order);
                }}
              ></PrintBtn>
              <CopyBtn
                onClick={() => {
                  createOrderDocument(order);
                }}
              ></CopyBtn>
            </li>
          </ListItem>
        </div>
        <OptionsBox>
          <div className="wraper">
            <div className="input-wraper">
              <p>№ замовлення:</p>
              <div>#{formatNumber(order.id, 5)}</div>
            </div>
            <div className="input-wraper">
              <p>Джерело:</p>
              <div>{order.source}</div>
            </div>
            <div className="input-wraper">
              <p>Час створення:</p>
              <div>{format(new Date(order.createdAt), 'dd-MM-yyyy')}</div>
            </div>
            <div className="input-wraper">
              <p>Менеджер:</p>
              <div>
                {order.manager === null ? 'не визначено' : `${order.manager}`}
              </div>
            </div>
            <div className="input-wraper">
              <label>Відповідальний</label>
              <select>
                <option>{order.responsibility}</option>
                <option>Шинкар Сергій</option>
                <option>Кулінко Валерій</option>
              </select>
            </div>
            <div className="input-wraper">
              <label>Статус</label>
              <select
                value={order.status}
                onChange={e => {
                  handlerStatus(e);
                }}
              >
                <option value="новий">новий</option>
                <option value="передано у виробництво">
                  передано у виробництво
                </option>
                <option value="виготовлено">виготовлено</option>
                <option value="відвантажено">відвантажено</option>
                <option value="відхилино">відхилино</option>
              </select>
            </div>
            <div className="input-wraper">
              <p>Статус оплати:</p>
              <div>
                {order.paymentStatus
                  ? order.paymentStatus
                  : 'оплата не надходила'}
              </div>
            </div>

            {order.products.map(prod => (
              <div className="input-wraper" key={prod.id}>
                <p>Файли:</p>
                <a
                  href={prod.image_url}
                  target="blanck"
                >{`Макет (${prod.product_name})`}</a>
              </div>
            ))}
          </div>
          <div className="wraper">
            <div className="input-wraper">
              <p>Покупець:</p>
              <div>{`${order.client_name} ${order.client_surname}`}</div>
            </div>
            <div className="input-wraper">
              <p>Телефон покупця:</p>
              <div>{order.client_phone}</div>
            </div>
            <div className="input-wraper">
              <p>E-mail покупця:</p>
              <div>{order.client_email}</div>
            </div>
            <div className="input-wraper">
              <p>Коментар:</p>
              <div></div>
            </div>
            <div className="input-wraper">
              <WhiteBtn
                text="Додати коментар"
                handler={() => console.log('btn')}
              ></WhiteBtn>
            </div>
          </div>
          <div className="wraper">
            <div className="input-wraper">
              <p>Метод доставки:</p>
              <div>
                {' '}
                {order.deliveryMethod ? order.deliveryMethod : 'Не визначено'}
              </div>
            </div>
            <div className="input-wraper">
              <p>Місто:</p>
              <div>
                {' '}
                {order.deliveryCity ? order.deliveryCity : 'Не визначено'}
              </div>
            </div>
            <div className="input-wraper">
              <p>Адреса доставки:</p>
              <div>
                {' '}
                {order.deliveryAdress ? order.deliveryAdress : 'Не визначено'}
              </div>
            </div>
            <div className="input-wraper">
              <p>Витрати:</p>
              <div>
                {' '}
                {order.deliveryCost ? order.deliveryCost : 'Не визначено'}
              </div>
            </div>
            <div className="input-wraper">
              <p>Трекінг код:</p>
              <div>
                {order.deliveryTracking
                  ? order.deliveryTracking
                  : 'Не визначено'}
              </div>
            </div>

            <div className="input-wraper">
              <WhiteBtn text="Додати ТТН"></WhiteBtn>
            </div>
          </div>
        </OptionsBox>
        <OrderBox>
          <div className="section-title">
            <div className="text-wraper">
              <p>Продукція</p>
            </div>
            <div className="border-line"></div>
            <div className="btn-wraper">
              <BlueBtn text="Додати"></BlueBtn>
            </div>
          </div>
          <div>
            <ul className="head-list">
              <li className="head-item">Ордер</li>
              <li className="head-item">Продукт</li>
              <li className="head-item">Розмір</li>
              <li className="head-item">Опціі</li>
              <li className="head-item">Статус</li>
              <li className="head-item">Пріорітет</li>
              <li className="head-item">Кількість</li>
              <li className="head-item">Ціна товару</li>
              <li className="head-item">Вартість</li>
            </ul>
          </div>
          <div>
            <ul className="item-list">
              {order.products.map(product => (
                <li key={product.id}>
                  <span className="item-wraper">#{product.id}</span>
                  <span className="item-wraper">{product.product_name}</span>
                  <span className="item-wraper">{product.size}</span>
                  <span className="item-wraper">{product.option}</span>
                  <span
                    className={`item-wraper status ${getStatusClass(
                      product.status_develop
                    )}`}
                  >
                    {product.status_develop}
                  </span>
                  <span
                    className={`item-wraper priority ${getPriorityClass(
                      product.priority
                    )}`}
                  >
                    {product.priority === null ? 'звичайний' : product.priority}
                  </span>
                  <span className="item-wraper">{product.quantity} шт</span>
                  <span className="item-wraper">
                    {product.price_per_item.toFixed(2)} грн
                  </span>
                  {/* <span className="item-wraper">- </span> */}
                  <span className="item-wraper">
                    {product.total_price.toFixed(2)} грн
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </OrderBox>
        <PayBox>
          <div>
            <div className="section-title">
              <div className="text-wraper">
                <p>Оплати</p>
              </div>
              <div className="border-line"></div>
              <div className="btn-wraper">
                <BlueBtn text="Додати оплату"></BlueBtn>
              </div>
            </div>
            {order.payments ? (
              <>
                <div>
                  <ul className="head-list">
                    <li className="head-item">Дата і час</li>
                    <li className="head-item">Тип платежу</li>
                    <li className="head-item">Сумма</li>
                    <li className="head-item">Коментар</li>
                    <li className="head-item">Статус</li>
                  </ul>
                </div>
                <div>
                  <ul className="item-list">
                    {order.payments !== null &&
                      order.payments.map(item => (
                        <li key={item.id}>
                          <span className="item-wraper">
                            {format(new Date(item.payment_date), 'dd-MM-yyyy')}
                          </span>
                          <span className="item-wraper">
                            {item.payment_method}
                          </span>
                          <span className="item-wraper">
                            {item.payment_amount} грн.
                          </span>
                          <span className="item-wraper">Пердплата</span>
                          <span className="item-wraper">
                            {item.payment_status}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            ) : (
              <DefaultWraper>{`По замовленню #${formatNumber(
                order.id,
                5
              )} оплата не надходила`}</DefaultWraper>
            )}
          </div>
          <div className="pay-wraper">
            <div className="text-wraper">
              <p>
                Сумма за товари:
                <span>{order.total_amount} грн.</span>
              </p>
              <p>
                Знижка на замовлення:<span> -0.00 грн.</span>
              </p>
              <p>
                Вартість доставки:<span>0.00 грн.</span>
              </p>
              <p>
                Загальна вартість:
                <span>{order.total_amount} грн.</span>
              </p>
            </div>
          </div>
        </PayBox>
      </ItemBox>
    </>
  );
}
