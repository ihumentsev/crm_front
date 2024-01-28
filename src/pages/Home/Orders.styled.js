import styled from 'styled-components';
import next from '../../images/icons/next.svg'
import prev from '../../images/icons/Prev.svg'
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
  margin-top: 20px;
  margin-left: 15px;
  
  & .list-header {
    background: #f5f6f8;
    position: sticky;
    top: 64px;
    /* display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    min-width: 1120px;
    margin-bottom: 20px; */
    display: grid;
    grid-template-columns: 115px 120px 200px 100px 150px 220px 140px 120px;
justify-items: left;
justify-content: space-between;
align-items: center;
-webkit-box-pack: justify;
list-style: none;

padding: 15px 10px;
margin: 0px;
margin-bottom: 20px;
  }
  & .item-header {
    width: 150px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    color: #334d6e;
    font-style: normal;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.13px;
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
    /* min-width: 970px; */
    min-width: 1120px;
  }
`;

const WraperFiter = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: 1000px) {
      flex-wrap: nowrap;
    }
    & .input-box {
      display: flex;
    }
    & .btn-wraper {
      display: flex;
      width: 100%;

      @media screen and (min-width: 1000px) {
        width: 200px;
        margin-left: 24px;
        /* margin-bottom: 24px; */
      }
    }
    & .wraper-input {
      display: flex;
      flex-direction: column;

      &.end {
        margin-left: 24px;
      }

      & input {
        padding: 14px 20px;
        width: 100%;
        height: 40px;
        background: #ffffff;
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        background-image: url(/calendar.svg);
        background-repeat: no-repeat;
        background-position: 150px center;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #2e2e2e;
        box-sizing: border-box;
        /* @media screen and (min-width: 1000px) {
          width: 182px;
        } */
      }
      & label {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 10px;
      }
    }
    & .find-btn {
      margin-right: 20px;
      margin-top: 26px;
      height: 40px;
    }
    & .reset-btn {
      margin-top: 26px;
      height: 40px;
    }
`
const PaginationBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1000px) {
    margin-right: 0;
  }

  & .wraper-select {
    display: flex;
    flex-direction: column;
    & label {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 10px;
    }
  }
  & select {
    width: 83px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 5px 20px;
  }
  & .change-pagination {
    display: flex;
    align-items: center;
    margin-top: 40px;
    @media screen and (min-width: 1000px) {
      margin-top: 25px;
      /* margin-left: 40px; */
    }
  }
  & .prev {
    margin-right: 40px;
    width: 50px;
    height: 50px;
    background-image: url(${prev});
    background-repeat: no-repeat;
    background-position: center center;
    @media screen and (min-width: 1000px) {
      margin-right: 10px;
    }
  }
  & .next {
    margin-left: 40px;
    width: 50px;
    height: 50px;
    background-image: url(${next});
    background-repeat: no-repeat;
    background-position: center center;
    @media screen and (min-width: 1000px) {
      margin-left: 0;
    }
  }
`;
const PaginationWraper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`

export { BtnWraper, ContentBox, WraperFiter, PaginationBox , PaginationWraper};
