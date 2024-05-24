import Text from "../../components/Text";
import Title from "../../components/Title";
import { GitHubSection } from "./styles";

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Text type="primary">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus officia dolorem molestiae, iure provident vitae ratione minima labore voluptate voluptatum blanditiis sit? Explicabo praesentium at quisquam dolore reprehenderit, enim perspiciatis?
    </Text>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=julia-slvbrg&theme=blueberry&show_icons=true&hide_border=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=julia-slvbrg&theme=blueberry&show_icons=true&hide_border=true&layout=compact" />
    </GitHubSection>
  </section>
)

export default About

