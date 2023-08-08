// import { BluButton } from "components/Btn/BlueBtn.styled";
import { BtnWraper } from "./Header.styled";
import BluButton from '../Btn/BlueBtn'
export default function Header({ textHead, textBtn, handler }) {
  return (
    <BtnWraper>
      <div>{textHead}</div>
      <BluButton text={textBtn} handler={handler}></BluButton>
    </BtnWraper>
  );
}