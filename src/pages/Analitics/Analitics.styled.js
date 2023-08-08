import styled from 'styled-components';
import contacts from '../../images/contacts-active.svg';
import chat from '../../images/chat.svg';
import cash from '../../images/money.svg';
import orders from '../../images/tasks.svg';
const ContentBox = styled.div`
  padding: 40px 40px;
`;
const ChartWraper = styled.div`
  width: 600px;
  /* height: 344px; */
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 10px;
  & h1 {
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.15px;
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
  & h1 {
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.15px;
  }
`;
const CartWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & .cart-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 298px;
    height: 105px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--secondary-primary-white, #fff);
    box-shadow: 0px 18px 32px 0px rgba(208, 210, 218, 0.15);
  }
  & .client {
    background-image: url(${contacts});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 50px;
  }
  & .order {
    background-image: url(${orders});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 50px;
  }
  & .chat {
    background-image: url(${chat});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 50px;
  }
  & .сash {
    background-image: url(${cash});
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 50px;
  }
`;
const MenagerWraper = styled.div`
  width: 300px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
  padding: 10px;
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
