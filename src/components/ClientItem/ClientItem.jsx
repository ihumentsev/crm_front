import { useState } from 'react';
import {
  ItemBox,
  ListItem,
  OptionsBox,
} from './ClientItem.styled';
import WhiteBtn from 'components/Btn/WhiteBtn';
import { format } from 'date-fns';

export default function ClientItem({ client }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggelOpenItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ItemBox
        key={client.id}
        className={isOpen ? 'order-item active' : 'order-item'}
      >
        <div className={isOpen ? 'visible-box active' : 'visible-box '}>
          <ListItem>
            <li>
              <div className="toggle-btn" onClick={toggelOpenItem}></div>
              <input className="check-item" type="checkbox" />
            </li>
            <li>#{client.id}</li>
            <li>{`${client.surname} ${client.name} `}</li>
            <li>{client.email}</li>
            <li>
              {client.company !== null ? client.company : 'Данні відсутні'}
            </li>
            <li>{client.orders_count}</li>
            <li>{format(new Date(client.createdAt), 'dd-MM-yyyy')}</li>
            <li>Сідченко Яна</li>
          </ListItem>
        </div>
        <OptionsBox>
          <div className="wraper">
            <div className="input-wraper">
              <p>Номер особового рахунка № </p>
              <div>#{client.id}</div>
            </div>
            <div className="input-wraper">
              <p>ФІО:</p>
              <div>
                {`${client.surname} ${client.name} ${client.secondName}`}
              </div>
            </div>
            <div className="input-wraper">
              <p>Телефон:</p>
              <div>{client.phone}</div>
            </div>
            <div className="input-wraper">
              <p>Email:</p>
              <div>{client.email}</div>
            </div>
            <div className="input-wraper">
              <p>Дата реєстраціі:</p>
              <div>{format(new Date(client.createdAt), 'dd-MM-yyyy')}</div>
            </div>
            <div className="input-wraper">
              <p>Веріфіковано:</p>
              <div>{client.verification !== 'false' ? 'Так' : 'Ні'}</div>
            </div>
            <div className="input-wraper">
              <p>Всього зробленно замовлень:</p>
              <div>{client.orders_count ? client.orders_count : '0'}</div>
            </div>
            <div className="input-wraper">
              <p>Сумма замовлень:</p>
              <div>
                {client.total_orders_amount
                  ? `${client.total_orders_amount} грн`
                  : '0'}
              </div>
            </div>
          </div>
          <div className="wraper">
            <div className="input-wraper">
              <p>Тип контрагента:</p>
              <div>{client.employment ? client.employment : 'Немає даних'}</div>
            </div>
            <div className="input-wraper">
              <p>Статус покупця:</p>
              <div>{client.buyerType ? client.buyerType : 'Немає даних'}</div>
            </div>
            <div className="input-wraper">
              <p>Дисконт %:</p>
              <div>{client.discont ? client.discont : 'Не визначено'}</div>
            </div>
            <div className="input-wraper">
              <p>Компанія:</p>
              <div>{client.company ? client.company : 'Немає даних'}</div>
            </div>
            <div className="input-wraper">
              <p>Код компаніі:</p>
              <div>{client.codCompany ? client.codCompany : 'Немає даних'}</div>
            </div>
            <div className="input-wraper">
              <p>Банк компаніі:</p>
              <div>{client.bankName ? client.bankName : 'Немає даних'}</div>
            </div>
            <div className="input-wraper">
              <p>Р/р компаніі:</p>
              <div>
                {client.currentAccount ? client.currentAccount : 'Немає даних'}
              </div>
            </div>
            <div className="input-wraper">
              <WhiteBtn
                text="Внести зміни"
                handler={() => console.log('btn')}
              ></WhiteBtn>
            </div>
          </div>
          <div className="wraper">
            <div className="input-wraper">
              <p>Адреса:</p>
              <div> {client.adress}</div>
            </div>

            <div className="input-wraper">
              <p>Тип відвантаження за замовчуванням:</p>
              <div>Нова пошта</div>
            </div>

            <div className="input-wraper">
              <WhiteBtn text="Додати адресу"></WhiteBtn>
            </div>
          </div>
        </OptionsBox>
      </ItemBox>
    </>
  );
}
