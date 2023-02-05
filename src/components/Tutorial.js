import { Container } from "./styles/Container.styles";
import Card from "./Card";
import { SwitchTheme } from "./styles/Elements";

export default function Tutorial(props) {
  return (
    <Container>
      <SwitchTheme type="button" onClick={props.switchTheme}>
        Switch theme
      </SwitchTheme>
      <Card />
    </Container>
  );
}
