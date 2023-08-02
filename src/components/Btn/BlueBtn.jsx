import { BluButton } from './BlueBtn.styled';

export default function BlueBtn({ text, handler }) {
  return (
    <BluButton  onClick={handler}>
      {text}
    </BluButton>
  );
}
