import styled from "styled-components";

export const StyledHeader = styled.header`
  border: 1px solid green;
  padding: 10px;

  h1 {
    color: blue;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.header};
    cursor: pointer;
  }
`;
