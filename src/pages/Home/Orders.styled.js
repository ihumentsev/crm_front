import styled from 'styled-components';
import openIcon from '../../images/Polygon.svg';
const BtnWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  /* width: 100%; */
  right: 0;
  left: 0;
  top: 0;
  padding: 10px 10px;
  /* box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24); */
  background: var(--secondary-white, #fff);
  border-bottom: solid 2px var(--divider, #ebeff2);

  & .btn {
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
  }
`;
const ContentBox = styled.div`
  padding: 20px;
  /* background-color: #fff; */
  /* border-radius: 4px; */
  /* box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06); */
  margin-top: 20px;
  margin-left: 15px;
  overflow-y: auto;
  height: 100%;
  & .list-header {
    display: flex;
    justify-content: space-between;
    list-style: none;
    /* padding: 10px; */
    /* margin: 0; */
    /* margin-bottom: 10px; */
    /* min-width: 970px; */
    /* border-bottom: solid 2px var(--divider, #ebeff2); */
    padding: 0;
    margin: 0;
    min-width: 970px;
  }
  & .item-header {
    width: 150px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    /* padding: 10px; */
    & .check-header {
      width: 16px;
      height: 16px;
      margin: 0;
      margin-left: 10px;
    }
  }
  & .order-list {
    padding: 0;
    margin: 0;
    min-width: 970px;

    & .order-item {
      /* min-width: 970px; */
      background-color: #fff;
      border-radius: 5px;
      height: 64px;
      /* padding: 10px; */
      /* border-bottom: solid 2px var(--divider, #ebeff2); */
      display: flex;
      flex-direction: column;
      list-style: none;
      justify-content: space-between;
      margin-bottom: 10px;
      overflow: hidden;
      /* padding: 10px; */
      /* margin: 0; */

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
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
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
    }
    & .active {
      height: auto;
      border: 2px solid #109cf1;
    }
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
    flex-direction: column;
    margin-bottom: 20px;
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
export { BtnWraper, ContentBox, OptionsBox };
