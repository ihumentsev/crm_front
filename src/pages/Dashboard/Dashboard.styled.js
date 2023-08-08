import styled from 'styled-components';
import contacts from '../../images/contacts-active.svg';
import chat from '../../images/chat.svg';
import cash from '../../images/money.svg';
import orders from '../../images/tasks.svg';
const ContentBox = styled.div`
  padding: 40px 40px;
  max-width: 1900px;
`;
const ChartWraper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  /* height: 344px; */
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 10px;
  & h2 {
    color: #334d6e;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
  }
`;
const YearChartWraper = styled.div`
  width: 300px;
  /* height: 344px; */
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 10px;
  margin-left: 15px;
  & h2 {
    color: #334d6e;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
  }
`;
const CartWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  

  & .cart-item {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px 30px;
    width: 298px;
    height: 105px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--secondary-primary-white, #fff);
    box-shadow: 0px 18px 32px 0px rgba(208, 210, 218, 0.15);
  }
  & .client {
    position: relative;
    /* background-image: url(${contacts});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 60px; */
    & ::after {
      content: '';
      position: absolute;
      top: 50%; /* Позиционируем иконку по вертикали */
      left: 30px; /* Позиционируем иконку справа */
      transform: translateY(-50%); /* Центрируем иконку по вертикали */
      width: 60px;
      height: 60px;
      background-image: url(${contacts});
      background-repeat: no-repeat;
      background-size: cover;
      /* Применяем filter только к иконке */
      filter: invert(27%) sepia(22%) saturate(941%) hue-rotate(173deg)
        brightness(97%) contrast(96%);
    }
  }
  & .order {
    position: relative;
    & ::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
      width: 60px;
      height: 60px;
      background-image: url(${orders});
      background-repeat: no-repeat;
      background-size: cover;

      filter: invert(27%) sepia(22%) saturate(941%) hue-rotate(173deg)
        brightness(97%) contrast(96%);
    }
  }
  & .chat {
    position: relative;
    /* background-image: url(${chat});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 60px; */
    & ::after {
      content: '';
      position: absolute;
      top: 50%; /* Позиционируем иконку по вертикали */
      left: 30px; /* Позиционируем иконку справа */
      transform: translateY(-50%); /* Центрируем иконку по вертикали */
      width: 60px;
      height: 60px;
      background-image: url(${chat});
      background-repeat: no-repeat;
      background-size: cover;
      /* Применяем filter только к иконке */
      filter: invert(27%) sepia(22%) saturate(941%) hue-rotate(173deg)
        brightness(97%) contrast(96%);
    }
  }
  & .сash {
    position: relative;
    /* background-image: url(${cash});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 60px; */
    /* filter: invert(43%) sepia(88%) saturate(5161%) hue-rotate(207deg)
      brightness(93%) contrast(99%); */
    & ::after {
      content: '';
      position: absolute;
      top: 50%; /* Позиционируем иконку по вертикали */
      left: 30px; /* Позиционируем иконку справа */
      transform: translateY(-50%); /* Центрируем иконку по вертикали */
      width: 60px;
      height: 60px;
      background-image: url(${cash});
      background-repeat: no-repeat;
      background-size: cover;
      /* Применяем filter только к иконке */
      filter: invert(27%) sepia(22%) saturate(941%) hue-rotate(173deg)
        brightness(97%) contrast(96%);
    }
  }
`;
const MenagerWraper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 10px;
  margin-left: 15px;
  & h2 {
    color: #334d6e;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
  }
`;
const SectionWraper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export {
  ContentBox,
  ChartWraper,
  YearChartWraper,
  CartWraper,
  SectionWraper,
  MenagerWraper,
};
