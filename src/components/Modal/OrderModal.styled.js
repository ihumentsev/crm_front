import styled from 'styled-components';

const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  & h2 {
    color: rgb(51, 77, 110);
  }
`;
const OrderHeader = styled.div`
margin-bottom: 80px;
  & .info-wraper{
    display: flex;
    & .input-wraper{
      display: flex;
      flex-direction: column;
      & label{
        color: #323C47;
      }
      & select{
        width: 300px;
        background: none;
        border: none;
        border-bottom: 1px solid #D3D8DD;
        margin-top: 19px;
        margin-right: 30px;
        color:  #323C47;
        font-family: Poppins;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.13px;
      }
      & textarea{
        width: 300px;
        border: none;
        border-bottom: 1px solid #D3D8DD;
        color:  #323C47;
        font-family: Poppins;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.13px;
      }
    }
  }
`;
export { ModalContent, OrderHeader };
