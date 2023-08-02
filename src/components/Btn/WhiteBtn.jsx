
import { WhiteButton } from './WhiteBtn.styled';

export default function WhiteBtn({ text, handler }) {
  return <WhiteButton onClick={handler}>{text}</WhiteButton>;
}
