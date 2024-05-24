import { Text as TextStyle } from './styles'

export type Props = {
  children: string;
  type?: 'primary' | 'secondary';
}

const Text = ({ children, type = 'primary'}: Props) => (
  <TextStyle
    type={type}
  >{children}</TextStyle>
)

export default Text
