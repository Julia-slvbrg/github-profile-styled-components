import { Text as TextStyle } from './styles'

export type Props = {
  children: string;
  type?: 'primary' | 'secondary';
  fontSize?: number;
}

const Text = ({ fontSize, children, type = 'primary'}: Props) => (
  <TextStyle
    type={type}
    fontSize={fontSize}
  >{children}</TextStyle>
)

export default Text
