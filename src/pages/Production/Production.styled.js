import styled from 'styled-components';
// const BtnWraper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: sticky;
//   /* width: 100%; */
//   right: 0;
//   left: 0;
//   top: 0;
//   padding: 10px 10px;
//   /* box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24); */
//   background: var(--secondary-white, #fff);
//   border-bottom: solid 2px var(--divider, #ebeff2);

//   & .btn {
//     padding: 11px 14px;
//     border-radius: 4px;
//     background: var(--main-accent-blue, #109cf1);
//     box-shadow: 0px 4px 10px 0px rgba(16, 156, 241, 0.24);
//     border: none;
//     text-align: center;
//     font-family: Open Sans;
//     font-size: 13px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: normal;
//     letter-spacing: 0.13px;
//     color: var(--secondary-white, #fff);
//   }
// `;
const ContentBox = styled.div`
  padding: 20px;
  margin-top: 20px;
  margin-left: 15px;
  /* overflow-y: auto; */
  /* height: 100%; */
  & .list-header {
    position: sticky;
top: 64px;
background: #f5f6f8;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    min-width: 1120px;
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

export { ContentBox };
