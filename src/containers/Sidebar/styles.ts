import styled from "styled-components";
import { Text } from "../../components/Text/styles";

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
export const Description = styled(Text)`
  margin: 24px 0 40px 0;
`
export const ThemeBtn = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.bgColor};
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`
