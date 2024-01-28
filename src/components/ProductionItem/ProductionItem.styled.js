import openIcon from '../../images/Polygon.svg';
import printerIcon from '../../images/icons/printer.svg'
import copyIcon from '../../images/icons/copy-icon.svg'
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const chargingAnimation = keyframes`
    0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const ItemBox = styled.li`
  min-width: 1120px;
  background-color: #fff;
  border-radius: 5px;
  height: 64px;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  margin-bottom: 10px;
  overflow: hidden;
  box-sizing: border-box;
  /* border: 2px solid #fff; */
  /* padding-bottom: 20px; */
  & p {
    padding: 0;
    margin: 0;
    color: #334d6e;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
  }
  & .column-wraper {
    position: relative;
    width: 150px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    padding: 0 10px;
    min-height: 40px;
    transition: background-color 0.5s ease;
    border-radius: 5px;
  }
  & .status {
    
    border-radius: 5px;
    
  }

  & .column-wraper.in-production {
  background-color: #2ed47a;
}

& .column-wraper.printing {
  background: linear-gradient(90deg, #2ed47a, #ccc);
  animation: ${chargingAnimation} 5s ease-in-out infinite;
  
}

& .column-wraper.completed {
  background-color: #ccc;
}

/* & .priority{
  position: relative;
} */
& .priority::after{
  content: "";
  position: absolute;
  display: inline-block;
  top: 10px;
  right: 10%;
  width: 15px;
  height: 15px;
  /* background: #FF2626; */
  border-radius: 50%;
  border: solid 4px #fff
}

& .priority.usual::after{
  background: rgba(0, 255, 18, 0.30);
}
& .priority.high::after{
  background: rgba(255, 38, 30, 0.50);
}
& .priority.urgently::after{
  background: #FF2626;
}

/* & .usual{
 
border-bottom: solid 5px rgba(0, 181, 18, 0.10);

}
& .high{
  border-bottom: solid 4px rgba(255, 38, 38, 0.10);

}
& .urgently{
 border-bottom: solid 4px #FF2626;
} */





  & .toggle-btn {
    width: 25px;
    height: 25px;
    background-image: url(${openIcon});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 20px 20px;
  }
  & .visible-box {
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    box-sizing: border-box;
  }
  & .active {
    background: #109cf1;
  }

  & .check-item {
    width: 16px;
    height: 16px;
    margin: 0;
    margin-left: 30px;
  }
  & label {
    color: var(--text-help-gray, #818e9b);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.11px;
  }
  & select {
    width: 160px;
    height: 20px;
    border: none;
    border-bottom: solid 1px #d3d8dd;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.13px;
    margin-left: 10px;
  }
  &.active {
    height: auto;
    border: 2px solid #109cf1;
  }
`;
const OptionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & .wraper {
    display: flex;
    width: 100%;
    padding: 0 20px;
    flex-direction: column;
    border-right: 1px solid #109cf1;
    &:last-child {
      border-right: none;
    }
  }
  & .input-wraper {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    /* justify-content: space-between; */
    margin-bottom: 10px;
    /* width: 250px; */

    & p {
      color: #818e9b;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.11px;
    }
    & div {
      width: 160px;
      height: 20px;
      border-bottom: solid 1px #d3d8dd;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.13px;
      margin-left: 10px;
    }
    & span{
      color: #334d6e;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
    }
  }
  & .load-btn{
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
`;
const PrintBtn = styled.div`
width: 25px;
height: 25px;
background-image: url(${printerIcon});
background-repeat: no-repeat;
background-size: 25px;
background-position: center;
cursor: pointer;
`

const CopyBtn = styled.div`
width: 25px;
height: 25px;
background-image: url(${copyIcon});
background-repeat: no-repeat;
background-size: 20px;
background-position: center;
margin-left: 10px;
margin-top: 2px;
cursor: pointer;
`
const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & .section-title {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background-color: #dcdfe6;
    position: relative;
    & .text-wraper {
      position: absolute;
      left: 0;
      top: -15px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 26px;
      box-sizing: border-box;
    }
    & .btn-wraper {
      position: absolute;
      right: 0;
      top: -15px;
      width: 130px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
    }
    & p {
      position: relative;
      margin: 0;
      padding: 0;
    }
  }
  & .head-list {
    list-style: none;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  & .head-item {
    box-sizing: border-box;
    width: 100px;
    box-sizing: border-box;
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: 400;
    padding: 0 8px;
    overflow-wrap: break-word;
  }
  & .item-list {
    list-style: none;
    box-shadow: 0 1px 5px 1px rgba(69, 65, 78, 0.25);
    display: flex;
    flex-direction: column;
    padding: 0;
    & li {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      border-bottom: solid 1px rgb(128, 128, 128);
    }
    & li:last-child {
      border-bottom: none;
    }
  }
  & .item-wraper {
    box-sizing: border-box;
    width: 100px;
    display: flex;
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: 400;
    padding: 0 8px;
    overflow-wrap: break-word;
  }
`;
const PayBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  padding: 10px;
  margin-top: 10px;
  & .section-title {
    display: block;
    height: 1px;
    width: 100%;
    margin: 24px 0;
    background-color: #dcdfe6;
    position: relative;
    & .text-wraper {
      position: absolute;
      left: 0;
      top: -15px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 26px;
      box-sizing: border-box;
    }
    & .btn-wraper {
      position: absolute;
      right: 0;
      top: -15px;
      width: 130px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
    }
    & p {
      position: relative;
      margin: 0;
      padding: 0;
    }
  }
  & .head-list {
    list-style: none;
    padding: 5px;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  & .head-item {
    box-sizing: border-box;
    width: 100px;
    box-sizing: border-box;
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: 400;
    padding: 0 8px;
    overflow-wrap: break-word;
  }
  & .item-list {
    list-style: none;
    box-shadow: 0 1px 5px 1px rgba(69, 65, 78, 0.25);
    display: flex;
    flex-direction: column;
    padding: 0;
    & li {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      border-bottom: solid 1px rgb(128, 128, 128);
    }
    & li:last-child {
      border-bottom: none;
    }
  }
  & .item-wraper {
    box-sizing: border-box;
    width: 100px;
    display: flex;
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: 400;
    padding: 0 8px;
    overflow-wrap: break-word;
  }
  & .pay-wraper {
    display: flex;
    align-items: flex-end;
    & .text-wraper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      margin-left: 15px;
    }
  }
`;
export { ItemBox, PayBox, OrderBox, OptionsBox, PrintBtn, CopyBtn };
