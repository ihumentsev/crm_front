import styled from 'styled-components';
import openIcon from '../../images/Polygon.svg';
import copyIcon from '../../images/icons/copy-icon.svg';
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
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
  }
  & .column-wraper {
    /* width: 150px; */
    display: flex;
    align-items: center;
    margin-right: 5px;
    padding: 0 10px;
    min-height: 40px;
    
  }
  & .status {
    background-color: #2ed47a;
    border-radius: 5px;
  }
  & .column-wraper.in-production {
  background-color: #2ed47a;
}

& .column-wraper.printing {
  background: linear-gradient(90deg, #2ed47a, #ccc);
  
  
}

& .column-wraper.completed {
  background-color: #ccc;
}
& .column-wraper.rejection {
  background-color: #FF2626;
}

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
    width: 100px;
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
    &:last-child{
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
      width: 100px;
      color: var(--text-help-gray, #818e9b);
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.11px;
      margin-top: 2px;
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
    & a{
      color: #109cf1;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.11px;
      text-decoration: none;
      border-bottom: solid 1px #d3d8dd;
      margin-left: 10px;
      cursor: pointer;
      
    }
  }
`;
const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    & .border-line {
      display: block;
      height: 1px;
      flex-grow: 1;
      flex-basis: 0;
      margin: 24px 0;
      background-color: #dcdfe6;
    }
    & .text-wraper {
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      margin-right: 10px;
      & p {
        color: #c2cfe0;
        /* font-family: Poppins; */
        /* font-size: 13px; */
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.13px;
        margin: 0;
        padding: 0;
        margin-bottom: 5px;
      }
    }
    & .btn-wraper {
      width: 130px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background: #fff; */
      margin-left: 10px;
    }
  }
  & .head-list {
    list-style: none;
    display: grid;
    grid-template-columns: 60px 150px 150px 200px  130px 110px 80px 100px 120px;
    justify-items: left;
    justify-content: space-between;
    -webkit-box-pack: justify;
    padding: 5px;
    margin: 0;
    margin-bottom: 10px;
    /* display: flex; */
    justify-content: space-between;
  }
  & .head-item {
    box-sizing: border-box;
    width: 120px;
    box-sizing: border-box;
    color: #334d6e;
    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
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
      display: grid;
      grid-template-columns: 60px 150px 150px 200px  130px 110px 80px 100px  120px;
      align-items: center;
      justify-items: left;
      justify-content: space-between;
      -webkit-box-pack: justify;
      box-sizing: border-box;
      width: 100%;
      padding: 5px;
      border-bottom: solid 1px rgb(128, 128, 128);
    }
    & li:last-child {
      border-bottom: none;
    }

  }
  & .item-wraper {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: 400;
    padding: 0 8px;
    /* overflow-wrap: break-word; */
  }
  & .item-wraper.status {
    /* background-color: #2ed47a; */
    border-radius: 5px;
    /* width: 200px; */
    /* text-align: center; */
    display: flex;
    align-items: center;
    height: 30px;
    
  }
  & .item-wraper.in-production {
  background-color: #2ed47a;
}

 & .item-wraper.printing {
  background: linear-gradient(90deg, #2ed47a, #ccc);
  animation: ${chargingAnimation} 5s ease-in-out infinite;
  
}

 & .item-wraper.completed {
  background-color: #ccc;
}
 & .item-wraper.rejection {
  background-color: #FF2626;
}
& .priority::after{
  content: "";
  position: absolute;
  display: inline-block;
  top: 5%;
  right: 0;
  width: 10px;
  height: 10px;
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
`;
const PayBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  padding: 20px;
  margin-top: 10px;
  & .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    & .border-line {
      display: block;
      height: 1px;
      flex-grow: 1;
      flex-basis: 0;
      margin: 24px 0;
      background-color: #dcdfe6;
    }
    & .text-wraper {
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      margin-right: 10px;
      & p {
        color: #c2cfe0;
        /* font-family: Poppins; */
        /* font-size: 13px; */
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.13px;
        margin: 0;
        padding: 0;
        margin-bottom: 5px;
      }
    }
    & .btn-wraper {
      width: 130px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background: #fff; */
      margin-left: 10px;
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
    width: 120px;
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
      padding: 5px;
      border-bottom: solid 1px rgb(128, 128, 128);
    }
    & li:last-child {
      border-bottom: none;
    }
  }
  & .item-wraper {
    box-sizing: border-box;
    width: 120px;
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
    & p {
      display: flex;
      color: #c2cfe0;
      /* font-family: Poppins; */
      /* font-size: 13px; */
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.13px;
    }
    & span {
      display: flex;
      color: #334d6e;
      font-style: normal;
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.13px;
      margin-left: auto;
      width: 150px;
      justify-content: flex-end;
    }
  }
`;
const ListItem = styled.ul`
  display: grid;
  /* column-gap: 70px; */
  grid-template-columns: 115px 120px 200px 100px 150px 220px 140px 120px;
  justify-items: left;
  justify-content: space-between;

  -webkit-box-pack: justify;

  list-style: none;
  padding: 0px 10px;
  margin: 0px;
  width: 100%;
  & li {
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 0;
    margin: 0;
    color: #334d6e;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
    display: flex;
    /* align-items: center; */
    /* margin-right: 5px; */
    padding: 0 10px;
    min-height: 40px;
  }
  & .status {
    /* background-color: #2ed47a; */
    border-radius: 5px;
    width: 200px;
    text-align: center;
    
  }
  & li.in-production {
  background-color: #2ed47a;
}

& li.printing {
  background: linear-gradient(90deg, #2ed47a, #ccc);
  
  
}

& li.completed {
  background-color: #ccc;
}
& li.rejection {
  background-color: #FF2626;
}
`;

const DefaultWraper = styled.div`
display: flex;
/* width: 300px; */
background: #FF2626;
border-radius: 4px;
padding: 10px 15px;
align-items: center;
justify-content: center;
color: #fff;
    font-style: normal;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
`
export { ItemBox, PayBox, OrderBox, OptionsBox, ListItem, DefaultWraper };
