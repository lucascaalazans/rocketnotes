import {Container, Links, Content} from './styles';
import { Header } from '../../components/Header';
import {Button} from '../../components/Button'
import { Section } from '../../components/Section/Index';
import {Tag} from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details(){
  return(
  <Container>
    <Header/>
    <Content>
      <main>
        <ButtonText title="Excluir nota"></ButtonText>

        <h1>Introdução ao React</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam cupiditate fugit. Dignissimos esse voluptas reiciendis ducimus dolorem vero temporibus cupiditate iste, minima, deleniti at fugiat officia ipsa, tempore explicabo?
        </p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="nodejs"/>
        </Section>
        <Button title= "Voltar" />
      </main>
    </Content>
  </Container>
  )
}