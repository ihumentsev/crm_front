import { TailContainer } from './ContainerWithTail.styled';

export default function ContainerWithTail({ text }) {
  return (
    <TailContainer className="container-with-tail">
      <p>{text}</p>
    </TailContainer>
  );
}
