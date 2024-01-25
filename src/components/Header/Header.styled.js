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
  color: var(--secondary-dark-blue, #334d6e);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.13px;
  z-index: 1;

`;
export { BtnWraper };