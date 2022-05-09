import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
