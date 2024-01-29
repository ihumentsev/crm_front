import styled from 'styled-components';

const TailContainer = styled.div`
position: absolute;
  background-color: #eee;
  padding: 5px;
  border-radius:4px;
  top:-50px;
  left: -45px;
  display: none;
  z-index: 2;
  
  & p{
    color: #334d6e;
    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;

  }

  &::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: +10px; /* половина ширины указателя */
  border-width: 10px;
  border-style: solid;
  border-color:   #eee transparent transparent transparent;
}
`
export {
    TailContainer
}
