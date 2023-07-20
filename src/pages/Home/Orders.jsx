// import css from '../Home/Home.module.css';
// import { useNavigate } from 'react-router-dom';
// import Btn from 'components/Btn/Btn';
import { BtnWraper, ContentBox, OptionsBox } from './Orders.styled';
import { useState } from 'react';
export default function Orders() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggelOpenItem = () => {
    setIsOpen(!isOpen);
  };
  // const navigate = useNavigate();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   navigate('/tweets', { replace: true });
  // };

  return (
    <>
      <BtnWraper>
        <div>Замовлення</div>
        <button className="btn">Нове замовлення</button>
      </BtnWraper>
      <ContentBox>
       
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
          <li className="item-header">Продукція</li>
          <li className="item-header">Вартість</li>
          <li className="item-header">Менеджер</li>
        </ul>
        
        <ul className="order-list">
          <li className={isOpen ? 'order-item active' : 'order-item'}>
            <div className={isOpen ? 'visible-box active' : 'visible-box '}>
              <div className="column-wraper">
                <div className="toggle-btn" onClick={toggelOpenItem}></div>
                <input className="check-item" type="checkbox" />
              </div>

              <div className="column-wraper">
                <p>#2656</p>
              </div>
              <div className="column-wraper">
                <p>Черенок Костянтин</p>
              </div>
              <div className="column-wraper">
                <p>Сайт</p>
              </div>
              <div className="column-wraper">
                <p> 14.10.2023р.</p>
              </div>
              <div className="column-wraper status">
                <p>Виконано</p>
              </div>
              <div className="column-wraper">
                <p>Баннер</p>
              </div>
              <div className="column-wraper">
                <p>860 грн </p>
              </div>
              <div className="column-wraper">
                <p>Ігуменцев А.В. </p>
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
                    <option>В очікувані сплати</option>
                    <option>На виробництві</option>
                    <option>Виготовленно</option>
                    <option>Відвантажено</option>
                    <option>Передано на доставку</option>
                  </select>
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
                  Коментар
                  <button>Додати коментар</button>
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
                  <button>Додати ТТН</button>
                </div>
              </div>
            </OptionsBox>
            <div>ordersItems</div>
          </li>
          <li className={isOpen ? 'order-item active' : 'order-item'}>
            <div className="visible-box">
              <div className="column-wraper">
                <div className="toggle-btn" onClick={toggelOpenItem}></div>
                <input className="check-item" type="checkbox" />
              </div>

              <div className="column-wraper">
                <p>#2656</p>
              </div>
              <div className="column-wraper">
                <p>Черенок Костянтин</p>
              </div>
              <div className="column-wraper">
                <p>Сайт</p>
              </div>
              <div className="column-wraper">
                <p> 14.10.2023р.</p>
              </div>
              <div className="column-wraper status">
                <p>Виконано</p>
              </div>
              <div className="column-wraper">
                <p>Баннер</p>
              </div>
              <div className="column-wraper">
                <p>860 грн </p>
              </div>
              <div className="column-wraper">
                <p>Ігуменцев А.В. </p>
              </div>
            </div>
          </li>
          <li className={isOpen ? 'order-item active' : 'order-item'}>
            <div className="visible-box">
              <div className="column-wraper">
                <div className="toggle-btn" onClick={toggelOpenItem}></div>
                <input className="check-item" type="checkbox" />
              </div>

              <div className="column-wraper">
                <p>#2656</p>
              </div>
              <div className="column-wraper">
                <p>Черенок Костянтин</p>
              </div>
              <div className="column-wraper">
                <p>Сайт</p>
              </div>
              <div className="column-wraper">
                <p> 14.10.2023р.</p>
              </div>
              <div className="column-wraper">
                <p>Виконано</p>
              </div>
              <div className="column-wraper">
                <p>Баннер</p>
              </div>
              <div className="column-wraper">
                <p>860 грн </p>
              </div>
              <div className="column-wraper">
                <p>Ігуменцев А.В. </p>
              </div>
            </div>
          </li>
          <li className={isOpen ? 'order-item active' : 'order-item'}>
            <div className="visible-box">
              <div className="column-wraper">
                <div className="toggle-btn" onClick={toggelOpenItem}></div>
                <input className="check-item" type="checkbox" />
              </div>

              <div className="column-wraper">
                <p>#2656</p>
              </div>
              <div className="column-wraper">
                <p>Черенок Костянтин</p>
              </div>
              <div className="column-wraper">
                <p>Сайт</p>
              </div>
              <div className="column-wraper">
                <p> 14.10.2023р.</p>
              </div>
              <div className="column-wraper">
                <p>Виконано</p>
              </div>
              <div className="column-wraper">
                <p>Баннер</p>
              </div>
              <div className="column-wraper">
                <p>860 грн </p>
              </div>
              <div className="column-wraper">
                <p>Ігуменцев А.В. </p>
              </div>
            </div>
          </li>

          <li className={isOpen ? 'order-item active' : 'order-item'}>
            <div className="visible-box">
              <div className="column-wraper">
                <div className="toggle-btn" onClick={toggelOpenItem}></div>
                <input className="check-item" type="checkbox" />
              </div>

              <div className="column-wraper">
                <p>#2656</p>
              </div>
              <div className="column-wraper">
                <p>Черенок Костянтин</p>
              </div>
              <div className="column-wraper">
                <p>Сайт</p>
              </div>
              <div className="column-wraper">
                <p> 14.10.2023р.</p>
              </div>
              <div className="column-wraper">
                <p>Виконано</p>
              </div>
              <div className="column-wraper">
                <p>Баннер</p>
              </div>
              <div className="column-wraper">
                <p>860 грн </p>
              </div>
              <div className="column-wraper">
                <p>Ігуменцев А.В. </p>
              </div>
            </div>
          </li>
          <li className={isOpen ? 'order-item active' : 'order-item'}>
            <div className="visible-box">
              <div className="column-wraper">
                <div className="toggle-btn" onClick={toggelOpenItem}></div>
                <input className="check-item" type="checkbox" />
              </div>

              <div className="column-wraper">
                <p>#2656</p>
              </div>
              <div className="column-wraper">
                <p>Черенок Костянтин</p>
              </div>
              <div className="column-wraper">
                <p>Сайт</p>
              </div>
              <div className="column-wraper">
                <p> 14.10.2023р.</p>
              </div>
              <div className="column-wraper">
                <p>Виконано</p>
              </div>
              <div className="column-wraper">
                <p>Баннер</p>
              </div>
              <div className="column-wraper">
                <p>860 грн </p>
              </div>
              <div className="column-wraper">
                <p>Ігуменцев А.В. </p>
              </div>
            </div>
          </li>
          <li className={isOpen ? 'order-item active' : 'order-item'}>
            <div className="visible-box">
              <div className="column-wraper">
                <div className="toggle-btn" onClick={toggelOpenItem}></div>
                <input className="check-item" type="checkbox" />
              </div>

              <div className="column-wraper">
                <p>#2656</p>
              </div>
              <div className="column-wraper">
                <p>Черенок Костянтин</p>
              </div>
              <div className="column-wraper">
                <p>Сайт</p>
              </div>
              <div className="column-wraper">
                <p> 14.10.2023р.</p>
              </div>
              <div className="column-wraper">
                <p>Виконано</p>
              </div>
              <div className="column-wraper">
                <p>Баннер</p>
              </div>
              <div className="column-wraper">
                <p>860 грн </p>
              </div>
              <div className="column-wraper">
                <p>Ігуменцев А.В. </p>
              </div>
            </div>
          </li>
        </ul>
      </ContentBox>
    </>
  );
}
