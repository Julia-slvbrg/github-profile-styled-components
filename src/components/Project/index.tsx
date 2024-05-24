import Text from "../Text";
import Title from "../Title";
import { Card, LinkBtn } from "./styles";

const Project = () => (
  <Card>
    <Title>Nome do Projeto</Title>
    <Text type="secondary">
      Descrição do projeto
    </Text>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)

export default Project
