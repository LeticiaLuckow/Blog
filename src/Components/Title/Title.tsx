import { TextDiv, TitleText } from "./styles";


type TitleType = {
  texto: string
}

const Title = ({texto}: TitleType) =>{
  return (
    <TextDiv>
    <TitleText>{texto}</TitleText>
    </TextDiv>
  );

}

export default Title