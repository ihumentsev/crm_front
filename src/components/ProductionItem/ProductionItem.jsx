import { useState } from 'react';
import { ItemBox, OptionsBox } from './ProductionItem.styled';
import WhiteBtn from 'components/Btn/WhiteBtn';
import { format } from 'date-fns';


export default function ProductionItem({ order }) {
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

          <div className="column-wraper">#{order.id}</div>
          <div className="column-wraper">
            {format(new Date(order.created_at), 'dd-MM-yyyy')}
          </div>
          <div className="column-wraper">{order.order_id}</div>
          <div className="column-wraper">
            <p>{order.product_name}</p>
          </div>
          <div className="column-wraper">
            <p>{order.description} 1000x1000</p>
          </div>
          <div className="column-wraper">
            <p> {order.quantity}</p>
          </div>
          <div className="column-wraper status">
            <p>{order.status_develop}</p>
          </div>
          <div className="column-wraper">
            <p>ТОВ "Рога та Копита"</p>
          </div>
          {/* <div className="column-wraper">
            <p>Черенок Костянтин</p>
          </div> */}
          <div className="column-wraper">
            <p>Терміново</p>
          </div>
        </div>
        <OptionsBox>
          <div className="wraper">
            <div className="input-wraper">
              <label>Відповідальний</label>
              <select>
                <option>Шинкар Сергій</option>
                <option>Кулінко Валерій</option>
              </select>
            </div>
            <div className="input-wraper">
              <label>Статус</label>
              <select>
                <option>На виробництві</option>
                <option>Друкується</option>
                <option>Виготовленно</option>
                <option>Передано на доставку</option>
              </select>
            </div>
            <div className="input-wraper">
              <p>Завантажити макет</p>
              <div>
                <a
                  href="https://back-crm-fb781da88f45.herokuapp.com/uploads/штендер_back.tif"
                  download=""
                >
                  <p>макет</p>
                </a>
              </div>
            </div>
          </div>
          <div className="wraper">
            <div className="input-wraper">
              <label>Менеджер</label>
              <select>
                <option>Черенок Константин</option>
                <option>Игуменцев Андрей</option>
              </select>
            </div>
            <div className="input-wraper">
              <p>Коментар</p>
              <div></div>
            </div>
            <div className="input-wraper">
              <WhiteBtn
                text="Додати коментар"
                handler={() => console.log('btn')}
              />
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
              <WhiteBtn text="Додати ТТН" handler={() => console.log('btn')} />
            </div>
          </div>
        </OptionsBox>
        {/* <OrderBox>
          <div className="section-title">
            <div className="text-wraper">
              <p>Продукція</p>
            </div>
            <div className="btn-wraper">
              <button>Додати</button>
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
        </OrderBox> */}
        {/* <PayBox>
          <div>
            <div className="section-title">
              <div className="text-wraper">
                <p>Оплати</p>
              </div>
              <div className="btn-wraper">
                <button>Додати оплату</button>
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
                {order.payments.map(item => (
                  <li key={item.payment_id}>
                    <span className="item-wraper">{item.payment_date}</span>
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
              <p>Сумма за товари:</p>
              <p>Знижка на замовлення:</p>
              <p>Вартість доставки:</p>
              <p>Загальна вартість:</p>
            </div>
            <div className="text-wraper">
              <p>{order.total_amount} грн.</p>
              <p> -0.00 грн.</p>
              <p>0.00 грн.</p>
              <p>{order.total_amount} грн.</p>
            </div>
          </div>
        </PayBox> */}
      </ItemBox>
    </>
  );
}
