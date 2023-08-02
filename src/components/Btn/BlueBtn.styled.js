import styled from 'styled-components';

const BluButton = styled.button`
  /* margin-top: 20px; */
  width: 160px;
  height: 42px;
  border-radius: 4px;
  background: #109cf1;
  box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24);
  border: none;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.13px;
  &:hover {
    background: #34aff9;
    box-shadow: 0px 8px 16px 0px rgba(52, 175, 249, 0.2);
  }
  &:active {
    background: #098edf;
    box-shadow: 0px 2px 6px 0px rgba(9, 142, 223, 0.3);
  }
  &:disabled {
    background:  #c2cfe0;
  }
`;
export { BluButton };
