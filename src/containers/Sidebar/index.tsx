import Avatar from "../../components/Avatar"
import Title from "../../components/Title"
import Text from "../../components/Text"
import { Description, SideBarContainer, ThemeBtn } from "./styles"

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={20}>Júlia Borges</Title>
      <Text type='secondary' fontSize={16}>julia-slvbrg</Text>
      <Description
        fontSize={12}
        type="primary"
      >Engenheira front-end</Description>
      <ThemeBtn>Trocar tema</ThemeBtn>
    </SideBarContainer>
  </aside>
)

export default Sidebar
