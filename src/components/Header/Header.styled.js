import styled from 'styled-components';
const BtnWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  right: 0;
  left: 0;
  top: 0;
  padding: 10px 30px;
  /* box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24); */
  background: var(--secondary-white, #fff);
  border-bottom: solid 2px var(--divider, #ebeff2);
  
  z-index: 1;
  & .title{
color: var(--secondary-dark-blue, #334d6e);
font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.13px;
  }
& input{
  padding: 5px 10px;
    width: 100%;
    height: 30px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    background-image: url(/crm_front/static/media/calendar.614dfd2….svg);
    background-repeat: no-repeat;
    background-position: 150px center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #2e2e2e;
}
`;
export { BtnWraper };