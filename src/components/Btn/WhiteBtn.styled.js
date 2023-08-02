import styled from 'styled-components';

const WhiteButton = styled.button`
  /* margin-top: 20px; */
  width: 160px;
  height: 42px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #109cf1;
  color: #109cf1;
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.13px;
  &:hover {
    color: #34aff9;
    border: 1px solid #34aff9;
  }
  &:active {
    color: #098edf;
    border: 1px solid #098edf;
  }
  &:disabled {
    color: #c2cfe0;
    border: 1px solid #c2cfe0;
  }
`;
export { WhiteButton };
