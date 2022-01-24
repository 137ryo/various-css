import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 25px;
  padding: 5px;
  margin: 5px;
`;

const STitle = styled.p`
  color: blue;
`;

const SButton = styled.button`
  border-radius: 25px;
  background-color: #a24eea;
`;
