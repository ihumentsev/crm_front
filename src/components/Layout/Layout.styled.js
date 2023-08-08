import styled from 'styled-components';
const MainBox = styled.main`
  background: #f5f6f8;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  /* overflow-x: auto; */
  /* padding: 20px; */
`;
const ContentWraper = styled.div`
  display: flex;
  /* background: red; */
  height: 100vh;
  /* max-width: 1900px; */

  /* & .right-box {
    width: 100%;
    overflow-y: auto;
    overflow-x: auto;
    padding: 20px;
    background: #f5f6f8;
  } */
`;
export { ContentWraper, MainBox };
