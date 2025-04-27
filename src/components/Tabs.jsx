export default function Tabs({ buttons, ButtonContainer, children }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
