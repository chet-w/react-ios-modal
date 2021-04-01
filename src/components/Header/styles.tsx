import styled from "styled-components";

export const Header = styled.header`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #efefef solid;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    justify-content: center;
  }
`;

export const CloseButton = styled.button`
  border-radius: 25px;
  font-size: 32px;
  line-height: 1;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 32px;
`;

export const Title = styled.h4`
  font-size: 24px;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 20px;
  }
`;
