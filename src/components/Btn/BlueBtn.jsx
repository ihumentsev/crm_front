import { BluButton } from './BlueBtn.styled';

export default function BlueBtn({ text, handler, styleClass }) {
  return (
    <BluButton className={styleClass} onClick={handler}>
      {text}
    </BluButton>
  );
}
