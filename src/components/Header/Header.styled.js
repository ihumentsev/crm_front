import styled from 'styled-components';
const BtnWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  /* width: 100%; */
  right: 0;
  left: 0;
  top: 0;
  padding: 10px 30px;
  /* box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24); */
  background: var(--secondary-white, #fff);
  border-bottom: solid 2px var(--divider, #ebeff2);
  color: var(--secondary-dark-blue, #334d6e);
  /* font-family: Poppins; */
  /* font-size: 13px; */
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.13px;

  /* & .btn {
    padding: 11px 14px;
    border-radius: 4px;
    background: var(--main-accent-blue, #109cf1);
    box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24);
    border: none;
    text-align: center;
    font-family: Open Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.13px;
    color: var(--secondary-white, #fff);
  } */
`;
export { BtnWraper };