import styled from 'styled-components'
const ContainerBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 1000px) {
    width: 1000px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1216px) {
    width: 100%;
    padding: 0;
  }
`;
export { ContainerBox };