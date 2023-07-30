import styled from 'styled-components';
import openIcon from '../../images/Polygon.svg';

const ItemBox = styled.li`
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
  border: 2px solid #fff;

  /* padding-bottom: 20px; */
  & p {
    padding: 0;
    margin: 0;
  }
  & .column-wraper {
    width: 150px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    padding: 10px;
  }
  & .status {
    background-color: #2ed47a;
    border-radius: 5px;
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
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 30px; */
    box-sizing: border-box;
  }
  /* & .active {
    background: #109cf1;
  } */

  & .check-item {
    width: 16px;
    height: 16px;
    margin: 0;
    margin-left: 30px;
  }
  & label {
    color: var(--text-help-gray, #818e9b);
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.11px;
  }
  & select {
    width: 252px;
    height: 25px;
    border: none;
    border-bottom: solid 1px #d3d8dd;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.13px;
    margin-top: 5px;
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
    flex-direction: column;
  }
  & .input-wraper {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    & button {
      margin-top: 20px;
      width: 160px;
      height: 42px;
      border-radius: 4px;
      border: 1px solid #109cf1;
      background-color: #fff;
      color: #109cf1;
      text-align: center;
      font-family: Poppins;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.13px;
      &:hover {
        border: 1px solid #34aff9;
        color: #34aff9;
      }
    }
  }
`;
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
export { ItemBox, PayBox, OrderBox, OptionsBox };
