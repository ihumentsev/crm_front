import styled from "styled-components"
import icon from '../../images/icons/close.svg';

const BtnClose = styled.button`
position: absolute;
top: 20px;
right: 20px;
background-image: url(${icon});
background-position: center;
background-repeat: no-repeat;
width: 20px;
height: 20px;
border: none;
`

export default function CloseBtn({toggelModal}){

 
    return(
        <BtnClose onClick={toggelModal}></BtnClose>
    )
}