import nerdImage from "../assets/images/illustration.png";
import Button from "./Button";
import {
  CardContainer,
  ContentContainer,
  ButtonContainer,
} from "./styles/Container.styles";
import { Tag, H1, P, Image } from "./styles/Elements";
import { StyledTitle } from "./styles/Custom.styles";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">EXCLUSIVE</Tag>
        <H1>
          <StyledTitle color="#fff" text="React Styles Components" />
        </H1>

        <P>
          Exclusive React JS Tutorial on Styled Components where you will learn
          why we need this & how to use it.
        </P>
        <ButtonContainer>
          <Button link="https://tangailbazar.com" text="Watch now" />
          <Button link="https://tangailbazar.com" text="Visit now" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="Nerd" width="300px" />
    </CardContainer>
  );
}
