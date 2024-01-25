import { useState } from 'react';
import { ItemBox, OptionsBox, PrintBtn } from './ProductionItem.styled';
import WhiteBtn from 'components/Btn/WhiteBtn';
import { format } from 'date-fns';
import axios from 'axios';
import {createProductOrder } from '../../helpers/createProductOrder'


export default function ProductionItem({ products, ordersUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [status, setStatus] = useState(products.status_develop)
  const toggelOpenItem = () => {
    setIsOpen(!isOpen);
  };


  const imageUrls = products.image_url ? products.image_url.split(",") : [];

  const handlerStatus = async (e) => {
    try {
       await axios.put(`https://back-crm-fb781da88f45.herokuapp.com/products/${products.id}/status`,{status: e.target.value});
      
    } catch (error) {
      console.error('Ошибка при получении данных', error);
    }
    ordersUpdate();
  };

  function getStatusClass(status) {
    switch (status) {
      case 'на виробництво':
        return 'in-production';
      case 'друкується':
        return 'printing';
      case 'виготовлено':
        return 'completed';
      default:
        return '';
    }
  }

  function getPriorityClass(priority
    ) {
    switch (priority
      ) {
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

  return (
    <>
      <ItemBox
        key={products.id}
        className={isOpen ? "order-item active" : "order-item"}
      >
        <div className={isOpen ? "visible-box active" : "visible-box "}>
          <div className="column-wraper">
            <div className="toggle-btn" onClick={toggelOpenItem}></div>
            <input className="check-item" type="checkbox" />
          </div>

          <div className="column-wraper">#{products.id}</div>
          <div className="column-wraper">
            {format(new Date(products.created_at), "dd-MM-yyyy")}
          </div>
          
          <div className="column-wraper">
            <p>{products.product_name}</p>
          </div>
          
          <div className={`column-wraper status ${getStatusClass(products.status_develop)}`}>
            <p>{products.status_develop}</p>
          </div>
          <div className="column-wraper">
            <p>{`ТОВ "Рога та Копита"`}</p>
          </div>
          <div className={`column-wraper `}>
            <p className={`priority ${getPriorityClass(products.priority)}`}>{products.priority === null ? "звичайний" : products.priority}</p>
          </div>
          <div className="column-wraper">
            <PrintBtn
              onClick={() => {
                createProductOrder(products);
              }}
            >
              
            </PrintBtn>
          </div>
        </div>
        <OptionsBox>
          <div className="wraper">
            <div className="input-wraper">
              <p>
                Номер замовлення: <span>#{products.order_id}</span>
              </p>
            </div>
            <div className="input-wraper">
              <p>
                Найменування: <span>{products.product_name}</span>
              </p>
            </div>
            <div className="input-wraper">
              <p>
                Дата виготовлення: <span>{products.productionTime}</span>
              </p>
            </div>
            <div className="input-wraper">
              <p>
                Розмір: <span>{products.size}</span>
              </p>
            </div>
            <div className="input-wraper">
              <p>
                Опціі: <span>{products.option}</span>
              </p>
            </div>
            <div className="input-wraper">
              <p>
                Тираж: <span>{products.quantity} шт.</span>
              </p>
            </div>
            {imageUrls.map((el, index) => (
              <a
                key={index}
                className="load-btn"
                href={el}
                download=""
                target="blank"
              >
                
                Завантажити макет
                
              </a>
            ))}

            
          </div>
          <div className="wraper">
            <div className="input-wraper">
              <label>Статус</label>
              <select value={products.status_develop}
              onChange={(e)=> { handlerStatus(e)}}>
                
                <option value="на виробництво">На виробництво</option>
                <option value="друкується">Друкується</option>
                <option value="виготовлено">Виготовлено</option>
              </select>
            </div>
            <div className="input-wraper">
              <label>Відповідальний</label>
              <select>
                <option>Шинкар Сергій</option>
                
              </select>
            </div>
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
                handler={() => console.log("btn")}
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
              <WhiteBtn text="Додати ТТН" handler={() => console.log("btn")} />
            </div>
          </div>
        </OptionsBox>
      </ItemBox>
    </>
  );
}
