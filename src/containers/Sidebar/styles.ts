import styled from "styled-components";
import { Text } from "../../components/Text/styles";

export const SideBarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
export const Description = styled(Text)`
  margin: 24px 0 40px 0;
`
export const ThemeBtn = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 12px;
  font-weight: bold;
  background-color: #282A35;
  cursor: pointer;
`
