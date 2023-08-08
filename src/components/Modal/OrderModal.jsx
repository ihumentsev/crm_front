import { ModalContent } from './OrderModal.styled';

export default function OrderModal({ toggelModal }) {
  return (
    <ModalContent>
      <h2>Додати нове замовлення</h2>
      <div>
        <p>Основна інформація</p>
        <div>
          <label>* Джерело</label>
          <select>
            <option>Сайт</option>
            <option>Почта</option>
            <option>Телефон</option>
          </select>
        </div>
        <div>
          <label> Менеджер</label>
          <select>
            <option>Чернок Костянтин</option>
            <option>Ігуменцев Андрій </option>
          </select>
        </div>
        <div>
          <label> Коментар</label>
          <textarea placeholder="Введіть текст"></textarea>
        </div>
      </div>
      <div>
        <p>Покупець</p>
        <div>
          
        </div>
        <div>
          <img alt='icon'/> 
          <div>
            <option>Чернок Костянтин</option>
            <option>Ігуменцев Андрій </option>
          </div>
        </div>
        <div>
          <label> Коментар</label>
          <textarea placeholder="Введіть текст"></textarea>
        </div>
      </div>

      <button onClick={toggelModal}>Закрыть</button>
    </ModalContent>
  );
}
