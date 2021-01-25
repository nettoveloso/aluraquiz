import styled from 'styled-components'

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}  >
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            Teste os seus conhecimentos
          </Widget.Header>
          <Widget.Content>
            Mais texto
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            Quizes da galera
          </Widget.Header>
          <Widget.Content>
            Da uma olhada aqui
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nettoveloso" />

    </QuizBackground>
  )
}
