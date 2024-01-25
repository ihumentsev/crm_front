import { useState } from 'react';
import { ItemBox, OptionsBox, OrderBox, PayBox } from './OrderItem.styled';
import BlueBtn from 'components/Btn/BlueBtn';
import WhiteBtn from 'components/Btn/WhiteBtn';
import { format } from 'date-fns';
import { PrintBtn } from 'components/ProductionItem/ProductionItem.styled';
import { createOrderDocument } from 'helpers/createOrderDocument';

export default function OrderItem({ order }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggelOpenItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ItemBox
        key={order.id}
        className={isOpen ? 'order-item active' : 'order-item'}
      >
        <div className={isOpen ? 'visible-box active' : 'visible-box '}>
          <div className="column-wraper">
            <div className="toggle-btn" onClick={toggelOpenItem}></div>
            <input className="check-item" type="checkbox" />
          </div>

          <div className="column-wraper">
            <p>#{order.id}</p>
          </div>
          <div className="column-wraper">
            <p>{order.owner}</p>
          </div>
          <div className="column-wraper">
            <p>{order.source}</p>
          </div>
          <div className="column-wraper">
            <p> {format(new Date(order.createdAt), 'dd-MM-yyyy')}</p>
          </div>
          <div className="column-wraper status">
            <p>{order.status}</p>
          </div>

          <div className="column-wraper">
            <p>{order.total_amount} грн </p>
          </div>

          <div className="column-wraper">
            <PrintBtn
              onClick={() => {
                createOrderDocument(order);
              }}
            ></PrintBtn>
          </div>
        </div>
        <OptionsBox>
          <div className="wraper">
            <div className="input-wraper">
              <p>№ замовлення:</p>
              <div>#{order.id}</div>
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
              <select>
                <option>{order.status}</option>
                <option>На виробництві</option>
                <option>Виготовленно</option>
                <option>Відвантажено</option>
                <option>Передано на доставку</option>
              </select>
            </div>
            <div className="input-wraper">
              <p>Статус оплати:</p>
              <div>{order.paymentStatus}</div>
            </div>
            <div className="input-wraper">
              <p>Файли:</p>
              <div>Додати</div>
            </div>
            <div className="input-wraper">
              <p>Завдання:</p>
              <div>Додати</div>
            </div>
          </div>
          <div className="wraper">
            <div className="input-wraper">
              <p>Покупець:</p>
              <div>Черенок Константин</div>
            </div>
            <div className="input-wraper">
              <p>Телефон покупця:</p>
              <div>+15552341234</div>
            </div>
            <div className="input-wraper">
              <p>E-mail покупця:</p>
              <div>john.doe@mail.app</div>
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
              <label>Доставка</label>
              <select>
                <option>Курьер </option>
                <option>Нова Почта</option>
                <option>Самовивіз</option>
              </select>
            </div>
            <div className="input-wraper">
              <p>Одержувач:</p>
              <div> Игуменцев Андрій +15552341234</div>
            </div>
            <div className="input-wraper">
              <p>Адреса доставки:</p>
              <div> Kiev</div>
            </div>
            <div className="input-wraper">
              <p>Витрати:</p>
              <div> 150.00</div>
            </div>
            <div className="input-wraper">
              <p>Дата доставки / відправки:</p>
              <div>21.12.2021 14:44</div>
            </div>
            <div className="input-wraper">
              <p>Трекінг код:</p>
              <div>530005665555556</div>
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
              <li className="head-item">Акртикул</li>
              <li className="head-item">Назва</li>
              <li className="head-item">Коментар</li>
              <li className="head-item">Властивості</li>
              <li className="head-item">Тип відвантаження</li>
              <li className="head-item">Статус</li>
              <li className="head-item">Кількість</li>
              <li className="head-item">Ціна закупівлі</li>
              <li className="head-item">ціна товару</li>
              <li className="head-item">Знижка</li>
              <li className="head-item">Ціна продажу</li>
            </ul>
          </div>
          <div>
            <ul className="item-list">
              {order.products.map(product => (
                <li key={product.id}>
                  <span className="item-wraper">#{product.id}</span>
                  <span className="item-wraper">{product.product_name}</span>
                  <span className="item-wraper">-</span>
                  <span className="item-wraper">-</span>
                  <span className="item-wraper">Виробництво</span>
                  <span className="item-wraper">{product.status_develop}</span>
                  <span className="item-wraper">{product.quantity} шт</span>
                  <span className="item-wraper">
                    {product.price_per_item} грн
                  </span>
                  <span className="item-wraper">
                    {product.price_per_item} грн
                  </span>
                  <span className="item-wraper">- </span>
                  <span className="item-wraper">{product.total_price} грн</span>
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
                        {format(
                          new Date(item.payment_date),
                          'dd-MM-yyyy HH:mm'
                        )}
                      </span>
                      <span className="item-wraper">{item.payment_method}</span>
                      <span className="item-wraper">
                        {item.payment_amount} грн.
                      </span>
                      <span className="item-wraper">Пердплата</span>
                      <span className="item-wraper">{item.payment_status}</span>
                    </li>
                  ))}
              </ul>
            </div>
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
