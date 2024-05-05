import styled from 'styled-components';
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
  /* overflow-y: auto; */
  /* height: 100%; */
  /* & .list-header {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 970px;
    margin-bottom: 20px;
  } */
  & .item-header {
    position: relative;
    display: flex;
    align-items: center;
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
    & .filter-icon{
      margin-left: 10px;
      
    }
    & .dropdown{
      width: 160px;
      position: absolute;
      top : 30px;
      right: 0px;
      background-color: #fff;
      padding: 10px;
      border-radius: 5px;
      display: none;
      &.active{
        display: block;
      }
    }
    
    & .filter-icon{
      fill: #C3D9F9;
      &.active{
        transform: rotate(180deg);
        fill: #2173EF;
      }
    }
    & .list {
  padding: 0;
  margin: 0;
  list-style-position: inside;
  & li{
    padding: 2px;
    cursor: pointer;
  &:hover{
    background-color: bisque;
  }
  }
}
  }
  & .filter{
      cursor: pointer;
    }
  & .order-list {
    padding: 0;
    margin: 0;
    min-width: 970px;
  }
`;
const ListItem = styled.ul`
position: sticky;
top: 64px;
background: #f5f6f8;
display: grid;

grid-template-columns: 110px 50px 150px 200px 150px 100px 140px 120px;;
justify-items: left;
justify-content: space-between;
align-items: center;
-webkit-box-pack: justify;
list-style: none;

padding: 15px 10px;
margin: 0px;
margin-bottom: 20px;
    
    

`

export { BtnWraper, ContentBox, ListItem};
