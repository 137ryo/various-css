/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const conaitarStyle = css`
    border: solid 2px #392eff;
    border-radius: 25px;
    padding: 5px;
    margin: 5px;
  `;
  const titleStyle = css({
    color: "blue"
  });

  return (
    <div css={conaitarStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <ButtonStyle>FIGHT!!</ButtonStyle>
    </div>
  );
};

const ButtonStyle = styled.button`
  border-radius: 25px;
  background-color: #a24eea;
`;
