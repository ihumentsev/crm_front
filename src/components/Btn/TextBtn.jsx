import { TextButton } from './TextBtn.styled';

export default function TextBtn({ text, handler }) {
  return (
    <TextButton  onClick={handler}>
      {text}
    </TextButton>
  );
}
