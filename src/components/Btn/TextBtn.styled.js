import styled from 'styled-components';

const TextButton = styled.button`
  /* margin-top: 20px; */
  width: 160px;
  height: 42px;
  border-radius: 4px;
  background: #fff;
  border: none;
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
  }
  &:active {
    color: #098edf;
  }
  &:disabled {
    color: #109cf1;
  }
`;
export { TextButton };
