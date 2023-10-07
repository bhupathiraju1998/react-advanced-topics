import styled from "styled-components/macro";

export const ColouredParagraph = styled.p`
  font-size: 24px;
  color: red;
  text-align:center;
  font-style:${props => props.fontStyle};
  font-weight:${props => props.fontWeight};
 
`;


