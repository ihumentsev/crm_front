// import { BluButton } from "components/Btn/BlueBtn.styled";
import { BtnWraper } from "./Header.styled";
import BluButton from '../Btn/BlueBtn'
export default function Header({ textHead, textBtn, handler, inputValue, setValue }) {
  return (
    <BtnWraper>
      <div className="title">{textHead}</div>
      <div>
          <input  placeholder="Search" type='text' value={inputValue} onChange={(e) =>{setValue(e.target.value)}}/>
        </div>
      <BluButton text={textBtn} handler={handler}></BluButton>
    </BtnWraper>
  );
}